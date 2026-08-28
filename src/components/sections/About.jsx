import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import AnimatedCounter from "../common/AnimatedCounter";
import { fadeUp, slideLeft, slideRight, viewportOnce } from "../common/motionPresets";
import { siteConfig } from "../../config/site";

/** Company-wide "who we are" block used on the About page. */
export default function About() {
  return (
    <section
      className="w-full bg-white text-black dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white transition-colors duration-300 py-16 md:py-20"
      aria-label={`About ${siteConfig.name}`}
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
                alt="MSK Solution appliance service technician working in Coimbatore"
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
              title="Trusted Appliance Service Experts in Coimbatore"
              level={2}
              align="left"
              className="mb-6"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              <strong>{siteConfig.name}</strong> is an independent AC service
              and home appliance repair provider based in Coimbatore. We
              started with AC repair and installation, and have grown into a
              trusted team for washing machine, refrigerator and TV service
              as well.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Every technician on our team is trained to diagnose the actual
              fault before recommending a repair, and we use genuine or
              manufacturer-recommended spare parts so the fix lasts.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              We currently serve {siteConfig.areasServed.slice(0, 4).join(", ")}{" "}
              and other areas across Coimbatore — see our full{" "}
              <Link to="/areas-we-serve" className="text-purple-700 dark:text-cyan-400 underline underline-offset-2">
                service area list
              </Link>.
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
              Appliance Service
            </h3>
          </div>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            With over a decade of hands-on experience, our technicians focus
            on accurate diagnosis, careful installation and repairs that are
            built to last — backed by a service warranty on every visit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
