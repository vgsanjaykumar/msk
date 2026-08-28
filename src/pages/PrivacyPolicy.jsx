import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { fadeUp } from "../components/common/motionPresets";
import { siteConfig } from "../config/site";

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title={`Privacy Policy - ${siteConfig.name}`}
        description={`How ${siteConfig.name} collects, uses and protects information shared when booking AC service in Coimbatore.`}
        path="/privacy-policy"
        breadcrumbTrail={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
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
          Privacy Policy
        </h1>

        <p className="mb-4 leading-relaxed">
          This Privacy Policy explains how <strong>{siteConfig.name}</strong>{" "}
          collects, uses and protects information when you contact us for AC
          service, repair, installation or maintenance in Coimbatore.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          Information We Collect
        </h2>
        <p className="mb-4 leading-relaxed">
          When you book a service through our website, WhatsApp or phone, we
          may collect your name, phone number, email address, service
          address and the details of the appliance service you need.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          How We Use Your Information
        </h2>
        <p className="mb-4 leading-relaxed">
          We use this information only to schedule and carry out the AC or
          appliance service you requested, to contact you about your
          booking, and to provide customer support. We do not sell your
          information to third parties.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          Contact Us
        </h2>
        <p className="mb-4 leading-relaxed">
          If you have questions about this policy, contact us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-purple-700 dark:text-cyan-400 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          or call {siteConfig.phoneDisplay}.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 text-purple-700 dark:text-cyan-400 font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </motion.section>
    </  section>
  );
}
