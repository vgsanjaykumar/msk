import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import Button from "../common/Button";
import { staggerContainer, fadeUp } from "../common/motionPresets";
import { siteConfig, telLink } from "../../config/site";

/** Compact hero used on each dedicated service landing page (AC, TV, etc). */
export default function ServiceHero({ eyebrow, h1, subtitle, image }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800  dark:from-slate-900 dark:via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm tracking-wider uppercase text-cyan-300 font-bold mb-4"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {h1}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button to="/book-service" variant="primary" icon={FaCalendarCheck}>
              Book a Service
            </Button>
            <Button
              href={telLink()}
              variant="outline"
              icon={FaPhoneAlt}
              className="!border-white !text-white hover:!bg-white hover:!text-purple-800"
            >
              Call {siteConfig.phoneDisplay}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
