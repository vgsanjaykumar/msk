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
  seo/
    SEO.jsx              # React Helmet Async component (title, meta, OG, Twitter, JSON-LD)
    schema.js            # JSON-LD builders (LocalBusiness, Organization, Service, FAQ, Breadcrumb)
  components/
    common/              # Reusable UI: Button, SectionHeading, ServiceCard, SkipLink, motion presets
    layout/               # Navbar, Footer, FloatingActions
    sections/             # Hero, Services, About, WhyChooseUs, FocusGrid, Gallery, FAQ, Contact, BrandsSwiper
public/
  manifest.json, robots.txt, sitemap.xml
  assets/, brands/, our-work/   # images (kebab-case, no spaces)
```

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
- FAQ content in `src/components/sections/FAQ.jsx` is the single source of
  truth for both the visible FAQ UI and the `FAQPage` JSON-LD — keep them in
  sync if you edit questions.

See `OPTIMIZATIONS.md` for the full list of changes made during the
enhancement pass.
