# Frontend Development Rules

## Technology
- Use only HTML5, CSS3 and vanilla JavaScript.
- Do not use React, Vue, Tailwind or other frameworks.
- Use semantic HTML and modern CSS.
- Keep code clean, modular and maintainable.

## Design Quality
- Create premium, distinctive website designs.
- Avoid generic AI-generated layouts.
- Use strong typography and visual hierarchy.
- Build a consistent design system using CSS variables.
- Pay attention to spacing, alignment and proportions.
- Make every section look intentionally designed.

## Responsive Design
- Use a mobile-first approach.
- Test layouts at 375px, 768px, 1024px and 1440px.
- Prevent horizontal overflow and broken layouts.
- Ensure menus and interactive elements work on touch devices.

## Animations
- Prefer CSS animations for simple effects.
- Use GSAP only when complex animation is justified.
- Respect prefers-reduced-motion.
- Keep animations smooth and purposeful.

## Quality
- Follow accessibility best practices.
- Optimize images, fonts and loading speed.
- Implement basic technical SEO.
- Avoid duplicate CSS and unnecessary JavaScript.
- Ensure all interactive elements actually work.

## Development Workflow
1. Analyze the requirements.
2. Define the visual direction and design tokens.
3. Implement the website.
4. Open it in a browser.
5. Test desktop, tablet and mobile layouts.
6. Fix visual and functional issues.
7. Review the final result before completion.

## Required skills for UI work
- Every new section or visual change: invoke the `frontend-design` skill first (design plan grounded in the subject, then build), and run the `web-design-guidelines` skill on the result before finishing. Use the animation skills (`gsap-*`, `accessible-animation`, `micro-interaction`, `svg-animation`) whenever motion is involved.
- Verify in the browser with `agent-browser` (375/768/1024/1440), and say in the final report which skills were used.

## Animation Rules
- Allowed motion: hover effects, number animations, the slow wave motion of the guilloche lines (hero, FAQ chat card and contact panel), the looping conversation in the FAQ chat card (bubbles slide in, typing dots; pauses off-screen and in hidden tabs, static with reduced motion) the shine sweep on the floating contact button, and the rates loading state (sheen on placeholder bars, the logo arrows turning next to "Загружаем курс…"; a soft opacity pulse with reduced motion; gone as soon as the rates arrive). Nothing else moves: no intro or entrance animations, no scroll or pointer parallax, no animated clicks or state changes, no page transitions. Exception: in-page `#` links scroll smoothly to just below the sticky header (instant with reduced motion).
- Guilloche waves (`setupGuilloche` in `assets/js/main.js`): the lines themselves deform, the layer never moves or scales. 48s seamless loop, at tau = 0 the drawing equals the original. Each frame redraws only a few lines in turn; animation pauses off-screen, in hidden tabs and with reduced motion (static original drawing).
- Hover: colour, shadow or underline changes and small effects on the icon inside a button. Buttons never move or shift on hover (no magnetic effect).
- Numbers: the calculator result counts up or down to the new value when the pair changes (`setResult` in `assets/js/main.js`, plain `requestAnimationFrame`, no libraries); the rate ticker (currently commented out in `index.html` and `--ticker-h: 0px`; the script tolerates its absence) keeps scrolling and has a pause button (WCAG 2.2.2).
- Shine sweep (`.fab` in `assets/style.css`): only the highlight's `transform` moves, the buttons stay put. A slow endless loop (7s) on all three pills, offset so it travels up the stack; endless by the client's choice. Off with reduced motion (static highlight).
- No animation libraries by default. Add GSAP only if the user explicitly asks; the `gsap-*` skills stay installed globally (`~/.claude/skills/`) for that case.
- Animate only `transform` and `opacity`. Use the individual CSS properties `scale`, `rotate`, `translate` for hover.
- Honour `prefers-reduced-motion`: the number roll and ticker must stop (the reset in `assets/reset.css` plus a check in JS).
- Never block scroll or clicks; keep the page free of horizontal overflow, test at 375px.
- Reviews slider: native horizontal scroll with scroll-snap (touch swipe works), endless loop via cloned cards (`REVIEWS_CLONES`). Autoplay every 5s (`REVIEWS_INTERVAL`; the client first asked for 2s, then found it too fast); it holds on hover, keyboard focus, touch, off-screen and in hidden tabs, has a pause button (WCAG 2.2.2) and is off by default with reduced motion. Arrows use smooth scrolling, instant with reduced motion.

## Languages
- The site is bilingual (RU default, EN). Every visible text and aria-label goes through the `I18N` dictionary in `assets/js/main.js`: static HTML gets `data-i18n="key"` (text) or `data-i18n-aria="key"` (aria-label) with the Russian text kept in the HTML; JS-rendered text uses `t("key")`.
- When adding a section, add both RU and EN strings, and check that the English text does not break the layout (English is often longer).
- Numbers follow the language: `ru-RU` (50 000,00) and `en-US` (50,000.00).

## Content
- The reviews in `REVIEWS` (`assets/js/main.js`) are demo placeholders. Replace them with real client reviews, used with permission, before launch; never publish invented reviews.
- Document pages `terms.html`, `privacy.html`, `cookies.html` share the header, footer and `main.js` (the script stops after the shared part when there is no calculator). Each holds both languages in `[data-lang-doc="ru|en"]`. Terms and privacy texts come from the client (ex88.ru/legal/*.txt); the cookie policy describes what this site actually stores and loads, so update it before adding analytics, new embeds or cookies.
- Calculator data comes from the EX-88 API (docs: https://ex-88.pro/docs), which allows the site's domain via CORS (a new domain must be added on the API side). `GET /api/rates` gives the pairs, receive methods, ranges, the rates list and the ticker (general rate only, no `receiveMethodId`, by the client's choice). The result itself comes from `POST /api/exchange/calculate` (public, debounced, same rounding as the bot); the rates give an instant estimate first and stay if the server does not answer. The server has a minimum per pair but no maximum.
- Contact links (Telegram bot, mini app, WhatsApp) come from `GET /api/admin/public-config` (`links` and `LINK_TARGETS` in `assets/js/main.js`); built-in defaults are used until it answers, and a link with no address is hidden. Do not hard-code them again.

## Production build and SEO
- `node scripts/build.mjs` builds `dist/` (no dependencies). Production URLs are `/ru`, `/en`, `/ru|en/terms`, `/ru|en/privacy`, `/ru|en/cookies`: they keep the addresses ex88.ru already has indexed. Root and old addresses 301 to them (`dist/_redirects`, `deploy/nginx.conf`).
- The build pre-renders English from `I18N`, so every `data-i18n` element must hold plain text only (the build stops otherwise). On built pages the language switch navigates between the hreflang URLs; in the sources it switches in place.
- Canonical, hreflang, Open Graph, JSON-LD (Organization, WebSite, FAQPage from the visible FAQ, BreadcrumbList), sitemap and robots come from the build; do not hand-write them in the HTML. Organization data only from what the site shows.
- Fonts are self-hosted in `assets/fonts` (Google Fonts subsets, `font-display: swap`); first-screen subsets are preloaded. CSS is inlined by the build; `main.js` is loaded with `defer` and hashed.
- Lighthouse baseline and results: `reports/`, `SEO_PERFORMANCE_REPORT.md`.
