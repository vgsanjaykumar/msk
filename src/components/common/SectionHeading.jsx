import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./motionPresets";

/**
 * Consistent heading block (eyebrow + heading + subtitle) shared by every
 * section. `level` controls whether the heading renders as h2 or h3 so the
 * document keeps a single, correct h1 -> h2 -> h3 hierarchy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = 2,
  align = "center",
  className = "",
}) {
  const Heading = level === 3 ? "h3" : "h2";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`max-w-3xl mb-10 md:mb-14 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
