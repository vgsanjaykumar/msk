import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";

/** Cross-links to the other service pages — strengthens internal linking (rule 33). */
export default function RelatedServices({ currentSlug }) {
  const others = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="More Services" title="Related Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-800 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {s.name} in Coimbatore
              </span>
              <FaArrowRight
                className="text-purple-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                aria-hidden="true"
              />
            </Link>
          ))}
          <Link
            to="/areas-we-serve"
            className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-800 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Areas We Serve
            </span>
            <FaArrowRight
              className="text-purple-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
