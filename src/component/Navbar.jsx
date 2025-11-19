// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";

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

    /* APPLY THEME */
    useEffect(() => {
        if (dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");

        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    /* CLOSE MENU WHEN CLICK OUTSIDE */
    useEffect(() => {
        function handleClick(e) {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setMobileOpen(false);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    /* ESC KEY CLOSE */
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") setMobileOpen(false);
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    /* CLOSE IF SCREEN >= MD */
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        function handler(e) {
            if (e.matches) setMobileOpen(false);
        }
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const handleNavLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <header
            ref={headerRef}
            className="
        w-full z-50 
        bg-white text-black border-b border-black/10
        dark:bg-slate-900 dark:text-white dark:border-white/10
      "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/assets/msk logo.jpeg"
                            alt="MSK Logo"
                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                        />
                        <span className="hidden sm:block text-xl font-semibold">
                            MSK <span className="text-purple-600 dark:text-cyan-400">Solution</span>
                        </span>
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-6">
                        {[
                            { label: "Home", link: "/" },
                            { label: "AC", link: "#ac" },
                            { label: "Washing Machine", link: "#washing-machine" },
                            { label: "Refrigerator", link: "#refrigerator" },
                            { label: "Television", link: "#television" },
                            // AC as normal item
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                onClick={handleNavLinkClick}
                                className="
                  px-2 py-1 font-medium 
                  text-black hover:text-purple-700
                  dark:text-white dark:hover:text-cyan-300
                "
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3">

                        {/* Call Button (desktop only) */}
                        <a
                            href="tel:+916374439209"
                            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg
                bg-purple-600 text-white dark:bg-cyan-500 hover:scale-105 transition"
                        >
                            📞 63744 39209
                        </a>

                        {/* DARK MODE TOGGLE */}
                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:scale-110 transition"
                        >
                            {dark ? (
                                <svg className="w-6 h-6" fill="currentColor">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                                    <path
                                        strokeWidth="2"
                                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 
                    1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 
                    1.414M7.05 7.05L5.636 5.636"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            {mobileOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                                    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                                    <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`${mobileOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all`}>
                <div className="px-4 pb-6 bg-white dark:bg-slate-900 space-y-2">

                    {[
                        { label: "Home", link: "#home" },
                        { label: "Washing Machine", link: "#washing-machine" },
                        { label: "Refrigerator", link: "#refrigerator" },
                        { label: "Television", link: "#television" },
                        { label: "AC", link: "#ac" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            onClick={handleNavLinkClick}
                            className="block px-2 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="tel:+916374439209"
                        className="flex items-center gap-3 px-3 py-2 rounded bg-purple-600 text-white dark:bg-cyan-500 shadow"
                    >
                        📞 Call Now: 63744 39209
                    </a>

                </div>
            </div>
        </header>
    );
}
