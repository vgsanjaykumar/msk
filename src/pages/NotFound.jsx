import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import SEO from "../seo/SEO";
import Button from "../components/common/Button";
import { fadeUp } from "../components/common/motionPresets";
import { siteConfig, telLink } from "../config/site";

export default function NotFound() {
  return (
    <>
      <SEO
        title={`Page Not Found - ${siteConfig.name}`}
        description="The page you're looking for doesn't exist. Return home for AC service in Coimbatore."
        path="/404"
        noindex
      />
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-6 py-24 md:py-32 text-center"
      >
        <p className="text-6xl md:text-7xl font-bold text-purple-200 dark:text-cyan-900 mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist. Head back home, or call
          us directly for AC service in Coimbatore.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" icon={FaHome}>
            Back to Home
          </Button>
          <Button href={telLink()} variant="outline" icon={FaPhoneAlt}>
            Call {siteConfig.phoneDisplay}
          </Button>
        </div>
      </motion.section>
    </>
  );
}
