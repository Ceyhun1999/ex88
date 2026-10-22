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
- Allowed motion: hover effects, number animations and the slow wave motion of the hero guilloche lines. Nothing else moves: no intro or entrance animations, no scroll or pointer parallax, no animated clicks or state changes, no page transitions.
- Guilloche waves (`setupGuilloche` in `assets/js/main.js`): the lines themselves deform, the layer never moves or scales. 48s seamless loop, at tau = 0 the drawing equals the original. Each frame redraws only a few lines in turn; animation pauses off-screen, in hidden tabs and with reduced motion (static original drawing).
- Hover: colour, shadow or underline changes and small effects on the icon inside a button. Buttons never move or shift on hover (no magnetic effect).
- Numbers: the calculator result counts up or down to the new value when the pair changes (`setResult` in `assets/js/main.js`, plain `requestAnimationFrame`, no libraries); the rate ticker keeps scrolling and has a pause button (WCAG 2.2.2).
- No animation libraries by default. Add GSAP only if the user explicitly asks; the skills in `.claude/skills/` stay installed for that case.
- Animate only `transform` and `opacity`. Use the individual CSS properties `scale`, `rotate`, `translate` for hover.
- Honour `prefers-reduced-motion`: the number roll and ticker must stop (the reset in `assets/reset.css` plus a check in JS).
- Never block scroll or clicks; keep the page free of horizontal overflow, test at 375px.
- Reviews slider: native horizontal scroll with scroll-snap (touch swipe works). Arrows and dots use smooth scrolling, instant with reduced motion. No autoplay.

## Languages
- The site is bilingual (RU default, EN). Every visible text and aria-label goes through the `I18N` dictionary in `assets/js/main.js`: static HTML gets `data-i18n="key"` (text) or `data-i18n-aria="key"` (aria-label) with the Russian text kept in the HTML; JS-rendered text uses `t("key")`.
- When adding a section, add both RU and EN strings, and check that the English text does not break the layout (English is often longer).
- Numbers follow the language: `ru-RU` (50 000,00) and `en-US` (50,000.00).

## Content
- The reviews in `REVIEWS` (`assets/js/main.js`) are demo placeholders. Replace them with real client reviews, used with permission, before launch; never publish invented reviews.
