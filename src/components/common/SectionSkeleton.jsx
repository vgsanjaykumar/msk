import React from "react";

/** Shimmering placeholder block. Composed into section-shaped skeletons below. */
function Bar({ className = "" }) {
  return (
    <div
      className={`rounded-md bg-gray-200 dark:bg-white/10 skeleton-shimmer ${className}`}
    />
  );
}

/**
 * Approximates the shape of the sections that load beneath it (heading +
 * a row of cards), so the layout doesn't visibly "pop" once the real
 * content arrives. Shown only briefly while lazy chunks download.
 */
export default function SectionSkeleton() {
  return (
    <div
      className="w-full py-16 md:py-20 px-6 max-w-7xl mx-auto"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center mb-12">
        <Bar className="h-4 w-32 mb-4" />
        <Bar className="h-9 w-72 max-w-full mb-4" />
        <Bar className="h-4 w-96 max-w-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 dark:border-white/10 p-6"
          >
            <Bar className="h-10 w-10 rounded-full mx-auto mb-4" />
            <Bar className="h-4 w-3/4 mx-auto mb-2" />
            <Bar className="h-3 w-full" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading section…</span>
    </div>
  );
}
