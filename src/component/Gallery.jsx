// src/components/GalleryMasonry.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// First image
const LOGO_IMAGE = "/OURWORK/01.jpeg";

// Your images (order stays EXACTLY as here)
const defaultImages = [
    LOGO_IMAGE,
    "/OURWORK/01.jpeg",

    "/OURWORK/04.jpeg",
    "/OURWORK/05.jpeg",
    "/OURWORK/06.jpeg",
    "/OURWORK/02.jpeg",
    "/OURWORK/08.jpeg",
    "/OURWORK/09.jpeg",
];

export default function GalleryMasonry({ count = 9, images = defaultImages }) {
    // NO SHUFFLE — clean array slice
    const [tiles] = useState(() => images.slice(0, count));

    const [openIndex, setOpenIndex] = useState(-1);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpenIndex(-1);
            if (openIndex !== -1) {
                if (e.key === "ArrowRight")
                    setOpenIndex((i) => (i + 1) % tiles.length);
                if (e.key === "ArrowLeft")
                    setOpenIndex((i) => (i - 1 + tiles.length) % tiles.length);
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [openIndex, tiles.length]);

    return (
        <section className="w-full py-12 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Some of Our Works
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Real installation & repairing works completed by MSK Solution.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {tiles.map((src, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setOpenIndex(idx)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03, duration: 0.36 }}
                            className="masonry-item relative overflow-hidden rounded-md shadow-sm focus:outline-none"
                        >
                            <img
                                src={src}
                                alt={`Work ${idx + 1}`}
                                className="w-full block object-cover"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = "/assets/placeholder.png";
                                }}
                            />
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {openIndex !== -1 && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
                    onClick={() => setOpenIndex(-1)}
                >
                    <div className="relative max-w-5xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
                        {/* Close */}
                        <button
                            onClick={() => setOpenIndex(-1)}
                            className="absolute -top-3 -right-3 bg-white/90 dark:bg-slate-800 rounded-full p-2 shadow"
                        >
                            ✕
                        </button>

                        {/* Prev/Next (desktop) */}
                        <button
                            onClick={() => setOpenIndex((i) => (i - 1 + tiles.length) % tiles.length)}
                            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 
                            h-12 w-12 bg-white/80 dark:bg-slate-800 rounded-r-full shadow"
                        >
                            ◀
                        </button>

                        <button
                            onClick={() => setOpenIndex((i) => (i + 1) % tiles.length)}
                            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 
                            h-12 w-12 bg-white/80 dark:bg-slate-800 rounded-l-full shadow"
                        >
                            ▶
                        </button>

                        {/* Image */}
                        <motion.img
                            key={openIndex}
                            src={tiles[openIndex]}
                            alt=""
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-[70vh] md:h-[80vh] object-contain rounded-md bg-white/5"
                        />

                        {/* Mobile nav */}
                        <div className="mt-3 flex items-center justify-between text-sm text-gray-200">
                            <div>Image {openIndex + 1} of {tiles.length}</div>
                            <div className="flex gap-2">
                                <button onClick={() => setOpenIndex((i) => (i - 1 + tiles.length) % tiles.length)} className="px-3 py-1 bg-white/10 rounded">Prev</button>
                                <button onClick={() => setOpenIndex((i) => (i + 1) % tiles.length)} className="px-3 py-1 bg-white/10 rounded">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Masonry CSS */}
            <style jsx>{`
                .masonry-grid {
                    column-gap: 1rem;
                    column-count: 1;
                }
                @media (min-width: 640px) { .masonry-grid { column-count: 3; } }
                @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
                @media (min-width: 1280px) { .masonry-grid { column-count: 3; } }

                .masonry-item {
                    break-inside: avoid;
                    margin-bottom: 1rem;
                    width: 100%;
                }

                .masonry-item img {
                    border-radius: 0.5rem;
                    min-height: 140px;
                    max-height: 420px;
                }
            `}</style>
        </section>
    );
}
