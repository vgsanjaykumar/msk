import React from "react";
import { motion } from "framer-motion";
import {
  FaMedal,
  FaBolt,
  FaUserCheck,
  FaClock,
  FaPhoneAlt,
  FaRupeeSign,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import FloatingBlobs from "../common/FloatingBlobs";
import { staggerContainer, cardPop, viewportOnce } from "../common/motionPresets";

const reasons = [
  { icon: FaMedal, title: "Quality Material", desc: "We use original OEM parts to ensure long-lasting performance." },
  { icon: FaBolt, title: "Fast & Reliable Service", desc: "Quick response and reliable technicians for every service call." },
  { icon: FaUserCheck, title: "Trained AC Technicians", desc: "Professionally trained technicians with years of experience." },
  { icon: FaClock, title: "Emergency AC Service", desc: "Available when you need us most — no long delays." },
  { icon: FaPhoneAlt, title: "Quick Response", desc: "Immediate action on your service inquiries and requests." },
  { icon: FaRupeeSign, title: "Transparent Pricing", desc: "No hidden charges — clear and honest pricing guaranteed." },
  { icon: FaTools, title: "AC AMC Plans", desc: "Annual maintenance contracts to keep your AC running year-round." },
  { icon: FaShieldAlt, title: "Warranty Provided", desc: "We provide service warranty for all repairs and installations." },
];

export default function WhyChooseUs({
  eyebrow = "Why Choose Us",
  title = "Reasons Coimbatore Trusts MSK Solution",
  level = 2,
}) {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white text-black dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white transition-colors duration-300">
      <FloatingBlobs variant="light" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          level={level}
          align="left"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={cardPop}
              className="group rounded-2xl p-8 md:p-10 text-center transition-all duration-300 bg-gray-50 text-black dark:bg-white/10 dark:text-white border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              <div className="mb-6 flex justify-center text-purple-700 dark:text-cyan-400 transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                <item.icon size={44} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-black dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
