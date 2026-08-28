import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import Button from "./Button";
import { fadeUp, viewportOnce } from "./motionPresets";
import { siteConfig, telLink } from "../../config/site";

/**
 * Shared closing CTA band. Used at the bottom of every page so there's
 * always a clear next step, regardless of what the page is about.
 */
export default function CTASection({
  title = "Need a Technician Today?",
  subtitle = `Call ${siteConfig.name} or book online — same-day service across Coimbatore.`,
}) {
  return (
    <section className="w-full bg-purple-700 dark:bg-slate-800 py-14 md:py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-purple-100 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/book-service"
            variant="primary"
            icon={FaCalendarCheck}
            className="!bg-white !text-purple-700 hover:!bg-purple-50 dark:!bg-cyan-500 dark:!text-slate-900"
          >
            Book a Service
          </Button>
          <Button
            href={telLink()}
            variant="outline"
            icon={FaPhoneAlt}
            className="!border-white !text-white hover:!bg-white hover:!text-purple-700"
          >
            Call {siteConfig.phoneDisplay}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
