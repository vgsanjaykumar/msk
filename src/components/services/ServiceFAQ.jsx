import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
      <h3>
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-gray-900 dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          aria-expanded={isOpen}
        >
          <span>{item.question}</span>
          <FaChevronDown
            className={`shrink-0 text-purple-600 dark:text-cyan-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
}

/**
 * Generic FAQ accordion. Every page passes its own `faqs` array so content
 * never repeats between the homepage and individual service pages — the
 * same array is also passed to `SEO`'s `faqs` prop so the visible FAQ and
 * the FAQPage JSON-LD always stay in sync.
 */
export default function ServiceFAQ({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  id,
}) {
  const [openId, setOpenId] = useState(0);
  if (!faqs?.length) return null;

  return (
    <section
      id={id}
      className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
      aria-label={title}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openId === idx}
              onToggle={() => setOpenId(openId === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
