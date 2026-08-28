# MSK Solution — AC Service Coimbatore

Marketing landing page for MSK Solution, an AC service and home appliance
repair company in Coimbatore. Built with React 19 + Vite + Tailwind CSS,
optimized for local SEO, performance and accessibility.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # ESLint
```

## Project structure

```
src/
  config/site.js        # Single source of truth: phone, WhatsApp, email, address, keywords
  data/faqs.js           # FAQ content — shared by the visible FAQ section and FAQPage JSON-LD
  seo/
    SEO.jsx              # React Helmet Async component (title, meta, OG, Twitter, JSON-LD)
    schema.js            # JSON-LD builders (LocalBusiness, Organization, Service, FAQ, Breadcrumb)
  components/
    common/              # Reusable UI: Button, SmartLink, SectionHeading, ServiceCard, SkipLink,
                          # AnimatedCounter, FloatingBlobs, SectionSkeleton, motion presets
    layout/               # Layout (route shell), Navbar, Footer, FloatingActions, ScrollManager
    sections/             # Hero, Services, About, WhyChooseUs, FocusGrid, Gallery, FAQ, Contact, BrandsSwiper
  pages/
    Home.jsx              # The main single-page layout (all sections above)
    PrivacyPolicy.jsx, Disclaimer.jsx, NotFound.jsx
  App.jsx                 # React Router routes, wrapped in the shared Layout
  main.jsx                 # BrowserRouter + HelmetProvider + root render
public/
  manifest.json, robots.txt, sitemap.xml
  _redirects, .htaccess  # SPA fallback so /privacy-policy etc. don't 404 on direct load/refresh
  assets/, brands/, our-work/   # images (kebab-case, no spaces)
```

## Routing

The site is a single scrolling homepage (`/`) plus two small standalone
pages (`/privacy-policy`, `/disclaimer`) reachable from the footer, and a
`/404` fallback for unmatched URLs — all defined in `src/App.jsx` using
React Router DOM. Because `BrowserRouter` relies on the server sending
`index.html` for any path, **deploying to Apache/cPanel or Netlify needs
the included `public/.htaccess` or `public/_redirects` file** (Vite copies
both into `dist/` automatically) — without it, a direct visit to
`/privacy-policy` or a page refresh on that route will 404.

Section links (e.g. "AC Service" in the navbar) render as plain
`<a href="#ac-service">` while already on the homepage for an instant
native scroll, and automatically switch to a React Router `Link` when
you're on another page — see `src/components/common/SmartLink.jsx`.

## Updating business info

Everything phone/WhatsApp/email/address-related lives in `src/config/site.js`.
Change it once and it propagates through the navbar, footer, contact form,
floating buttons and structured data automatically.

## SEO

- Dynamic meta tags + JSON-LD are rendered via `react-helmet-async`
  (`src/seo/SEO.jsx`), with a baseline copy of the same tags in `index.html`
  as a no-JS fallback.
- `public/robots.txt` and `public/sitemap.xml` are ready for submission to
  Google Search Console — update the sitemap if new sections/pages are added.
- FAQ content in `src/data/faqs.js` is the single source of truth for both
  the visible FAQ UI (`src/components/sections/FAQ.jsx`) and the `FAQPage`
  JSON-LD — keep them in sync by editing that one file.

See `OPTIMIZATIONS.md` for the full list of changes made during the
enhancement pass.
