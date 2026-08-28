import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { siteConfig, telLink } from "../../config/site";
import useReducedMotion from "../common/useReducedMotion";

const NAV_LINKS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Areas We Serve", link: "/areas-we-serve" },
  { label: "Contact", link: "/contact" },
];

const menuListVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* localStorage unavailable (private mode) — safe to ignore */
    }
  }, [dark]);

  // Sticky header that hides on scroll-down and reappears on scroll-up,
  // once the user has scrolled past the header itself.
  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 8);

    if (prefersReducedMotion || mobileOpen) {
      setHidden(false);
      lastScrollY.current = current;
      return;
    }

    const previous = lastScrollY.current;
    const delta = current - previous;

    if (current < 96) {
      setHidden(false);
    } else if (delta > 4) {
      setHidden(true);
    } else if (delta < -4) {
      setHidden(false);
    }
    lastScrollY.current = current;
  });

  useEffect(() => {
    function handleClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur-sm dark:bg-slate-900/95 dark:text-white transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-black/10 dark:border-white/10 shadow-md"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/msk-logo.jpeg"
              alt={`${siteConfig.name} logo`}
              width="48"
              height="48"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-transparent transition-transform duration-300 group-hover:ring-purple-400 dark:group-hover:ring-cyan-400 group-hover:scale-105"
            />
            <span className="hidden sm:block text-xl font-semibold">
              MSK <span className="text-purple-600 dark:text-cyan-400">Solution</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.label}
                to={item.link}
                end={item.link === "/"}
                className={({ isActive }) =>
                  `nav-underline px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? "text-purple-700 dark:text-cyan-300"
                      : "text-black/80 hover:text-purple-700 dark:text-white/80 dark:hover:text-cyan-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a
              href={telLink()}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white dark:bg-cyan-500"
              aria-label={`Call ${siteConfig.name} now`}
            >
              <span aria-hidden="true">📞</span> {siteConfig.phoneDisplay}
            </motion.a>

            <Link
              to="/book-service"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-colors"
            >
              Book Service
            </Link>

            <motion.button
              onClick={() => setDark((v) => !v)}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
              className="p-2 rounded-full bg-black/10 dark:bg-white/10"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeWidth="2" strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative w-6 h-6 flex flex-col items-center justify-center gap-[5px]">
                <motion.span
                  className="block h-0.5 w-6 rounded-full bg-current"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                <motion.span
                  className="block h-0.5 w-6 rounded-full bg-current"
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-0.5 w-6 rounded-full bg-current"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.nav
              aria-label="Mobile"
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              className="md:hidden overflow-hidden px-4 pb-6 bg-white dark:bg-slate-900 space-y-1 border-t border-black/5 dark:border-white/5 pt-3"
            >
              {NAV_LINKS.map((item) => (
                <motion.div key={item.label} variants={menuItemVariants}>
                  <NavLink
                    to={item.link}
                    end={item.link === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 ${
                        isActive ? "text-purple-700 dark:text-cyan-300 font-semibold" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  to="/book-service"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 mt-2 rounded-md border-2 border-purple-600 text-purple-700 dark:border-cyan-400 dark:text-cyan-300 font-semibold"
                >
                  Book Service
                </Link>
              </motion.div>
              <motion.a
                variants={menuItemVariants}
                href={telLink()}
                className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-md bg-purple-600 text-white dark:bg-cyan-500 shadow"
              >
                <span aria-hidden="true">📞</span> Call Now: {siteConfig.phoneDisplay}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
