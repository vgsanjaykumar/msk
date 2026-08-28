import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import { siteConfig, telLink, waLink } from "../../config/site";

/**
 * Fixed bottom action bar shown only on mobile (`md:hidden`). Desktop uses
 * the floating side buttons in FloatingActions instead. Real phone/
 * WhatsApp links only — sourced from siteConfig, never invented.
 */
export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-white/10 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telLink()}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-blue-700 dark:text-blue-300 active:bg-black/5 dark:active:bg-white/10"
        aria-label={`Call ${siteConfig.name}`}
      >
        <FaPhoneAlt size={18} aria-hidden="true" />
        <span className="text-xs font-medium">Call</span>
      </a>

      <a
        href={waLink("Hi MSK Solution, I need help with an appliance service.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-green-600 dark:text-green-400 border-x border-gray-200 dark:border-white/10 active:bg-black/5 dark:active:bg-white/10"
        aria-label={`WhatsApp ${siteConfig.name}`}
      >
        <FaWhatsapp size={18} aria-hidden="true" />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>

      <Link
        to="/book-service"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-purple-700 dark:text-cyan-300 active:bg-black/5 dark:active:bg-white/10"
      >
        <FaCalendarCheck size={18} aria-hidden="true" />
        <span className="text-xs font-medium">Book Service</span>
      </Link>
    </nav>
  );
}
