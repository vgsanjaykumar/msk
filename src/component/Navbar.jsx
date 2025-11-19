import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

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
    const servicesRef = useRef(null);

    /* MODE SETUP */
    useEffect(() => {
        if (dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");

        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    /* OUTSIDE CLICK HANDLERS */
    useEffect(() => {
        function handleClick(e) {
            if (servicesRef.current && !servicesRef.current.contains(e.target))
                setServicesOpen(false);

            if (headerRef.current && !headerRef.current.contains(e.target))
                setMobileOpen(false);
        }

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    /* ESC KEY CLOSE */
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") {
                setMobileOpen(false);
                setServicesOpen(false);
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    const handleNavLinkClick = () => {
        setMobileOpen(false);
        setServicesOpen(false);
    };

    return (
        <header
            ref={headerRef}
            className="
        sticky top-0 z-50 backdrop-blur-xl border-b transition-all

        /* LIGHT MODE */
        bg-white/70 text-black border-black/10 shadow-md

        /* DARK MODE */
        dark:bg-gradient-to-b dark:from-slate-900/60 dark:to-slate-800/60 
        dark:text-white dark:border-white/10
      "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/assets/msk logo.jpeg"
                            alt="MSK Logo"
                            className="
                h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover
                transition hover:scale-110
              "
                        />
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center space-x-6">

                        {[
                            { label: "Home", link: "#home" },
                            { label: "Washing Machine", link: "#washing-machine" },
                            { label: "Refrigerator", link: "#refrigerator" },
                            { label: "Television", link: "#television" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                onClick={handleNavLinkClick}
                                className="
                  px-2 py-1 transition relative font-medium

                  /* TEXT COLORS */
                  text-black hover:text-purple-700
                  dark:text-white dark:hover:text-cyan-300

                  /* UNDERLINE EFFECT */
                  after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] dark:after:bg-cyan-400 after:bg-purple-600
                  after:transition-all after:duration-300 hover:after:w-full
                "
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* SERVICES DROPDOWN */}
                        <div className="relative" ref={servicesRef}>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="
                  flex items-center gap-2 px-2 py-1 transition relative font-medium
                  
                  text-black hover:text-purple-700
                  dark:text-white dark:hover:text-cyan-300

                  after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] dark:after:bg-cyan-400 after:bg-purple-600
                  after:transition-all after:duration-300 hover:after:w-full
                "
                            >
                                AC
                                <svg
                                    className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                                    fill="currentColor"
                                >
                                    <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
                                </svg>
                            </button>

                            {servicesOpen && (
                                <div className="
                    absolute right-0 w-56 mt-3 rounded-md shadow-lg border
                    bg-white text-black border-black/10
                    dark:bg-slate-800 dark:text-white dark:border-white/10
                ">
                                    {[
                                        { label: "AC Service", link: "#ac-service" },
                                        { label: "AC Installations", link: "#ac-install" },
                                        { label: "AC Repair", link: "#ac-repair" },
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.link}
                                            onClick={handleNavLinkClick}
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* RIGHT ACTION BUTTONS */}
                    <div className="flex items-center gap-3">

                        {/* CALL BUTTON */}
                        <a
                            href="tel:+916374439209"
                            className="
                hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg
                bg-purple-600 text-white shadow hover:scale-105
                dark:bg-cyan-500 dark:hover:bg-cyan-400
              "
                        >
                            📞 63744 39209
                        </a>

                        {/* DARK MODE TOGGLE */}
                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:scale-110 transition"
                        >
                            {dark ? (
                                <svg className="w-6 h-6" fill="currentColor">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                                    <path
                                        strokeWidth="2"
                                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                            onClick={() => setMobileOpen(!mobileOpen)}
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
            <div
                className={`md:hidden transition-all origin-top overflow-hidden ${mobileOpen ? "max-h-screen scale-y-100" : "max-h-0 scale-y-0"
                    }`}
            >
                <div className="px-4 pb-6 space-y-2 bg-white dark:bg-slate-900">

                    {[
                        { label: "Home", link: "#home" },
                        { label: "Washing Machine", link: "#washing-machine" },
                        { label: "Refrigerator", link: "#refrigerator" },
                        { label: "Television", link: "#television" },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="block px-2 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* MOBILE DROPDOWN */}
                    <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex justify-between w-full px-2 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
                    >
                        AC
                        <svg
                            className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                            fill="currentColor"
                        >
                            <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
                        </svg>
                    </button>

                    {servicesOpen && (
                        <div className="ml-4 space-y-1">
                            <a className="block px-2 py-2 hover:bg-black/10 dark:hover:bg-white/10" href="#ac-service">AC Service</a>
                            <a className="block px-2 py-2 hover:bg-black/10 dark:hover:bg-white/10" href="#ac-install">AC Installations</a>
                            <a className="block px-2 py-2 hover:bg-black/10 dark:hover:bg-white/10" href="#ac-repair">AC Repair</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
