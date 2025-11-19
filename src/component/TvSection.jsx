import React from "react";
import { FaCheckCircle, FaTools, FaFan, FaSnowflake, FaPhoneAlt } from "react-icons/fa";

export default function TelevisionServiceSection() {
    return (
        <section id="television-service" className="w-full py-16 bg-gradient-to-b from-purple-700 to-purple-900 dark:from-slate-900 dark:to-slate-800 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
                    Professional Television Services
                </h2>

                <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
                    Fast and affordable LED, LCD & Smart TV repair, motherboard fixing, display issues, sound problems & installation service.
                </p>

                {/* 4 Service Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* TV No Display */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaSnowflake size={40} /></div>
                        <h3 className="text-xl font-semibold">No Display / Black Screen</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Fix backlight, panel, and display issues for all TV brands.
                        </p>
                    </div>

                    {/* TV Sound Issue */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaFan size={40} /></div>
                        <h3 className="text-xl font-semibold">Sound Problem</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Audio repair, speaker replacement & soundboard fixing.
                        </p>
                    </div>

                    {/* Motherboard Repair */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaTools size={40} /></div>
                        <h3 className="text-xl font-semibold">Motherboard / Chip Repair</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Repair motherboard, power supply, HDMI & Wi-Fi issues.
                        </p>
                    </div>

                    {/* Installation */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaCheckCircle size={40} /></div>
                        <h3 className="text-xl font-semibold">TV Installation</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Home/office LED & Smart TV wall-mounting installation.
                        </p>
                    </div>

                </div>

                {/* Call to action */}
                <div className="text-center mt-12">
                    <a
                        href="tel:+916374439209"
                        className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-[1.05] transition"
                    >
                        <FaPhoneAlt size={20} />
                        Call Now: 63744 39209
                    </a>
                </div>

            </div>
        </section>
    );
}
