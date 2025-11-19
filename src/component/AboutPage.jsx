import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// animation presets
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function AboutPage() {
    return (
        <section
            className="
        w-full 
        bg-white text-black
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white
        transition-all duration-300
        py-20
      "
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center text-4xl md:text-5xl font-bold mb-10 text-purple-700 dark:text-white"
                >
                    About Us
                </motion.h2>

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 dark:bg-white/10">
                            <img
                                src="/herobaneer2.png"
                                alt="About us"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400 dark:text-gray-100">
                            We Provide Trusted Home Appliance Services
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            At MSK Solutions, we are committed to delivering high-quality,
                            affordable and reliable home appliance repair services. With a
                            team of trained and experienced technicians, we ensure fast
                            diagnosis, transparent pricing and professional solutions for all
                            major home appliances including AC, Washing Machine, Refrigerator
                            and TV.
                        </p>
                    </motion.div>
                </div>

        
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
        mt-16 text-center 
        p-10 rounded-xl shadow-lg 
        bg-purple-100 dark:bg-white/10 
        border border-purple-300 dark:border-white/10
    "
                >
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <FaStar className="text-yellow-400 text-3xl" />
                        <p className="text-xl font-semibold dark:text-white">
                            10+ Years of Experience
                        </p>
                    </div>


                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Our skilled technicians have over a decade of hands-on experience in
                        repairing and servicing all major home appliances. This ensures accurate
                        troubleshooting, perfect installations, and long-lasting repair quality
                        for every customer we serve.
                    </p>
                </motion.div>


                {/* Call to Action */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="tel:+916374439209"
                        className="
              inline-block 
              bg-purple-700 hover:bg-purple-400 
              dark:bg-cyan-500 dark:hover:bg-cyan-400
              text-white text-lg font-semibold 
              px-10 py-4 rounded-full shadow-lg 
              transition hover:scale-105
            "
                    >
                        Call Us Now – 63744 39209
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
