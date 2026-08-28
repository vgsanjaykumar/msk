import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import { buildGraph } from "./schema";

/**
 * Central SEO component. Renders every tag required for on-page SEO:
 * title, description, keywords, canonical, robots, OG, Twitter Card,
 * theme-color, language and JSON-LD structured data.
 */
export default function SEO({
  title = "Appliance Repair Services in Coimbatore | MSK Solution",
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  path = "/",
  image = "/assets/msk-logo.jpeg",
  faqs = [],
  breadcrumbTrail,
  noindex = false,
}) {
  const canonicalUrl = `${siteConfig.url}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  const jsonLd = buildGraph(faqs, breadcrumbTrail);

  return (
    <Helmet>
      {/* Language */}
      <html lang="en" />

      {/* Primary meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={siteConfig.name} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="theme-color" content="#7c3aed" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
