import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import AnimatedCounter from "../common/AnimatedCounter";
import { fadeUp, slideLeft, slideRight, viewportOnce } from "../common/motionPresets";
import { siteConfig, telLink } from "../../config/site";

export default function About() {
  return (
    <section
      className="w-full bg-white text-black dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white transition-colors duration-300 py-20"
      aria-label={`About ${siteConfig.name} AC service in Coimbatore`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200 dark:bg-white/10 group">
              <img
                src="/hero-banner.png"
                alt="MSK Solution AC service technician working in Coimbatore"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
                loading="lazy"
                width="480"
                height="480"
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="About Us"
              title="Trusted AC Service Experts in Coimbatore"
              level={2}
              align="left"
              className="mb-6"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              At <strong>{siteConfig.name}</strong>, we specialize in
              affordable, dependable <strong>AC service in Coimbatore</strong>
              . Our expert AC technicians provide fast AC repair, AC
              installation and AC gas filling, so your home or office stays
              cool without long waits.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              We handle <strong>AC maintenance, AC AMC plans and AC deep
              cleaning</strong> for both split and window ACs, plus washing
              machine, refrigerator and TV service — using genuine spare
              parts and modern tools.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Search &ldquo;AC service near me&rdquo; and you&rsquo;ll find us
              across {siteConfig.areasServed.slice(0, 4).join(", ")} and all
              major areas of Coimbatore.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center p-10 rounded-2xl shadow-lg bg-purple-50 dark:bg-white/10 border border-purple-100 dark:border-white/10"
        >
          <div className="flex items-center justify-center gap-3">
            <FaStar className="text-yellow-400 text-3xl" aria-hidden="true" />
            <h3 className="text-xl font-semibold">
              <AnimatedCounter value={10} suffix="+" /> Years of Experience in
              AC Service
            </h3>
          </div>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            With over a decade of experience, our technicians ensure accurate
            diagnosis, professional AC installation and long-lasting repairs.
            {" "}{siteConfig.name} is known for dependable, quick AC service
            in Coimbatore — including emergency AC repair.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <Button href={telLink()} variant="primary">
            Call Now for AC Service – {siteConfig.phoneDisplay}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
