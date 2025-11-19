import React from "react";
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

import { motion } from "framer-motion";

// Parent animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

// Card animation
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 15 },
    },
};

export default function WhyChooseUs() {
    const reasons = [
        { icon: <FaMedal size={50} />, title: "Quality Material", desc: "We use original OEM parts to ensure long-lasting performance." },
        { icon: <FaBolt size={50} />, title: "Fast & Reliable Service", desc: "Quick response and reliable technicians for every service call." },
        { icon: <FaUserCheck size={50} />, title: "Trained Workers", desc: "Professionally trained technicians with years of experience." },
        { icon: <FaClock size={50} />, title: "Time Availability", desc: "We are available when you need us the most—no delays." },
        { icon: <FaPhoneAlt size={50} />, title: "Quick Response", desc: "Immediate action on your service inquiries and requests." },
        { icon: <FaRupeeSign size={50} />, title: "Transparent Pricing", desc: "No hidden charges—clear and honest pricing guaranteed." },
        { icon: <FaTools size={50} />, title: "Expert Technicians", desc: "Highly skilled engineers who can fix all major appliances." },
        { icon: <FaShieldAlt size={50} />, title: "Warranty Provided", desc: "We provide service warranty for all repairs and installations." },
    ];

    return (
        <section
            className="
            w-full py-16 
            bg-white text-black
            dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white 
            transition-all duration-300
        "
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h3 className="text-lg text-purple-700 dark:text-gray-300">Why Choose Us</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black dark:text-white">
                    Eight Reasons Why People Choose Us
                </h2>

                {/* Animated Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="
                                group rounded-xl p-10 text-center transition-all duration-300
                                bg-gray-100 text-black
                                dark:bg-white/10 dark:text-white
                                backdrop-blur-sm
                                border border-gray-200 dark:border-white/10
                                shadow-lg hover:shadow-2xl hover:scale-105
                                dark:hover:shadow-slate-700
                            "
                        >
                            {/* Icon */}
                            <div className="mb-6 flex justify-center 
                                            text-purple-700 dark:text-cyan-500 
                                            transition-all duration-500 group-hover:scale-125">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-bold text-black dark:text-gray-100">
                                {item.title}
                            </h4>

                            {/* Description */}
                            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
