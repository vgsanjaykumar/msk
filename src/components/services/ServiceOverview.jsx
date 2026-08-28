import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { fadeUp, staggerContainer, viewportOnce } from "../common/motionPresets";

/** Overview paragraph + the grid of specific services offered for one appliance type. */
export default function ServiceOverview({ name, overview, services }) {
  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-12"
        >
          {overview}
        </motion.p>

        <SectionHeading
          eyebrow="What We Offer"
          title={`${name} Services in Coimbatore`}
          level={2}
          align="left"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
