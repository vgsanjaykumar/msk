import { siteConfig } from "../config/site";

/** LocalBusiness schema — primary local-SEO signal for Google. */
export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: "MSK Home Appliance Service",
    url: siteConfig.url,
    image: `${siteConfig.url}/assets/msk-logo.jpeg`,
    logo: `${siteConfig.url}/assets/msk-logo.jpeg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHours: siteConfig.openingHours,
    sameAs: [siteConfig.social.instagram, siteConfig.social.whatsapp],
  };
}

/** Organization schema — reinforces brand entity for Knowledge Graph. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/msk-logo.jpeg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.whatsapp],
  };
}

/** Service schema for each core offering — helps rank service-intent queries. */
export function serviceSchemas() {
  const services = [
    {
      name: "AC Repair Coimbatore",
      description:
        "Diagnosis and repair of split and window AC cooling, drainage, sensor and thermostat issues.",
    },
    {
      name: "AC Installation Coimbatore",
      description:
        "Professional split AC and window AC installation with proper piping and leak testing.",
    },
    {
      name: "AC Gas Filling Coimbatore",
      description:
        "AC gas charging and refrigerant top-up to restore full cooling performance.",
    },
    {
      name: "AC Maintenance & AMC Coimbatore",
      description:
        "Scheduled AC maintenance and Annual Maintenance Contracts (AMC) for homes and offices.",
    },
    {
      name: "AC Deep Cleaning Coimbatore",
      description:
        "Deep cleaning of indoor and outdoor AC units to improve air quality and efficiency.",
    },
    {
      name: "Emergency AC Service Coimbatore",
      description:
        "Same-day and emergency AC repair service across Coimbatore.",
    },
  ];

  return services.map((service) => ({
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: {
      "@type": "City",
      name: "Coimbatore",
    },
  }));
}

/** FAQ schema — must mirror the visible FAQ content on the page. */
export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** BreadcrumbList schema — defaults to the homepage's own section anchors,
 *  but any page can pass its own `[{ name, path }]` trail (e.g. Privacy
 *  Policy passes just Home -> Privacy Policy). */
export function breadcrumbSchema(trail) {
  const items = trail || [
    { name: "Home", path: "/" },
    { name: "AC Service Coimbatore", path: "/#ac-service" },
    { name: "Contact", path: "/#contact" },
  ];

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Combine every schema block into a single @graph for one JSON-LD script.
 *  The FAQ node is only included when the page actually has FAQs, so pages
 *  like Privacy Policy don't emit an empty/irrelevant `FAQPage` block. */
export function buildGraph(faqs = [], breadcrumbTrail) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(),
      organizationSchema(),
      ...serviceSchemas(),
      ...(faqs.length ? [faqSchema(faqs)] : []),
      breadcrumbSchema(breadcrumbTrail),
    ],
  };
}
