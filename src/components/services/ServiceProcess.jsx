import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaSearch, FaTools, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";

const DEFAULT_STEPS = [
  {
    icon: FaPhoneAlt,
    title: "Call or Book Online",
    desc: "Tell us the appliance and problem — by phone, WhatsApp or the online booking form.",
  },
  {
    icon: FaSearch,
    title: "On-Site Diagnosis",
    desc: "A trained technician visits and diagnoses the exact issue before any work begins.",
  },
  {
    icon: FaTools,
    title: "Repair or Service",
    desc: "We repair, install or service using genuine parts, and explain the work needed.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Check & Warranty",
    desc: "Every job is tested before we leave, and backed by a service warranty.",
  },
];

/**
 * Numbered process steps, used both as the homepage's "How It Works"
 * section and (with a custom `steps`/`title`) on individual service pages.
 */
export default function ServiceProcess({
  eyebrow = "How It Works",
  title = "Our Simple Service Process",
  subtitle,
  steps = DEFAULT_STEPS,
}) {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              variants={cardPop}
              className="relative rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 p-6 shadow-md"
            >
              <span className="absolute -top-4 -left-2 text-5xl font-bold text-purple-100 dark:text-white/5 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="relative text-purple-600 dark:text-cyan-400 mb-4">
                <step.icon size={30} aria-hidden="true" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
