import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

/**
 * Visible breadcrumb trail for inner pages. `trail` is an array of
 * `{ name, path }` — the same shape passed to `SEO`'s `breadcrumbTrail`
 * prop so the visible UI and the BreadcrumbList JSON-LD always match.
 * The final item renders as plain text (current page), not a link.
 */
export default function Breadcrumbs({ trail }) {
  if (!trail || trail.length < 2) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-white/5"
    >
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && (
                <FaChevronRight
                  className="w-2.5 h-2.5 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="font-medium text-gray-800 dark:text-gray-200"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-1 hover:text-purple-700 dark:hover:text-cyan-300 transition-colors"
                >
                  {idx === 0 && <FaHome className="w-3 h-3" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
