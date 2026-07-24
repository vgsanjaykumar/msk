import React from "react";
import { siteConfig, telLink } from "../../config/site";

const quickLinks = [
  { label: "AC Service", href: "#ac-service" },
  { label: "Washing Machine", href: "#washing-machine-repair" },
  { label: "Refrigerator", href: "#refrigerator-service" },
  { label: "Television", href: "#tv-repair" },
  { label: "Contact Us", href: "#contact" },
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
                  <a
                    href={item.href}
                    className="hover:text-purple-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </a>
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
            </div>
          </address>
        </div>

        <div className="mt-12 border-t border-gray-300 dark:border-white/10 pt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Serving AC service Coimbatore and nearby areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
