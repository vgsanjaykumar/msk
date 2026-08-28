import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { siteConfig, telLink, waLink } from "../../config/site";
import useReducedMotion from "../common/useReducedMotion";
import { staggerContainer, fadeUp } from "../common/motionPresets";

export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Subtle parallax: the background image drifts slightly slower than the
  // page scroll. Only `transform` is animated (no layout/paint cost), and
  // it's disabled entirely for prefers-reduced-motion.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden  bg-white dark:bg-slate-900 transition-colors duration-300"
      aria-label="AC service and home appliance repair in Coimbatore"
    >
      <div className="absolute inset-0  overflow-hidden">
        <motion.img
          src="/hero-banner.png"
          alt="MSK Solution technician servicing a split AC unit in Coimbatore"
          className="absolute -top-[15%] left-0 w-full h-[130%] object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          style={prefersReducedMotion ? undefined : { y: parallaxY }}
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-28">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm tracking-wider uppercase text-purple-400/90 dark:text-cyan-400 font-bold mb-4"
          >
            {siteConfig.name} · Trusted AC Technicians
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.05] font-serif text-white drop-shadow-md"
          >
            AC Service Coimbatore
            <span className="block">& Home Appliance Repair</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed"
          >
            <strong>{siteConfig.name}</strong> offers professional{" "}
            <strong>AC service in Coimbatore</strong> — AC repair,
            installation, gas filling, deep cleaning and AMC plans for split
            and window ACs. We also repair washing machines, refrigerators
            and TVs with genuine spare parts and same-day emergency service.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={telLink()}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="inline-flex items-center gap-2 :bg-purple-700 hover:bg-purple-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              📞 Call Now for AC Repair
            </motion.a>
            <Link to="/book-service">
              <motion.span
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-colors"
              >
                Book AC Service
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom action bar */}
      <div className="relative z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-2">
          <div className="translate-y-0 md:-translate-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl md:rounded-full px-4 py-3 md:py-4 pointer-events-auto"
            >
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
                <motion.a
                  href={waLink("Hi MSK Solution, I need AC service in Coimbatore.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.12, rotate: -6 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
                  className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full shadow-md"
                  aria-label={`WhatsApp ${siteConfig.name}`}
                >
                  <FaWhatsapp size={20} aria-hidden="true" />
                </motion.a>

                <motion.a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.12, rotate: 6 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
                  className="bg-pink-500 hover:bg-pink-400 text-white p-3 rounded-full shadow-md"
                  aria-label={`${siteConfig.name} on Instagram`}
                >
                  <FaInstagram size={20} aria-hidden="true" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
