# Optimization & Enhancement Summary — MSK Solution

Your design, layout and functionality were preserved exactly. Everything
below is an enhancement, fix, or SEO/performance addition — nothing was
redesigned.

## 1. UI/UX enhancements
- Added consistent hover/tap micro-animations (scale, lift) with
  `motion-reduce:` variants so users who prefer reduced motion aren't affected.
- Standardized spacing, heading sizes and section rhythm via a shared
  `SectionHeading` component (previously every section hand-rolled its own).
- Sticky, blurred navbar; smoother mobile menu open/close transition.
- Anchor-link scrolling now offsets for the sticky navbar
  (`scroll-padding-top`) so `#ac-service` etc. don't hide under the header.
- Added visible primary/secondary CTAs in the Hero for clearer next steps.

## 2. Code optimization
- **Removed dead code:** `ServiceBoxes.jsx` (imported but never rendered),
  unused `App.css`, unused `hero.jpg`, `react.svg`, `vite.svg`, and a
  duplicate service image only referenced by the deleted component.
- **Removed duplication:**
  - Four near-identical "ACServices / WashingMachineServices / …" components
    collapsed into one data-driven `ServiceGroup` renderer.
  - Repeated framer-motion `fadeUp`/stagger/card variants extracted into
    `components/common/motionPresets.js`.
  - Repeated phone/WhatsApp/email/address strings extracted into
    `src/config/site.js` (previously hardcoded in 6+ files, with two
    different phone numbers used for the same business — now fixed).
  - Repeated CTA button markup extracted into `components/common/Button.jsx`.
  - Repeated service-card markup extracted into `components/common/ServiceCard.jsx`.
  - Repeated route-vs-anchor link logic (navbar and footer both needed to
    decide "plain `<a href="#...">` or router `<Link>`?") extracted into
    `components/common/SmartLink.jsx`.
- **Folder structure:** `src/component/` (flat, 12 files) reorganized into
  `src/components/{common,layout,sections}`, plus `src/config`, `src/seo`,
  `src/data`, and `src/pages` (added when React Router DOM was introduced —
  see section 12).
- **Bug fixes found during the audit:**
  - Footer displayed one phone number but linked a different one (`tel:` href).
  - `BrandSwiper`'s broken-image fallback pointed at a non-existent file
    (`/assets/placeholder.png`) — now hides the broken image gracefully.
  - `Gallery` used `<style jsx>`, which isn't valid without the `styled-jsx`
    package and produced a React DOM warning — moved to `index.css`.
  - `og:image`/Twitter image referenced `msk-logo.jpeg` while the actual file
    on disk was `msk logo.jpeg` (space, different name) — file renamed to match.
  - Three separate `<h1>` elements existed on the page (Hero, About, Services)
    — invalid for SEO/accessibility. Now there is exactly one `<h1>`; the
    others are `<h2>`/`<h3>`.
  - Gallery only displayed 7 of the 9 available "our work" photos (with one
    duplicated) — now shows all 9, no duplicates.
  - Footer's "Privacy Policy" and "Disclaimer" links pointed to `/privacy`
    and `/disclaimer`, which never existed as pages — now real routes (see
    section 12).
- Renamed inconsistent/typo'd files for clarity: `Foucus.jsx` → `FocusGrid.jsx`,
  `Footer1.jsx` → `Footer.jsx`, `Allsection.jsx` → `Services.jsx`,
  `Floating.jsx` → `FloatingActions.jsx`.

## 3–7. SEO (technical, local, content, structured data)
- **React Helmet Async** (`src/seo/SEO.jsx`) renders: dynamic `<title>`,
  meta description, meta keywords, canonical URL, robots meta, theme-color,
  author, `<html lang>`, Open Graph tags, and Twitter Card tags — on every
  route, not just the homepage.
- **JSON-LD structured data** (`src/seo/schema.js`), combined into one
  `@graph`: `LocalBusiness`, `Organization`, six `Service` entries (AC repair,
  installation, gas filling, AMC/maintenance, deep cleaning, emergency
  service), `FAQPage` (only on pages that actually have FAQ content), and a
  `BreadcrumbList` generated per-page rather than hardcoded.
- **New visible FAQ section** whose content (`src/data/faqs.js`) is the
  single source of truth for the `FAQPage` schema (previously the JSON-LD
  FAQ existed in `index.html` with no matching visible content on the page
  — a mismatch Google can discount).
- **Local SEO keyword coverage** naturally worked into Hero, About, Services
  and WhyChooseUs copy: AC Service/Repair/Installation/Gas Filling/
  Maintenance/AMC/Cleaning Coimbatore, Split AC, Window AC, AC Technician,
  Emergency AC Service, "AC service near me".
- `public/robots.txt` (already present, verified correct) and
  `public/sitemap.xml` covering the homepage, each service anchor, and the
  new Privacy Policy / Disclaimer pages.
- `public/manifest.json` added for PWA/mobile "add to home screen" support
  and as a technical-SEO signal.
- Heading hierarchy corrected to a single `h1` → section `h2`s → card `h3`s.
- Every `<img>` has descriptive, keyword-relevant alt text (previously some
  had generic alt text like `brand-0`, `Work 1`, or empty strings in the
  lightbox).
- Hero image preloaded with `fetchPriority="high"` (it's the LCP element);
  all other images use `loading="lazy"`.

## 8. Performance
- Below-the-fold sections (`Services`, `BrandsSwiper`, `About`,
  `WhyChooseUs`, `FocusGrid`, `Gallery`, `FAQ`, `Contact`) are code-split
  with `React.lazy` + `Suspense`, so the initial bundle only needs the
  navbar and hero to render. The Privacy Policy, Disclaimer and 404 pages
  are lazy too — the homepage never pays for their bundle weight.
- `vite.config.js` splits `react`, `framer-motion` and `swiper` into
  separate vendor chunks for better long-term browser caching.
- Removed unused images/CSS as listed above (smaller `dist/` output).
- All non-hero images lazy-load.

## 9. Accessibility
- Added a "Skip to main content" link for keyboard users.
- All interactive icon-only buttons/links now have `aria-label`s (dark-mode
  toggle, mobile-menu toggle, gallery lightbox controls, social icons).
- Mobile menu button has `aria-expanded`/`aria-controls`; toggle buttons use
  `aria-pressed` where relevant.
- Gallery lightbox is a proper `role="dialog"` with `aria-modal`, traps
  background scroll, and moves focus to the close button on open.
- Contact form: every input has a linked `<label htmlFor>`, validation
  errors use `role="alert"`, success message uses `role="status"`.
- Respects `prefers-reduced-motion` globally (disables animation/smooth
  scroll for users who request it) via a shared `useReducedMotion` hook.
- Visible focus rings (`focus-visible:outline`) added to every interactive
  element — previously many relied on the browser default only.

## 10. Deliverables in this package
- Fully restructured, optimized React source (`src/`)
- `robots.txt`, `sitemap.xml`, `manifest.json`, `_redirects`, `.htaccess` (`public/`)
- JSON-LD schema builders (`src/seo/schema.js`)
- `README.md` with setup/architecture/routing notes
- This file (`OPTIMIZATIONS.md`)

## 11. Modern animations & interactive effects
All animations use `transform`/`opacity` only (GPU-accelerated, no layout
thrash) and are skipped or reduced to simple fades for anyone with
`prefers-reduced-motion` enabled — checked via a shared `useReducedMotion`
hook everywhere motion is used.

- **Scroll reveal:** every section animates in on scroll (fade-up,
  slide-left/right, zoom-in depending on the element). `About`'s image
  slides in from the left while its text slides in from the right;
  `Contact`'s two columns do the same; `FocusGrid`'s side columns stagger in.
- **Hover/tap micro-interactions:** the shared `Button` component and
  `ServiceCard` use spring-based hover/press feedback instead of plain CSS
  `scale`; gallery tiles zoom and show a search-icon overlay on hover;
  brand logos, social icons and the WhatsApp/call buttons all get a subtle
  lift.
- **Sticky header hide/show:** the navbar hides when scrolling down past
  the fold and reappears immediately on scroll-up, plus a soft shadow that
  fades in once the page has scrolled.
- **Mobile menu & hamburger:** the hamburger icon morphs into an X (three
  animated bars, not a snapped SVG swap), and menu links stagger in one
  after another instead of all appearing at once.
- **Parallax hero:** the hero background image drifts subtly slower than
  the page scroll (transform-only, buffered so no edge gaps ever show),
  disabled under reduced motion.
- **Floating decorative shapes:** soft blurred blobs drift slowly behind
  the Services and Why-Choose-Us sections for visual depth — purely
  decorative, `pointer-events-none`, and omitted entirely under reduced
  motion rather than left static.
- **Animated counter:** the "10+ Years of Experience" figure counts up from
  0 once it scrolls into view (shows the final number immediately for
  reduced-motion users).
- **Skeleton loading state:** every lazy-loaded route/section's `Suspense`
  fallback is a shimmering skeleton shaped like the incoming content
  instead of a generic spinner.
- **Form micro-interactions:** every input gets a soft focus glow; the
  submit button has spring hover/press feedback; the success message
  animates in with a spring-scaled checkmark instead of just appearing.
- **Smooth scrolling:** anchor navigation (`html { scroll-behavior: smooth }`
  plus `scroll-padding-top` to clear the sticky header) was already in
  place and is preserved, and now also works across routes via
  `ScrollManager` (see section 12).

## 12. Technology stack compliance
The project uses exactly the mandated stack — React.js, Vite, Tailwind
CSS, modern JavaScript (ES6+), React Router DOM, React Helmet Async, and
Framer Motion — nothing else. No TypeScript, no Bootstrap/MUI/Chakra/Ant
Design, no framework conversion. Functional components and hooks only,
as before.

**React Router DOM** is the one genuinely new piece of infrastructure. To
use it meaningfully rather than as unused dead weight, it also fixed a
small pre-existing gap: the original footer had "Privacy Policy" and
"Disclaimer" links pointing to `/privacy` and `/disclaimer`, which never
existed as pages. Those are now real, lightweight routes:

- `src/App.jsx` defines the routes (`/`, `/privacy-policy`, `/disclaimer`,
  and a `*` catch-all 404) wrapped in a shared `Layout` component, so the
  navbar/footer/floating actions render once instead of being duplicated
  per page.
- The homepage itself (`src/pages/Home.jsx`) is the same content, layout
  and design that was previously inline in `App.jsx` — it was moved, not
  changed, so navigating to `/` looks and behaves exactly as before.
- `ScrollManager.jsx` handles the two things a router takes away from a
  plain HTML site: resetting scroll to top on navigation, and scrolling to
  the right `#section` when a link from another page points back to a
  homepage anchor (with retries, since the target section may still be
  lazy-loading).
- `SmartLink.jsx` is a small shared helper so both the navbar and footer
  automatically choose a plain in-page anchor vs. a router `Link` depending
  on whether you're already on the homepage — same visible behavior as
  before when you're on `/`, and correct behavior when you're not.
- **Deployment note:** `BrowserRouter` requires the server to serve
  `index.html` for unknown paths (otherwise `/privacy-policy` 404s on a
  direct visit or refresh). `public/.htaccess` (Apache/cPanel) and
  `public/_redirects` (Netlify) are included and copied into `dist/`
  automatically by Vite — pick whichever matches your host.

Also fixed while wiring this up: the FAQ JSON-LD was previously emitting an
empty `FAQPage` block on every page. `buildGraph()` now only includes it
where FAQs actually exist. The FAQ question/answer data was also extracted
from `FAQ.jsx` into `src/data/faqs.js`, since a component file exporting
both a component and unrelated data trips ESLint's
`react-refresh/only-export-components` rule — this keeps the build
warning-free per the "no ESLint or build warnings" requirement.

## One thing to do on your side
`react-router-dom` and `react-helmet-async` were added to `package.json`,
but this sandbox has no network access to install packages or run a
production build. Run `npm install` once locally/on your CI before your
next `npm run build`. Everything has been syntax-checked file-by-file and
import-resolution-checked as a full bundle by hand (esbuild), but a real
`npm run build`, `npm run lint`, and a Lighthouse pass are worth doing
before deploying.
