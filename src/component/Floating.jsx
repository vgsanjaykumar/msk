// src/components/FloatingActions.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // ← added react-icons

export default function FloatingActions({
    whatsappNumber = "916374439209",
    phoneNumber = "916374439209",
    showBackToTop = true,
}) {
    const waHref = `https://wa.me/${whatsappNumber}`;
    const telHref = `tel:+${phoneNumber}`;

    function scrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div
            aria-hidden={false}
            className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-3"
        >
            {/* WhatsApp Button */}
            <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center
                   bg-green-500 hover:bg-green-400 text-white text-2xl
                   transform transition hover:-translate-y-1 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                title="WhatsApp"
            >
                <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            {/* Call Button */}
            <a
                href={telHref}
                aria-label="Call us"
                className="group w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-lg flex items-center justify-center
                   bg-blue-600 hover:bg-blue-500 text-white text-2xl
                   transform transition hover:-translate-y-1
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                title="Call"
            >
                <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* Back to Top */}
            {showBackToTop && (
                <button
                    onClick={scrollTop}
                    aria-label="Scroll to top"
                    className="group w-12 h-12 sm:w-14 sm:h-14 rounded-md shadow-lg flex items-center justify-center
                     bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10
                     transform transition hover:-translate-y-1
                     "
                    title="Back to top"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 4l-8 8h5v8h6v-8h5z" />
                    </svg>
                </button>
            )}
        </div>
    );
}
