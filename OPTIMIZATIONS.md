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
- **Folder structure:** `src/component/` (flat, 12 files) reorganized into
  `src/components/{common,layout,sections}`, plus new `src/config` and
  `src/seo`.
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
- Renamed inconsistent/typo'd files for clarity: `Foucus.jsx` → `FocusGrid.jsx`,
  `Footer1.jsx` → `Footer.jsx`, `Allsection.jsx` → `Services.jsx`,
  `Floating.jsx` → `FloatingActions.jsx`.

## 3–7. SEO (technical, local, content, structured data)
- **React Helmet Async** (`src/seo/SEO.jsx`) renders: dynamic `<title>`,
  meta description, meta keywords, canonical URL, robots meta, theme-color,
  author, `<html lang>`, Open Graph tags, and Twitter Card tags.
- **JSON-LD structured data** (`src/seo/schema.js`), combined into one
  `@graph`: `LocalBusiness`, `Organization`, six `Service` entries (AC repair,
  installation, gas filling, AMC/maintenance, deep cleaning, emergency
  service), `FAQPage`, and `BreadcrumbList`.
- **New visible FAQ section** whose content is the single source of truth for
  the `FAQPage` schema (previously the JSON-LD FAQ existed in `index.html`
  with no matching visible content on the page — a mismatch Google can
  discount).
- **Local SEO keyword coverage** naturally worked into Hero, About, Services
  and WhyChooseUs copy: AC Service/Repair/Installation/Gas Filling/
  Maintenance/AMC/Cleaning Coimbatore, Split AC, Window AC, AC Technician,
  Emergency AC Service, "AC service near me".
- `public/robots.txt` (already present, verified correct) and new
  `public/sitemap.xml` covering the homepage and each service anchor.
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
  `WhyChooseUs`, `FocusGrid`, `Gallery`, `FAQ`, `Contact`) are now code-split
  with `React.lazy` + `Suspense`, so the initial bundle only needs the
  navbar and hero to render.
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
  scroll for users who request it).
- Visible focus rings (`focus-visible:outline`) added to every interactive
  element — previously many relied on the browser default only.

## 10. Deliverables in this package
- Fully restructured, optimized React source (`src/`)
- `robots.txt`, `sitemap.xml`, `manifest.json` (`public/`)
- JSON-LD schema builders (`src/seo/schema.js`)
- `README.md` with setup/architecture notes
- This file (`OPTIMIZATIONS.md`)

## One thing to do on your side
`react-helmet-async` was added to `package.json` but this sandbox has no
network access to install packages or run a production build. Run
`npm install` once locally/on your CI before your next `npm run build` —
everything has been syntax-checked and import-resolution-checked by hand,
but a real `npm run build` + Lighthouse pass is worth doing before deploying.
EOF
