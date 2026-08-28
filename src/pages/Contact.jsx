import React from "react";
import { FaClock } from "react-icons/fa";
import SEO from "../seo/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CTASection from "../components/common/CTASection";
import Contact from "../components/sections/Contact";
import { siteConfig } from "../config/site";

const breadcrumbTrail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title={`Contact Us - ${siteConfig.name} | AC & Appliance Service Coimbatore`}
        description={`Contact ${siteConfig.name} for AC, TV, washing machine or refrigerator service in Coimbatore — phone, WhatsApp, email and service hours.`}
        path="/contact"
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />

      <section className="max-w-4xl mx-auto px-6 pt-14 md:pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact {siteConfig.name}
        </h1>
        <p className="mt-4 inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <FaClock aria-hidden="true" /> Open 24/7 for emergency service requests
        </p>
      </section>

      <Contact />

      <section className="w-full pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 h-72 md:h-96">
            <iframe
              title={`${siteConfig.name} location in ${siteConfig.address.locality}`}
              src={`https://www.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}&z=12&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to Book Directly?"
        subtitle="Skip straight to our booking form with your appliance and service details."
      />
    </section>
  );
}
