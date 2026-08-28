import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useReducedMotion from "./useReducedMotion";

const VARIANTS = {
  primary:
    "bg-purple-700 hover:bg-purple-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white shadow-lg",
  whatsapp: "bg-green-500 hover:bg-green-400 text-white shadow-lg",
  outline:
    "bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900",
};

const MotionLink = motion(Link);

/**
 * Shared call-to-action button/link used across Hero, About, Services,
 * Contact, etc. Keeps CTA styling and the press/hover micro-interaction
 * consistent in one place. Hover/tap spring is skipped for users who
 * prefer reduced motion — color/background transitions (CSS) still apply.
 *
 * - Pass `to` for internal app navigation (renders a React Router `Link`,
 *   no full page reload).
 * - Pass `href` for same-page anchors, `tel:`/`mailto:`/WhatsApp links, or
 *   any external URL (add `external` to open in a new tab safely).
 * - Pass `type="button"` for a non-navigating action button.
 */
export default function Button({
  href,
  to,
  onClick,
  type = "link",
  variant = "primary",
  icon: Icon,
  children,
  className = "",
  external = false,
  ariaLabel,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5 text-base transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-cyan-400";

  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.05, y: -1 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      };

  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (type === "button") {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.button>
    );
  }

  if (to) {
    return (
      <MotionLink
        to={to}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
        {...rest}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.a>
  );
}
