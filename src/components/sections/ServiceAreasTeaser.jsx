import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";
import { siteConfig } from "../../config/site";

/** Compact service-area chips on the homepage, linking through to /areas-we-serve. */
export default function ServiceAreasTeaser() {
  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title="Areas We Serve in Coimbatore"
          subtitle="Doorstep AC and appliance service across Coimbatore, including these areas."
        />
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3"
        >
          {siteConfig.areasServed.map((area) => (
            <motion.span
              key={area}
              variants={cardPop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              <FaMapMarkerAlt className="text-purple-600 dark:text-cyan-400" aria-hidden="true" />
              {area}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            to="/areas-we-serve"
            className="inline-flex items-center gap-2 font-semibold text-purple-700 dark:text-cyan-400 hover:underline"
          >
            View all areas we serve
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
