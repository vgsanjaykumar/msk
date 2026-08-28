import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaMapMarkedAlt, FaClock, FaShieldAlt } from "react-icons/fa";
import AnimatedCounter from "../common/AnimatedCounter";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";
import { siteConfig } from "../../config/site";

const stats = [
  { icon: FaAward, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: FaMapMarkedAlt, value: siteConfig.areasServed.length, suffix: "+", label: "Areas Served in Coimbatore" },
  { icon: FaClock, value: 24, suffix: "/7", label: "Emergency Support" },
  { icon: FaShieldAlt, value: 100, suffix: "%", label: "Genuine Spare Parts" },
];

/** Quick-scan trust band placed right below the Hero on the homepage. */
export default function TrustIndicators() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-10 md:py-14 border-b border-gray-100 dark:border-white/5">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardPop}
            className="flex flex-col items-center text-center gap-2"
          >
            <stat.icon className="text-purple-600 dark:text-cyan-400" size={28} aria-hidden="true" />
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
