import React, { useEffect, useRef, useState } from "react";
import { siteConfig, telLink } from "../../config/site";

const NAV_LINKS = [
  { label: "Home", link: "#home" },
  { label: "AC Service", link: "#ac-service" },
  { label: "Washing Machine", link: "#washing-machine-repair" },
  { label: "Refrigerator", link: "#refrigerator-service" },
  { label: "Television", link: "#tv-repair" },
];

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

  const headerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* localStorage unavailable (private mode) — safe to ignore */
    }
  }, [dark]);

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
    <header
      ref={headerRef}
      id="home"
      className="sticky top-0 z-50 w-full bg-white/95 text-black border-b border-black/10 backdrop-blur-sm dark:bg-slate-900/95 dark:text-white dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/msk-logo.jpeg"
              alt={`${siteConfig.name} logo`}
              width="48"
              height="48"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-purple-400 dark:group-hover:ring-cyan-400 transition"
            />
            <span className="hidden sm:block text-xl font-semibold">
              MSK <span className="text-purple-600 dark:text-cyan-400">Solution</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="px-3 py-2 rounded-md font-medium text-black/80 hover:text-purple-700 hover:bg-purple-50 dark:text-white/80 dark:hover:text-cyan-300 dark:hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telLink()}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white dark:bg-cyan-500 hover:scale-105 active:scale-95 transition-transform motion-reduce:hover:scale-100"
              aria-label={`Call ${siteConfig.name} now`}
            >
              <span aria-hidden="true">📞</span> {siteConfig.phoneDisplay}
            </a>

            <button
              onClick={() => setDark((v) => !v)}
              className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:scale-110 active:scale-95 transition-transform motion-reduce:hover:scale-100"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
            >
              {dark ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`${mobileOpen ? "max-h-96" : "max-h-0"} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav aria-label="Mobile" className="px-4 pb-6 bg-white dark:bg-slate-900 space-y-1 border-t border-black/5 dark:border-white/5 pt-3">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href={telLink()}
            className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-md bg-purple-600 text-white dark:bg-cyan-500 shadow"
          >
            <span aria-hidden="true">📞</span> Call Now: {siteConfig.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
