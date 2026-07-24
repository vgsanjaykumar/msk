import React from "react";

/** Visually hidden until focused — lets keyboard/screen-reader users jump past the nav. */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-purple-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
