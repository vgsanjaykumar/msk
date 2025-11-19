import React from "react";
import { FaCheckCircle, FaTools, FaFan, FaSnowflake, FaPhoneAlt } from "react-icons/fa";

export default function ACService() {
    return (
        <section id="ac-service" className="w-full py-16 bg-gradient-to-b from-purple-700 to-purple-900 dark:from-slate-900 dark:to-slate-800 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
                    Professional AC Services
                </h2>

                <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
                    Fast, reliable, and affordable AC repair, installation, gas filling, and deep cleaning services by expert technicians.
                </p>

                {/* 4 Service Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* AC Repair */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaSnowflake size={40} /></div>
                        <h3 className="text-xl font-semibold">AC Repair</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Fix cooling issues, noise, water leakage & more.
                        </p>
                    </div>

                    {/* AC Gas Filling */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaFan size={40} /></div>
                        <h3 className="text-xl font-semibold">AC Gas Filling</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Restore cooling performance with proper gas refilling.
                        </p>
                    </div>

                    {/* AC Installation */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaTools size={40} /></div>
                        <h3 className="text-xl font-semibold">AC Installation</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Split and Window AC installation by professionals.
                        </p>
                    </div>

                    {/* Deep Cleaning */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition text-center">
                        <div className="flex justify-center text-cyan-300 mb-4"><FaCheckCircle size={40} /></div>
                        <h3 className="text-xl font-semibold">AC Deep Cleaning</h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Improve airflow, hygiene & cooling efficiency.
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
