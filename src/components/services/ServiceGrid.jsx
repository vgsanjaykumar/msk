import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";
import { services } from "../../data/services";

/**
 * Teaser grid of the four dedicated service pages. Deliberately short —
 * one line of description per card — so full service detail lives only on
 * each service's own page, keeping content unique per page (rule 32).
 */
export default function ServiceGrid({
  eyebrow = "Our Services",
  title = "AC & Home Appliance Services in Coimbatore",
  subtitle,
  showDetails = false,
}) {
  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((s) => (
            <motion.div key={s.slug} variants={cardPop}>
              <Link
                to={s.path}
                className="group flex flex-col h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center mb-4">
                  <img
                    src={s.heroImage}
                    alt=""
                    aria-hidden="true"
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {s.name} in Coimbatore
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {showDetails
                    ? s.overview
                    : s.heroSubtitle.split(" — ")[0] + "."}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-cyan-400">
                  View Service
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
