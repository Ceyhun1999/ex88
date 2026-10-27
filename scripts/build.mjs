// Production build: `node scripts/build.mjs` writes dist/ for https://ex88.ru.
// No dependencies. The sources stay a plain static site that runs as is; the build adds what
// production needs: one URL per language (/ru, /en, /ru/terms…, the addresses ex88.ru already
// has indexed), English pre-rendered into the HTML, canonical/hreflang/Open Graph/JSON-LD,
// inlined CSS, a hashed script, robots.txt, sitemap.xml and the host config.
import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://ex88.ru";
const LANGS = ["ru", "en"];
const read = (file) => readFileSync(join(ROOT, file), "utf8");

const PAGES = [
  { src: "index.html", slug: "", ogType: "website" },
  { src: "terms.html", slug: "terms", crumb: "footerTerms" },
  { src: "privacy.html", slug: "privacy", crumb: "footerPrivacy" },
  { src: "cookies.html", slug: "cookies", crumb: "footerCookies" },
];
const pagePath = (page, lang) => "/" + lang + (page.slug ? "/" + page.slug : "");
const pageFile = (page, lang) => (page.slug ? lang + "/" + page.slug : lang) + ".html";

/* Texts: the I18N dictionary from main.js is the single source for both languages */
const mainJs = read("assets/js/main.js");
const i18nSrc = mainJs.match(/const I18N = (\{[\s\S]*?\n {2}\});/);
if (!i18nSrc) throw new Error("I18N dictionary not found in assets/js/main.js");
const I18N = new Function("return " + i18nSrc[1])();

