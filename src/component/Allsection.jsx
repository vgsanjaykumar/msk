import React from "react";
import { motion } from "framer-motion";
import {
    FaSnowflake,
    FaFan,
    FaTools,
    FaCheckCircle,
    FaPhoneAlt,
} from "react-icons/fa";

/* Animation */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ServicesPage() {
    return (
        <div
            className="
        bg-white text-black 
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 
        dark:text-white 
        transition-all duration-300
      "
        >
            {/* ================= MAIN SEO HEADING ================= */}
            <section className="py-20 text-center px-6">
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-gray-100"
                >
                    AC & Home Appliance Services in Coimbatore
                </motion.h1>

                <p className="max-w-3xl mx-auto mt-6 text-gray-700 dark:text-gray-300 text-lg">
                    MSK Solution offers professional <strong>AC service in Coimbatore</strong>
                    along with washing machine repair, refrigerator service and TV repair.
                    Our trained technicians ensure fast service, genuine spare parts and
                    affordable pricing across all areas of Coimbatore.
                </p>
            </section>

            {/* ================= SERVICES SECTIONS ================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="space-y-24"
            >
                <ACServices />
                <WashingMachineServices />
                <RefrigeratorServices />
                <TVServices />
            </motion.div>

            {/* ================= CALL TO ACTION ================= */}
            <div className="text-center py-20">
                <a
                    href="tel:+916374439209"
                    className="
            inline-flex items-center gap-3 
            bg-purple-600 hover:bg-purple-800 
            dark:bg-cyan-500 dark:hover:bg-cyan-400
            px-10 py-4 rounded-full shadow-xl 
            text-white font-semibold text-lg 
            hover:scale-105 transition
          "
                    aria-label="Call MSK Solution for AC Service in Coimbatore"
                >
                    <FaPhoneAlt size={20} />
                    Call Now – 63744 39209
                </a>
            </div>
        </div>
    );
}

/* ================= COMMON CARD ================= */
function ServiceBox({ icon, title, desc }) {
    return (
        <motion.div
            variants={fadeUp}
            className="
        backdrop-blur-xl 
        bg-white/60 dark:bg-white/5
        border border-gray-200 dark:border-white/10 
        p-6 rounded-xl shadow-lg 
        text-center 
        hover:scale-105 hover:shadow-2xl transition
      "
        >
            <div className="text-purple-500 dark:text-cyan-300 mb-4 flex justify-center">
                {icon}
            </div>

            <h3 className="text-xl font-semibold text-black dark:text-gray-100">
                {title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                {desc}
            </p>
        </motion.div>
    );
}

/* ================= AC SERVICES ================= */
function ACServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto" id="ac-service">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500 dark:text-cyan-400">
                Air Conditioner Services in Coimbatore
            </h2>

            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                AC repair, AC installation, gas filling and deep cleaning services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ServiceBox icon={<FaSnowflake size={40} />} title="Cooling Issue" desc="Fix low cooling, sensor and thermostat issues." />
                <ServiceBox icon={<FaFan size={40} />} title="Gas Filling" desc="Improve AC cooling performance with gas refill." />
                <ServiceBox icon={<FaTools size={40} />} title="AC Installation" desc="Professional split & window AC installation." />
                <ServiceBox icon={<FaCheckCircle size={40} />} title="Deep Cleaning" desc="Increase efficiency and air quality." />
            </div>
        </section>
    );
}

/* ================= WASHING MACHINE ================= */
function WashingMachineServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto" id="washing-machine-repair">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500 dark:text-cyan-400 ">
                Washing Machine Repair Services
            </h2>

            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                Drum issues, spin problems, water leakage and installation service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ServiceBox icon={<FaTools size={40} />} title="Drum / Spin Issue" desc="Repair vibration and spin failures." />
                <ServiceBox icon={<FaFan size={40} />} title="Water Leakage" desc="Fix inlet, outlet and pipe leakage." />
                <ServiceBox icon={<FaTools size={40} />} title="Installation" desc="Top-load & front-load installation." />
                <ServiceBox icon={<FaCheckCircle size={40} />} title="Deep Cleaning" desc="Improve washing performance." />
            </div>
        </section>
    );
}

/* ================= REFRIGERATOR ================= */
function RefrigeratorServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto" id="refrigerator-service">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500 dark:text-cyan-400">
                Refrigerator Repair Services
            </h2>

            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                Cooling issues, gas filling, compressor and gasket repair.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ServiceBox icon={<FaSnowflake size={40} />} title="Cooling Issue" desc="Resolve freezer and cooling problems." />
                <ServiceBox icon={<FaFan size={40} />} title="Gas Filling" desc="Gas refill for strong cooling." />
                <ServiceBox icon={<FaTools size={40} />} title="Compressor Repair" desc="Fix noise and compressor failure." />
                <ServiceBox icon={<FaCheckCircle size={40} />} title="Gasket Replacement" desc="Replace damaged door seals." />
            </div>
        </section>
    );
}

/* ================= TV SERVICES ================= */
function TVServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto" id="tv-repair">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500 dark:text-cyan-400">
                Television Repair Services
            </h2>

            <p className="text-center mt-2 text-gray-700 dark:text-gray-300 ">
                LED, LCD & Smart TV display, sound and motherboard repair.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ServiceBox icon={<FaSnowflake size={40} />} title="Display Issue" desc="Fix backlight and screen problems." />
                <ServiceBox icon={<FaFan size={40} />} title="Sound Issue" desc="Speaker and audio board repair." />
                <ServiceBox icon={<FaTools size={40} />} title="Motherboard Repair" desc="Chip-level TV repairs." />
                <ServiceBox icon={<FaCheckCircle size={40} />} title="TV Installation" desc="Wall mount & setup service." />
            </div>
        </section>
    );
}
