import React from "react";
import { motion } from "framer-motion";
import {
    FaSnowflake,
    FaFan,
    FaTools,
    FaCheckCircle,
    FaPhoneAlt
} from "react-icons/fa";

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

            {/* ========================= */}
            {/*         MAIN TITLE        */}
            {/* ========================= */}
            <section className="py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-gray-100">
                    Our Primary Goal
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-gray-700 dark:text-gray-300">
                    We provide fast, reliable and professional Home Appliance repair
                    services with skilled technicians and genuine spare parts.
                </p>
            </section>

            {/* Animated Wrapper */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="space-y-24"
            >
                <WashingMachineServices />
                <RefrigeratorServices />
                <ACServices />
                <TVServices />
            </motion.div>

            {/* Call to Action */}
            <div className="text-center py-16">
                <a
                    href="tel:+916374439209"
                    className="
          inline-flex items-center gap-3 
          dark:bg-cyan-500 dark:hover:bg-cyan-400  bg-purple-600 hover:bg-purple-900 
          px-10 py-4 rounded-full shadow-xl 
          text-white font-semibold text-lg 
          hover:scale-105 transition
        "
                >
                    <FaPhoneAlt size={20} /> Call Now: 63744 39209
                </a>
            </div>

        </div>
    );
}

/* ====================================================== */
/*  SINGLE BOX (Dark + Light Mode Perfect Matching)       */
/* ====================================================== */
function ACBox({ icon, title, desc }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
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

/* ====================================================== */
/*      WASHING MACHINE SERVICE                           */
/* ====================================================== */
function WashingMachineServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-gray-100">
                Washing Machine Services
            </h2>
            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                Drum issue, spin problem, water leakage & installation service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ACBox icon={<FaTools size={40} />} title="Drum / Spin Issue" desc="Fix vibration, spin failure & drum jam." />
                <ACBox icon={<FaFan size={40} />} title="Water Leakage" desc="Solve leakage & pipe issues." />
                <ACBox icon={<FaTools size={40} />} title="Installation" desc="Top-load & front-load installation." />
                <ACBox icon={<FaCheckCircle size={40} />} title="Deep Cleaning" desc="Improve washing quality & airflow." />
            </div>
        </section>
    );
}

/* ====================================================== */
/*      REFRIGERATOR SERVICE                              */
/* ====================================================== */
function RefrigeratorServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-gray-100">
                Refrigerator Services
            </h2>
            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                Cooling issue, gas filling, compressor repair & maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ACBox icon={<FaSnowflake size={40} />} title="Cooling Issue" desc="Fix low cooling & freezer issues." />
                <ACBox icon={<FaFan size={40} />} title="Gas Filling" desc="Refill refrigerant for strong cooling." />
                <ACBox icon={<FaTools size={40} />} title="Compressor Repair" desc="Fix compressor noise & failures." />
                <ACBox icon={<FaCheckCircle size={40} />} title="Gasket Replacement" desc="Replace damaged door seals." />
            </div>
        </section>
    );
}

/* ====================================================== */
/*                AC SERVICE SECTION                      */
/* ====================================================== */
function ACServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-gray-100">
                Air Conditioner Services
            </h2>
            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                AC repair, installation, gas filling & deep cleaning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ACBox icon={<FaSnowflake size={40} />} title="Cooling Issue" desc="Fix low cooling & sensor faults." />
                <ACBox icon={<FaFan size={40} />} title="Gas Filling" desc="Increase cooling performance." />
                <ACBox icon={<FaTools size={40} />} title="Installation" desc="AC wall mount & setup." />
                <ACBox icon={<FaCheckCircle size={40} />} title="Deep Cleaning" desc="Improve cooling efficiency." />
            </div>
        </section>
    );
}

/* ====================================================== */
/*              TELEVISION SERVICE SECTION                */
/* ====================================================== */
function TVServices() {
    return (
        <section className="px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-gray-100">
                Television Services
            </h2>
            <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
                LED, LCD & Smart TV motherboard, display & sound repair.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <ACBox icon={<FaSnowflake size={40} />} title="Display Issue" desc="Backlight, dim screen & no picture." />
                <ACBox icon={<FaFan size={40} />} title="Sound Issue" desc="Speaker & soundboard repair." />
                <ACBox icon={<FaTools size={40} />} title="Motherboard Repair" desc="Chip-level power board fixes." />
                <ACBox icon={<FaCheckCircle size={40} />} title="TV Installation" desc="LED/Smart TV wall mount setup." />
            </div>
        </section>
    );
}
