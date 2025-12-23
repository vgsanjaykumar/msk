// src/components/HeroAlt.jsx
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            className="relative w-full"
            aria-label="AC Service and Home Appliance Repair in Coimbatore"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/herobaneer2.png"
                    alt="AC service and home appliance repair in Coimbatore"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gray-900/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-14 lg:py-20">
                <div className="max-w-xl">
                    <p className="text-xs sm:text-sm tracking-wider uppercase text-cyan-400/80 font-bold mb-4">
                        MSK SOLUTION
                    </p>

                    {/* MAIN SEO H1 */}
                    <h1
                        className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px]
            leading-[1] font-serif text-white drop-shadow-md"
                    >
                        AC & Home Appliance
                        <span className="block">Service in Coimbatore</span>
                    </h1>

                    {/* Supporting Text (SEO friendly) */}
                    <p className="mt-6 max-w-xl text-white/80 text-sm md:text-base">
                        MSK Solution provides professional <strong>AC service in Coimbatore</strong>,
                        including AC repair, installation and gas filling. We also repair washing
                        machines, refrigerators, TVs and other home appliances with trained technicians
                        and genuine spare parts.
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="relative z-20 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-2">
                    <div className="translate-y-0 md:-translate-y-6">
                        <div
                            className="flex flex-col md:flex-row items-center justify-between gap-4
              bg-white/10 backdrop-blur-sm border border-white/10 rounded-full
              px-4 py-3 md:py-4 pointer-events-auto"
                        >
                            {/* PHONE */}
                            <a
                                href="tel:+916374439209"
                                className="flex items-center gap-3 text-white font-medium text-sm md:text-base"
                                aria-label="Call MSK Solution for AC Service in Coimbatore"
                            >
                                <span className="text-lg">📞</span> +91 63744 39209
                            </a>

                            {/* Divider */}
                            <div className="hidden lg:flex flex-1 justify-center items-center">
                                <span className="h-0.5 bg-white/20 w-56 rounded" />
                            </div>

                            {/* WhatsApp & Instagram */}
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://wa.me/916374439209"
                                    target="_blank"
                                    className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full transition shadow-md"
                                    aria-label="WhatsApp MSK Solution"
                                >
                                    <FaWhatsapp size={20} />
                                </a>

                                <a
                                    href="https://www.instagram.com/msk_solution_24hr"
                                    target="_blank"
                                    className="bg-pink-500 hover:bg-pink-400 text-white p-3 rounded-full transition shadow-md"
                                    aria-label="Instagram MSK Solution"
                                >
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