const escText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => escText(s).replace(/"/g, "&quot;");
const plain = (s) => s.replace(/ /g, " ");

/* Assets: the script gets a content hash so it can be cached for a year */
const jsHash = createHash("sha256").update(mainJs).digest("hex").slice(0, 10);
const JS_URL = `/assets/js/main.${jsHash}.js`;

// CSS goes inline: one stylesheet for the whole site (~13 KB gzipped) costs less than a
// render-blocking request on a phone connection
function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}
const CSS = minifyCss(read("assets/reset.css") + "\n" + read("assets/style.css"))
  .replace(/url\("fonts\//g, 'url("/assets/fonts/');

/* HTML helpers */

// Swap the text of every element marked data-i18n. Their content is plain text (main.js
// fills them with textContent), so a match up to the closing tag is exact.
function translate(html, lang) {
  const dict = I18N[lang];
  let missing = 0;
  html = html.replace(/(<(\w+)\b[^>]*\sdata-i18n="(\w+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, key, text, close) => {
    if (dict[key] === undefined) { missing++; return m; }
    return open + escText(dict[key]) + close;
  });
  html = html.replace(/<[^>]*\sdata-i18n-aria="(\w+)"[^>]*>/g, (tag, key) =>
    tag.replace(/\saria-label="[^"]*"/, "").replace(/\sdata-i18n-aria=/, ` aria-label="${escAttr(dict[key])}" data-i18n-aria=`));
  html = html.replace(/<[^>]*\sdata-i18n-content="(\w+)"[^>]*>/g, (tag, key) =>
    tag.replace(/\scontent="[^"]*"/, ` content="${escAttr(dict[key])}"`));
  const total = (html.match(/\sdata-i18n="/g) || []).length;
  const translated = (html.match(/(<(\w+)\b[^>]*\sdata-i18n="\w+"[^>]*>)[^<]*<\/\2>/g) || []).length;
  if (missing || total !== translated) throw new Error(`translate(${lang}): ${missing} missing keys, ${total - translated} elements with markup inside`);
  return html;
}

// Remove an element with its whole subtree, matching nested tags of the same name
function removeElement(html, startIndex) {
  const tag = html.slice(startIndex).match(/^<(\w+)/)[1];
  const re = new RegExp(`<${tag}\\b|</${tag}>`, "g");
  re.lastIndex = startIndex;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(0, startIndex) + html.slice(re.lastIndex);
  }
  throw new Error("Unclosed <" + tag + ">");
}

// Documents keep both languages in [data-lang-doc]; each built page keeps only its own
function keepDocLanguage(html, lang) {
  let i;
  while ((i = html.search(new RegExp(`<\\w+[^>]*data-lang-doc="(?!${lang}")`))) !== -1) html = removeElement(html, i);
  return html.replace(new RegExp(`(data-lang-doc="${lang}"[^>]*?)\\s+hidden(?=[\\s>])`), "$1");
}

function rewriteUrls(html, lang) {
  return html
    .replace(/(href|src)="(?:\.\/|\/)(#[^"]*)?"/g, (m, attr, hash) => `${attr}="/${lang}${hash || ""}"`)
    .replace(/href="(terms|privacy|cookies)\.html(#[^"]*)?"/g, (m, slug, hash) => `href="/${lang}/${slug}${hash || ""}"`)
    .replace(/(href|src)="assets\//g, '$1="/assets/')
    .replace(/srcset="([^"]*)"/g, (m, set) => `srcset="${set.replace(/(^|,\s*)assets\//g, "$1/assets/")}"`)
    .replace(/<script src="\/assets\/js\/main\.js" defer><\/script>/, `<script src="${JS_URL}" defer></script>`);
}

function jsonLd(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;
}

// Facts below are the ones the site itself shows (footer, office card, documents)
const ORGANIZATION = {
  "@type": "Organization",
  "@id": SITE + "/#organization",
  name: "Ex88",
  legalName: "SATANG DANG & CO COMPANY LIMITED",
  url: SITE + "/",
  logo: SITE + "/assets/img/logo.svg",
  email: "hello@Ex88.ru",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "362/5 Si Phraya Rd, Maha Phruttharam, Bang Rak",
    addressLocality: "Bangkok",
    postalCode: "10500",
    addressCountry: "TH",
  },
};

function structuredData(page, lang, html) {
  const t = I18N[lang];
  const url = SITE + pagePath(page, lang);
  if (!page.slug) {
    // FAQ answers exactly as the page shows them, in the page's language and order
    const keys = [...html.matchAll(/data-i18n="(faqQ\d+)"/g)].map((m) => m[1]);
    return jsonLd({
      "@context": "https://schema.org",
      "@graph": [
        ORGANIZATION,
        { "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: "Ex88.ru", inLanguage: ["ru", "en"], publisher: { "@id": SITE + "/#organization" } },
        {
          "@type": "FAQPage",
          "@id": url + "#faq",
          url,
          inLanguage: lang,
          mainEntity: keys.map((q) => ({
            "@type": "Question",
            name: plain(t[q]),
            acceptedAnswer: { "@type": "Answer", text: plain(t[q.replace("Q", "A")]) },
          })),
        },
      ],
    });
  }
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ex88.ru", item: SITE + "/" + lang },
      { "@type": "ListItem", position: 2, name: plain(t[page.crumb]), item: url },
    ],
  });
}

function headTags(page, lang, title, description) {
  const url = SITE + pagePath(page, lang);
  const image = `${SITE}/assets/img/og-${lang}.jpg`;
  const locale = { ru: "ru_RU", en: "en_US" };
  const other = lang === "ru" ? "en" : "ru";
  return [
    `<link rel="canonical" href="${url}">`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE + pagePath(page, l)}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE + pagePath(page, "ru")}">`,
    `<meta property="og:type" content="${page.ogType || "article"}">`,
    `<meta property="og:site_name" content="Ex88.ru">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${escAttr(title)}">`,
    `<meta property="og:description" content="${escAttr(description)}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${escAttr(plain(I18N[lang].heroTitle))}">`,
    `<meta property="og:locale" content="${locale[lang]}">`,
    `<meta property="og:locale:alternate" content="${locale[other]}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escAttr(title)}">`,
    `<meta name="twitter:description" content="${escAttr(description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].map((tag) => "  " + tag).join("\n");
}

function buildPage(page, lang) {
  let html = read(page.src);
  html = html.replace(/<html lang="\w+"/, `<html lang="${lang}"`);
  if (lang !== "ru") html = translate(html, lang);
  html = keepDocLanguage(html, lang);

  const title = html.match(/<title[^>]*>([^<]*)<\/title>/)[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)[1];
  const unescape = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

  // Head: drop what the build replaces, then add the per-URL tags after the description
  html = html
    .replace(/\s*<link rel="canonical"[^>]*>/, "")
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "")
    .replace(/(<meta name="description"[^>]*>)/, `$1\n${headTags(page, lang, unescape(title), unescape(description))}`)
    .replace(/\s*<link rel="stylesheet" href="assets\/reset\.css">\s*<link rel="stylesheet" href="assets\/style\.css">/, `\n  <style>${CSS}</style>`)
    .replace(/<\/head>/, `  ${structuredData(page, lang, html).replace(/\n/g, "\n  ")}\n</head>`);

  // The English page needs only the Latin subsets
  if (lang === "en") html = html.replace(/\s*<link rel="preload" href="assets\/fonts\/\w+-cyrillic\.woff2"[^>]*>/g, "");

  // The map speaks the page's language
  html = html.replace(/(maps\.google\.com\/maps\?[^"]*?&amp;hl=)ru/, `$1${lang}`);

  html = rewriteUrls(html, lang);
  html = html.replace(/<!--(?!\[)[\s\S]*?-->/g, "").replace(/\n\s*\n+/g, "\n");
  return html;
}

/* Output */
rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, "assets/js"), { recursive: true });
for (const dir of ["img", "fonts"]) {
  cpSync(join(ROOT, "assets", dir), join(DIST, "assets", dir), {
    recursive: true,
    filter: (src) => !src.endsWith(".DS_Store"),
  });
}
writeFileSync(join(DIST, JS_URL), mainJs);

const urls = [];
for (const page of PAGES) {
  for (const lang of LANGS) {
    const file = join(DIST, pageFile(page, lang));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, buildPage(page, lang));
    urls.push({ page, lang });
  }
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ page, lang }) => `  <url>
    <loc>${SITE + pagePath(page, lang)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + pagePath(page, l)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + pagePath(page, "ru")}"/>
  </url>`).join("\n")}
</urlset>
`);

writeFileSync(join(DIST, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

// Netlify: clean URLs are served by forced rewrites so /ru never competes with the ru/ folder;
// old and .html addresses answer with one permanent redirect to the page that replaced them.
// Netlify matches rules with and without a trailing slash, so /ru/ is covered by the /ru rewrite.
const redirects = [
  ["/", "/ru", 301],
  ["/index.html", "/ru", 301],
  ...PAGES.filter((p) => p.slug).flatMap((p) => [
    ["/" + p.slug, "/ru/" + p.slug, 301],
    ["/" + p.slug + ".html", "/ru/" + p.slug, 301],
  ]),
  ["/legal", "/ru/terms", 301],
  ...urls.map(({ page, lang }) => [pagePath(page, lang), "/" + pageFile(page, lang), "200!"]),
];
writeFileSync(join(DIST, "_redirects"), redirects.map((r) => r.join("  ")).join("\n") + "\n");

writeFileSync(join(DIST, "_headers"), `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Strict-Transport-Security: max-age=31536000

/assets/js/*
  Cache-Control: public, max-age=31536000, immutable

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/assets/img/*
  Cache-Control: public, max-age=2592000
`);

// Local preview with \`npx serve dist\`: the same URLs as production
writeFileSync(join(DIST, "serve.json"), JSON.stringify({
  cleanUrls: true,
  trailingSlash: false,
  redirects: redirects.filter((r) => r[2] === 301).map(([source, destination]) => ({ source, destination, type: 301 })),
  rewrites: urls.map(({ page, lang }) => ({ source: pagePath(page, lang), destination: "/" + pageFile(page, lang) })),
}, null, 2));

console.log(`dist/ ready: ${urls.length} pages, script ${JS_URL}, CSS inline ${(CSS.length / 1024).toFixed(1)} KB`);
if (!existsSync(join(DIST, "assets/img/og-ru.jpg"))) console.warn("Missing assets/img/og-ru.jpg");
