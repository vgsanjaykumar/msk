import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, telLink } from "../../config/site";
import { services } from "../../data/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  ...services.map((s) => ({ label: `${s.navLabel} Coimbatore`, href: s.path })),
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Contact", href: "/contact" },
  { label: "Book Service", href: "/book-service" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 dark:bg-slate-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {siteConfig.name} is a trusted, independent AC service and home
              appliance repair provider in Coimbatore. We are not affiliated
              with or endorsed by any appliance brand mentioned on this
              website; all trademarks belong to their respective owners.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start md:items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-purple-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="flex flex-col items-start md:items-end not-italic">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Reach Us
            </h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 md:text-right">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-purple-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2">
                Tel:{" "}
                <a
                  href={telLink()}
                  className="hover:text-purple-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="mt-2">
                {siteConfig.address.locality}, {siteConfig.address.region}
              </p>
              <ul className="mt-4 flex md:justify-end gap-4">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="hover:text-purple-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </address>
        </div>

        <div className="mt-12 border-t border-gray-300 dark:border-white/10 pt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Serving appliance service across Coimbatore and nearby areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
