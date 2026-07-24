import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { siteConfig, telLink, waLink } from "../../config/site";

export default function Hero() {
  return (
    <section
      className="relative w-full"
      aria-label="AC service and home appliance repair in Coimbatore"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-banner.png"
          alt="MSK Solution technician servicing a split AC unit in Coimbatore"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gray-900/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-xs sm:text-sm tracking-wider uppercase text-cyan-400/90 font-bold mb-4">
            {siteConfig.name} · Trusted AC Technicians
          </p>

          <h1 className="text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.05] font-serif text-white drop-shadow-md">
            AC Service Coimbatore
            <span className="block">& Home Appliance Repair</span>
          </h1>

          <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed">
            <strong>{siteConfig.name}</strong> offers professional{" "}
            <strong>AC service in Coimbatore</strong> — AC repair,
            installation, gas filling, deep cleaning and AMC plans for split
            and window ACs. We also repair washing machines, refrigerators
            and TVs with genuine spare parts and same-day emergency service.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 motion-reduce:hover:scale-100"
            >
              📞 Call Now for AC Repair
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-colors"
            >
              Book AC Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom action bar */}
      <div className="relative z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-2">
          <div className="translate-y-0 md:-translate-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl md:rounded-full px-4 py-3 md:py-4 pointer-events-auto">
              <a
                href={telLink()}
                className="flex items-center gap-3 text-white font-medium text-sm md:text-base hover:text-cyan-300 transition-colors"
                aria-label={`Call ${siteConfig.name} for AC service in Coimbatore`}
              >
                <span className="text-lg" aria-hidden="true">📞</span>{" "}
                {siteConfig.phoneDisplay}
              </a>

              <div className="hidden lg:flex flex-1 justify-center items-center">
                <span className="h-0.5 bg-white/20 w-56 rounded" />
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={waLink("Hi MSK Solution, I need AC service in Coimbatore.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full transition-colors shadow-md"
                  aria-label={`WhatsApp ${siteConfig.name}`}
                >
                  <FaWhatsapp size={20} aria-hidden="true" />
                </a>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-400 text-white p-3 rounded-full transition-colors shadow-md"
                  aria-label={`${siteConfig.name} on Instagram`}
                >
                  <FaInstagram size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
