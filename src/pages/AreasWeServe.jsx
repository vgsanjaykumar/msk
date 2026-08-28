import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import SEO from "../seo/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CTASection from "../components/common/CTASection";
import Button from "../components/common/Button";
import { staggerContainer, cardPop, viewportOnce } from "../components/common/motionPresets";
import { siteConfig, telLink } from "../config/site";

const breadcrumbTrail = [
  { name: "Home", path: "/" },
  { name: "Areas We Serve", path: "/areas-we-serve" },
];

export default function AreasWeServe() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title={`Areas We Serve in Coimbatore - ${siteConfig.name}`}
        description={`${siteConfig.name} provides AC and home appliance repair across ${siteConfig.areasServed.join(", ")} and other areas of Coimbatore, Tamil Nadu.`}
        path="/areas-we-serve"
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />

      <section className="max-w-4xl mx-auto px-6 pt-14 md:pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          Areas We Serve
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Appliance Service Areas in Coimbatore
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          {siteConfig.name} provides doorstep AC, TV, washing machine and
          refrigerator service across {siteConfig.address.locality},{" "}
          {siteConfig.address.region}, including the areas below.
        </p>
      </section>

      <section className="w-full py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {siteConfig.areasServed.map((area) => (
              <motion.div
                key={area}
                variants={cardPop}
                className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-white/10 p-5 shadow-sm"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-cyan-900/40 flex items-center justify-center text-purple-700 dark:text-cyan-300">
                  <FaMapMarkerAlt aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    {area}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {siteConfig.address.locality}, {siteConfig.address.region}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 rounded-2xl bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Not sure if we cover your area?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Call us or send your location — we cover most of Coimbatore
              beyond the areas listed above.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href={telLink()} variant="primary" icon={FaPhoneAlt}>
                Call {siteConfig.phoneDisplay}
              </Button>
              <Button to="/book-service" variant="outline" icon={FaCalendarCheck}>
                Book a Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </  section>
  );
}
