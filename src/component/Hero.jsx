// src/components/HeroAlt.jsx
import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative w-full">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/herobaneer2.png"
                    alt="Home appliances background"
                    className="w-full h-full object-cover object-center "
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gray-900/40 " />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-12 lg:py-16">
                <div className="max-w-xl">
                    <p className="text-xs sm:text-sm tracking-wider uppercase text-white/80 mb-4">
                        MSK SOLUTION
                    </p>

                    {/* Headline */}
                    <h1 className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[96px] 
            leading-[0.92] font-serif text-white drop-shadow-md">
                        <span className="block">Home Appliances Repair &</span>
                        <span className="block">Service</span>
                    </h1>

                    {/* Sub Text */}
                    <p className=" mt-6 max-w-xl text-white/80 text-sm md:text-base ">
                        Fast, reliable, trained technicians for AC, Washing Machine, Fridge, TV and more.
                        We provide genuine parts and a satisfaction guarantee.
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="relative z-20 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-2 ">
                    <div className="translate-y-0 md:-translate-y-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 
              bg-white/10 backdrop-blur-sm border border-white/10 rounded-full 
              px-4 py-3 md:py-4 pointer-events-auto">

                            {/* PHONE */}
                            <a
                                href="tel:+916374439209"
                                className="flex items-center gap-3 text-white font-medium text-sm md:text-base"
                            >
                                <span className="text-lg">📞</span> +91 63744 39209
                            </a>

                            {/* LINE DIVIDER */}
                            <div className="hidden lg:flex flex-1 justify-center items-center">
                                <span className="h-0.5 bg-white/20 w-56 rounded" />
                            </div>

                            {/* SOCIAL + WHATSAPP */}
                            <div className="flex items-center gap-4">

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/916374439209"
                                    target="_blank"
                                    className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full transition shadow-md"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp size={20} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/msk_solution_24hr?utm_source=qr&igsh=MWsxazl6YnV5cmw4dw=="
                                    target="_blank"
                                    className="bg-pink-500 hover:bg-pink-400 text-white p-3 rounded-full transition shadow-md"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={20} />
                                </a>

                          
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile spacing fix */}

        </section>
    );
}
