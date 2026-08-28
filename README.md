# MSK Solution — Appliance Repair Services Coimbatore

Multi-page marketing website for MSK Solution, an AC service and home appliance
repair company in Coimbatore. Built with React 18 + Vite + Tailwind CSS +
React Router DOM, optimized for local SEO, performance and accessibility.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # ESLint
```

## Routes

```
/                                          Home
/about                                     About
/services                                  Service directory
/ac-service-coimbatore                     AC service
/tv-repair-coimbatore                      TV repair
/washing-machine-repair-coimbatore         Washing machine repair
/refrigerator-repair-coimbatore            Refrigerator repair
/areas-we-serve                            Areas we serve
/contact                                   Contact
/book-service                              Booking form
/privacy-policy, /disclaimer               Legal
*                                          404
```

The site is a client-rendered SPA, so **deploying to Apache/cPanel or Netlify
needs the included `public/.htaccess` or `public/_redirects` file** (Vite
copies both into `dist/` automatically) — without it, a direct visit to an
inner route 404s on the server before React Router ever loads.

## Project structure

```
src/
  config/site.js          # Single source of truth: phone, WhatsApp, email, address, keywords
  data/
    services.js            # Content driving the 4 dedicated service pages
    serviceFaqs.js          # Per-service FAQ content (unique per page)
    generalFaqs.js           # Company-wide FAQ content (homepage)
  seo/
    SEO.jsx                 # React Helmet Async component (title, meta, OG, Twitter, JSON-LD)
    schema.js                # JSON-LD builders (LocalBusiness, Organization, Service, FAQ, Breadcrumb)
  components/
    common/                  # Button, Breadcrumbs, CTASection, SectionHeading, ServiceCard, etc.
    layout/                   # Layout, Navbar, Footer, FloatingActions, MobileBottomBar, ScrollManager
    sections/                 # Hero, About, WhyChooseUs, FocusGrid, Gallery, Contact, BrandsSwiper, etc.
    services/                 # ServicePage template + its building blocks (Hero, Overview, Problems, FAQ...)
    forms/                    # ContactForm (inline on Contact page), BookingForm (dedicated Book Service page)
  pages/                      # One file per route, composing the components above
public/
  manifest.json, robots.txt, sitemap.xml
  _redirects, .htaccess       # SPA fallback so inner routes don't 404 on direct load/refresh
  assets/, brands/, our-work/  # images (kebab-case, no spaces)
```

## Adding a new dedicated service page

1. Add an entry to `src/data/services.js` (SEO, copy, services, problems).
2. Add its FAQs to `src/data/serviceFaqs.js` under a new key.
3. Create a one-line page component in `src/pages/` (see `ACService.jsx`).
4. Register the route in `src/App.jsx`.
5. Add it to `public/sitemap.xml` and `src/components/layout/Footer.jsx` (picked up automatically since Footer reads from `data/services.js`).

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
- FAQ content lives in `src/data/serviceFaqs.js` (per-service) and
  `src/data/generalFaqs.js` (homepage) — each is the single source of truth
  for both its visible FAQ accordion and its `FAQPage` JSON-LD via the
  `faqs` prop passed to `SEO`.

See `OPTIMIZATIONS.md` for the full list of changes made during the
enhancement pass.
