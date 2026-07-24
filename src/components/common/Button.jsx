import React from "react";

const VARIANTS = {
  primary:
    "bg-purple-700 hover:bg-purple-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white shadow-lg",
  whatsapp: "bg-green-500 hover:bg-green-400 text-white shadow-lg",
  outline:
    "bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900",
};

/**
 * Shared call-to-action button/link used across Hero, About, Services,
 * Contact, etc. Keeps CTA styling and motion consistent in one place.
 */
export default function Button({
  href,
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
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5 text-base transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-cyan-400 motion-reduce:hover:scale-100";

  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (type === "button") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}
