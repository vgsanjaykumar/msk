import React from "react";
import { motion } from "framer-motion";
import { cardPop } from "./motionPresets";

/** Small icon + title + description card used inside service grids. */
export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      variants={cardPop}
      className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0"
    >
      <div className="text-purple-600 dark:text-cyan-300 mb-4 flex justify-center">
        <Icon size={38} aria-hidden="true" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
