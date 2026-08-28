import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { fadeUp } from "../components/common/motionPresets";
import { siteConfig } from "../config/site";

export default function Disclaimer() {
  return (
    < section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title={`Disclaimer - ${siteConfig.name}`}
        description={`Disclaimer for ${siteConfig.name}, an independent AC service and home appliance repair provider in Coimbatore.`}
        path="/disclaimer"
        breadcrumbTrail={[
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ]}
      />
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-gray-700 dark:text-gray-300"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Disclaimer
        </h1>

        <p className="mb-4 leading-relaxed">
          <strong>{siteConfig.name}</strong> is an independent AC service and
          home appliance repair provider based in Coimbatore. We are not
          affiliated with, endorsed by, or an authorized service center for
          any appliance manufacturer or brand named on this website. All
          brand names, trademarks and logos referenced (such as LG, Samsung,
          Daikin, Voltas, Hitachi and others) belong to their respective
          owners and are used only to describe the brands our technicians
          are experienced in servicing.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          Service Estimates
        </h2>
        <p className="mb-4 leading-relaxed">
          Pricing shared over call, WhatsApp or on this website is an
          estimate. Final charges depend on the actual issue, spare parts
          required and time of service, and will be confirmed with you
          before work begins.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          Content Accuracy
        </h2>
        <p className="mb-4 leading-relaxed">
          We try to keep information on this website accurate and current,
          but availability, pricing and service areas may change without
          notice. Please call {siteConfig.phoneDisplay} to confirm details
          before booking.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 text-purple-700 dark:text-cyan-400 font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </motion.section>
    </section>
  );
}
