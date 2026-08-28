import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { siteConfig, telLink, waLink } from "../../config/site";

export default function FloatingActions({ showBackToTop = true }) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="hidden md:flex fixed right-4 bottom-6 z-40 flex-col items-center gap-3">
      <a
        href={waLink("Hi MSK Solution, I need help with an AC service booking.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
        title="WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center bg-green-500 hover:bg-green-400 text-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 motion-reduce:hover:translate-y-0"
      >
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      </a>

      <a
        href={telLink()}
        aria-label={`Call ${siteConfig.name}`}
        title="Call"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-lg flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 motion-reduce:hover:translate-y-0"
      >
        <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </a>

      {showBackToTop && (
        <button
          onClick={scrollTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-md shadow-lg flex items-center justify-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 motion-reduce:hover:translate-y-0"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
