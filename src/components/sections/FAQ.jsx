import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { faqs } from "../../data/faqs";

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

export default function FAQ() {
  const [openId, setOpenId] = useState(0);

  return (
    <section
      className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
      aria-label="Frequently asked questions about AC service in Coimbatore"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="AC Service Coimbatore — Frequently Asked Questions"
        />
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
