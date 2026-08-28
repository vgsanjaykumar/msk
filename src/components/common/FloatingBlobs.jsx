import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "./useReducedMotion";
import { floatY, floatYSlow } from "./motionPresets";

/**
 * Purely decorative, low-opacity blurred shapes floating behind section
 * content. Absolutely positioned, `pointer-events-none`, and skipped
 * entirely when the user prefers reduced motion (renders nothing rather
 * than a static shape, since it's decoration-only).
 */
export default function FloatingBlobs({ variant = "default", className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  const palette =
    variant === "light"
      ? ["bg-purple-200/40 dark:bg-cyan-500/10", "bg-cyan-200/40 dark:bg-purple-500/10"]
      : ["bg-purple-500/10 dark:bg-cyan-400/10", "bg-cyan-500/10 dark:bg-purple-400/10"];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        variants={floatY}
        animate="animate"
        className={`absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl ${palette[0]}`}
      />
      <motion.div
        variants={floatYSlow}
        animate="animate"
        className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl ${palette[1]}`}
      />
    </div>
  );
}
