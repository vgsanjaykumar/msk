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
            aria-label="About MSK Solution AC Service in Coimbatore"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN SEO HEADING */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center text-4xl md:text-5xl font-bold mb-6 dark:text-cyan-400 text-purple-600"
                >
                    AC Service in Coimbatore – MSK Solution
                </motion.h1>

                <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-14">
                    MSK Solution is a trusted provider of professional AC service in Coimbatore,
                    offering reliable AC repair, installation and maintenance services across
                    all areas of the city.
                </p>

                {/* CONTENT SECTION */}
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
                                alt="AC service technicians in Coimbatore - MSK Solution"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-500">
                            Trusted Home Appliance Repair Experts in Coimbatore
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                            At <strong>MSK Solution</strong>, we specialize in delivering affordable and
                            dependable home appliance repair services. Our expert technicians provide
                            fast and efficient <strong>AC service in Coimbatore</strong>, ensuring
                            customer satisfaction with every visit.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                            We handle <strong>AC repair, AC installation, AC gas charging</strong>,
                            washing machine service, refrigerator repair and TV service using modern
                            tools and genuine spare parts.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Our services are available across Gandhipuram, Peelamedu, RS Puram,
                            Saravanampatti and all major areas in Coimbatore.
                        </p>
                    </motion.div>
                </div>

                {/* EXPERIENCE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
            mt-16 text-center 
            p-10 rounded-xl shadow-lg 
            bg-purple-100 dark:bg-white/10 
            border border-purple-200 dark:border-white/10
          "
                >
                    <div className="flex items-center justify-center gap-3 mt-2">
                        <FaStar className="text-yellow-400 text-3xl" />
                        <h3 className="text-xl font-semibold">
                            10+ Years of Experience in AC Service
                        </h3>
                    </div>

                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        With over a decade of experience, our technicians ensure accurate diagnosis,
                        professional installation and long-lasting repairs. MSK Solution is known for
                        dependable and quick AC service in Coimbatore.
                    </p>
                </motion.div>

                {/* CALL TO ACTION */}
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
              bg-purple-700 hover:bg-purple-500 
              dark:bg-cyan-500 dark:hover:bg-cyan-400
              text-white text-lg font-semibold 
              px-10 py-4 rounded-full shadow-lg 
              transition hover:scale-105
            "
                        aria-label="Call MSK Solution for AC Service in Coimbatore"
                    >
                        Call Now for AC Service – 63744 39209
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
