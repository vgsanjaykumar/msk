// src/components/Footer.jsx
import React from "react";

export default function Footer() {
    const quickLinks = [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Contact Us", href: "#contact" },
        { label: "Washing Machine", href: "#washing-machine" },
        { label: "Refrigerator", href: "#refrigerator" },
        { label: "AC", href: "#ac-service" },
        { label: "Television", href: "#television" },
    ];

    return (
        <footer
            className="
        bg-gray-200 text-gray-800
        dark:bg-slate-900 dark:text-gray-200
        transition-colors duration-300
        w-full
      "
        >
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Disclaimer */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Disclaimer
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Msk Service is an independent service provider.
                            We are not affiliated with or endorsed by any appliance brand
                            mentioned on this website. All trademarks belong to their
                            respective owners.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-start md:items-center">
                        <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Quick Links
                        </h4>

                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        className="hover:text-cyan-500 dark:hover:text-cyan-300 transition"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div className="flex flex-col items-start md:items-end">
                        <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Reach Us
                        </h4>

                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            <p>msksolution@gmail.com</p>
                            <p className="mt-2">
                                Tel:{" "}
                                <a
                                    href="tel:+919600417117"
                                    className="hover:text-cyan-500 dark:hover:text-cyan-300 transition"
                                >
                                    +91 63744 39209
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* bottom line */}
                <div className="mt-12 border-t border-gray-300 dark:border-white/10 pt-6">
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                        Copyright © Arun Ads | {new Date().getFullYear()} |
                        Digital Marketing By Arunkumar
                    </p>
                </div>
            </div>
        </footer>
    );
}
