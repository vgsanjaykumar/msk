import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";

/** "Common problems we fix" grid — appears on every service page with unique data. */
export default function CommonProblems({ name, problems }) {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Problems"
          title={`Common ${name} Problems We Fix`}
          subtitle="Not sure what's wrong? Our technicians diagnose the exact issue on-site before any repair begins."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={cardPop}
              className="flex items-start gap-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="shrink-0 text-purple-600 dark:text-cyan-400 mt-1">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
