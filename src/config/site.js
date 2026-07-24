// Central place for business/contact data used across the app.
// Update details here once and they propagate everywhere (nav, footer,
// contact form, structured data, SEO tags, etc.)

export const siteConfig = {
  name: "MSK Solution",
  shortName: "MSK",
  tagline: "AC Service Coimbatore",
  legalName: "MSK Solution",
  description:
    "MSK Solution provides professional AC service in Coimbatore — AC repair, installation, gas filling, maintenance, AMC and deep cleaning. We also repair washing machines, refrigerators, TVs and other home appliances. 24/7 emergency support with trained technicians.",
  url: "https://www.msksolution.in",
  phone: "+916374439209",
  phoneDisplay: "+91 63744 39209",
  whatsappNumber: "916374439209",
  email: "karthishanmugam1712@gmail.com",
  address: {
    locality: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641000",
    country: "IN",
  },
  geo: {
    latitude: 11.0168,
    longitude: 76.9558,
  },
  priceRange: "₹499",
  openingHours: "Mo-Su 00:00-23:59",
  social: {
    instagram: "https://www.instagram.com/msk_solution_24hr",
    whatsapp: "https://wa.me/916374439209",
  },
  areasServed: [
    "Gandhipuram",
    "Peelamedu",
    "RS Puram",
    "Saravanampatti",
    "Singanallur",
    "Ganapathy",
  ],
  keywords: [
    "AC Service Coimbatore",
    "AC Repair Coimbatore",
    "AC Installation Coimbatore",
    "AC Gas Filling Coimbatore",
    "AC Maintenance Coimbatore",
    "AC AMC Coimbatore",
    "Best AC Service in Coimbatore",
    "Split AC Service Coimbatore",
    "Window AC Service Coimbatore",
    "AC Technician Coimbatore",
    "AC Cleaning Coimbatore",
    "Emergency AC Service Coimbatore",
    "AC Service Near Me",
    "AC Repair Near Me",
  ],
};

export const waLink = (message = "") =>
  `https://wa.me/${siteConfig.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const telLink = () => `tel:${siteConfig.phone}`;
