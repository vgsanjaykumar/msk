import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import useReducedMotion from "../common/useReducedMotion";

const images = Array.from(
  { length: 9 },
  (_, i) => `/our-work/0${i + 1}.jpeg`
);

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(-1);
  const closeButtonRef = useRef(null);
  const isOpen = openIndex !== -1;
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenIndex(-1);
      if (isOpen) {
        if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % images.length);
        if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + images.length) % images.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent AC Service & Repair Jobs in Coimbatore"
          subtitle="Real installation and repair work completed by MSK Solution technicians."
        />

        <div className="gallery-masonry">
          {images.map((src, idx) => (
            <motion.button
              key={src}
              onClick={() => setOpenIndex(idx)}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4, ease: "easeOut" }}
              className="group gallery-item relative overflow-hidden rounded-lg shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              aria-label={`Open photo ${idx + 1} of AC and appliance service work`}
            >
              <img
                src={src}
                alt={`MSK Solution AC service work sample ${idx + 1} in Coimbatore`}
                className="w-full block object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.closest("button").style.display = "none";
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                <FaSearchPlus
                  className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenIndex(-1)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-5xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={() => setOpenIndex(-1)}
              className="absolute -top-3 -right-3 bg-white/90 dark:bg-slate-800 rounded-full p-2 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
              aria-label="Close preview"
            >
              ✕
            </button>

            <button
              onClick={() => setOpenIndex((i) => (i - 1 + images.length) % images.length)}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/80 dark:bg-slate-800 rounded-r-full shadow"
              aria-label="Previous image"
            >
              ◀
            </button>

            <button
              onClick={() => setOpenIndex((i) => (i + 1) % images.length)}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/80 dark:bg-slate-800 rounded-l-full shadow"
              aria-label="Next image"
            >
              ▶
            </button>

            <motion.img
              key={openIndex}
              src={images[openIndex]}
              alt={`MSK Solution AC service work sample ${openIndex + 1} in Coimbatore`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full h-[70vh] md:h-[80vh] object-contain rounded-md bg-white/5"
            />

            <div className="mt-3 flex items-center justify-between text-sm text-gray-200">
              <span>Image {openIndex + 1} of {images.length}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setOpenIndex((i) => (i - 1 + images.length) % images.length)}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                >
                  Prev
                </button>
                <button
                  onClick={() => setOpenIndex((i) => (i + 1) % images.length)}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
