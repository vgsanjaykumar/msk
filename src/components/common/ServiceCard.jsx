import React from "react";
import { motion } from "framer-motion";
import { cardPop } from "./motionPresets";
import useReducedMotion from "./useReducedMotion";

/** Small icon + title + description card used inside service grids. */
export default function ServiceCard({ icon: Icon, title, desc }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardPop}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-md text-center transition-shadow duration-300 hover:shadow-xl"
    >
      <motion.div
        className="text-purple-600 dark:text-cyan-300 mb-4 flex justify-center"
        whileHover={prefersReducedMotion ? undefined : { scale: 1.15, rotate: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Icon size={38} aria-hidden="true" />
      </motion.div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
