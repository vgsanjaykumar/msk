// FocusGrid.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaSnowflake,
    FaTv,
    FaWater,
    FaFan,
    FaThermometerHalf,
    FaVolumeUp,
    FaMicrochip,
    FaCloud,
} from "react-icons/fa";


const images = {
    ac: "/assets/servies/ac.png",
    washing: "/assets/servies/washing machine.png",
    tv: "/assets/servies/tv.png",
    fridge: "/assets/servies/Refrigerator.png",
    heater: "/assets/servies/water.png",
    microwave: "/assets/servies/Microwave Oven.png",
    speaker: "/assets/servies/speaker.png",
    aircooler: "/assets/servies/air cooler.png",
};

export default function FocusGrid() {
    const items = [
        {
            id: "ac",
            title: "Air Conditioner",
            desc: "AC repair, installation, gas filling and deep cleaning.",
            icon: <FaFan size={24} className="text-cyan-500" />,
        },
        {
            id: "washing",
            title: "Washing Machine",
            desc: "Drum issues, leakage fixing, PCB repair and installation.",
            icon: <FaWater size={24} className="text-emerald-500" />,
        },
        {
            id: "tv",
            title: "Television",
            desc: "LED, LCD & Smart TV repair, display and motherboard service.",
            icon: <FaTv size={24} className="text-violet-500" />,
        },
        {
            id: "fridge",
            title: "Refrigerator",
            desc: "Cooling issues, compressor repair, gas refill service.",
            icon: <FaSnowflake size={24} className="text-sky-500" />,
        },
        {
            id: "heater",
            title: "Water Heater",
            desc: "Geyser repair, heating element replacement and installation.",
            icon: <FaThermometerHalf size={22} className="text-red-500" />,
        },
        {
            id: "microwave",
            title: "Microwave Oven",
            desc: "Heating issues, sparking, and control panel repair.",
            icon: <FaMicrochip size={22} className="text-orange-500" />,
        },
        {
            id: "speaker",
            title: "Speaker Repair",
            desc: "Home theater, Bluetooth, tower speaker & woofer repair.",
            icon: <FaVolumeUp size={22} className="text-amber-500" />,
        },
        {
            id: "aircooler",
            title: "Air Cooler",
            desc: "Air cooler servicing, pump & fan repair, and cleaning.",
            icon: <FaCloud size={22} className="text-teal-500" />,
        },
    ];

    const [active, setActive] = useState("ac");

    // helper to find the active item object
    const activeItem = items.find((i) => i.id === active);

    return (
        <section className="w-full py-12 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-purple-700 dark:text-white">OUR FOCUS</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Home Appliance Services
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        From AC to Washing Machine, Refrigerator, TV, Microwave, and more - we service all major brands and models.
                    </p>
                </div>

                {/* layout: left stack (4) | center image | right stack (4) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* LEFT stack: first 4 */}
                    <div className="space-y-4">
                        {items.slice(0, 4).map((it) => (
                            <button
                                key={it.id}
                                onClick={() => setActive(it.id)}
                                className={`w-full text-left rounded-xl p-4 flex gap-4 items-start shadow-sm transition-all
                ${active === it.id ? "scale-105 ring-2 ring-purple-300 dark:ring-cyan-300  shadow-lg" : "hover:-translate-y-1 hover:shadow-md"}
                bg-white dark:bg-slate-800`}
                                aria-pressed={active === it.id}
                            >
                                <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 shrink-0">
                                    {it.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{it.title}</h3>
                                    {/* <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{it.desc}</p> */}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* CENTER image area */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-800 p-4 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active}
                                    src={images[active]}
                                    alt={active}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.45 }}
                                    className="w-full h-72 sm:h-72 md:h-72 object-cover rounded-xl bg-gray-100"
                                />
                            </AnimatePresence>

                            <div className="mt-4 text-center">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{activeItem.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl mx-auto">{activeItem.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT stack: last 4 */}
                    <div className="space-y-4">
                        {items.slice(4).map((it) => (
                            <button
                                key={it.id}
                                onClick={() => setActive(it.id)}
                                className={`w-full text-left rounded-xl p-4 flex gap-4 items-start shadow-sm transition-all
                ${active === it.id ? "scale-105 ring-2 ring-purple-300  dark:ring-cyan-300 shadow-lg" : "hover:-translate-y-1 hover:shadow-md"}
                bg-white dark:bg-slate-800`}
                                aria-pressed={active === it.id}
                            >
                                <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 shrink-0">
                                    {it.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{it.title}</h3>
                                    {/* <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{it.desc}</p> */}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
