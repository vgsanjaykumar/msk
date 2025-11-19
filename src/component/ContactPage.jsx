// src/components/ContactPage.jsx
import React, { useState } from "react";
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
    const whatsappNumber = "919600417117";
    const imageSrc = "/assets/msk logo.jpeg";

    const [form, setForm] = useState({
        service: "Washing Machine",
        name: "",
        phone: "",
        email: "",
        datetime: "",
        message: "",
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Please enter your name";
        if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone";
        if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
        if (!form.datetime) e.datetime = "Choose date & time";
        if (!form.consent) e.consent = "Please confirm you agree to be contacted";
        return e;
    }

    function buildWhatsAppMessage() {
        const lines = [
            "🛠️ New Booking Request — MSK SOLUTION",
            `Service: ${form.service}`,
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            `Email: ${form.email || "-"}`,
            `Preferred date & time: ${form.datetime}`,
            `Message: ${form.message || "-"}`,
            "",
            "Please confirm the booking.",
        ];
        return encodeURIComponent(lines.join("\n"));
    }

    function handleWhatsAppSubmit(e) {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length) return;

        const waUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;
        window.open(waUrl, "_blank");

        setSuccess("WhatsApp opened with your booking details!");
    }

    return (
        <div className="w-full bg-white dark:bg-slate-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

                {/* GRID - Stacks on mobile, side-by-side on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* LEFT PANEL */}
                    <aside className="rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-slate-800">

                        {/* Responsive Image */}
                        <div className="w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                            <img
                                src={imageSrc}
                                alt="MSK technician"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                                Contact MSK Solution
                            </h2>

                            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Fast, reliable appliance repair — call or message for same-day service.
                            </p>

                            {/* CONTACT DETAILS */}
                            <div className="mt-6 space-y-5">

                                {/* PHONE */}
                                <div className="flex items-start gap-3">
                                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-md text-cyan-600 dark:text-cyan-200">
                                        <FaPhoneAlt size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Phone</div>
                                        <a href="tel:+916374439209" className="font-medium text-black dark:text-white text-base">
                                            +91 63744 39209
                                        </a>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="flex items-start gap-3">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-md text-indigo-600 dark:text-indigo-200">
                                        <FaMapMarkerAlt size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Location</div>
                                        <div className="font-medium text-black dark:text-white text-base">
                                            Karaikudi, Tamil Nadu
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Services across nearby regions</p>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="flex items-start gap-3">
                                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-md text-yellow-600 dark:text-yellow-200">
                                        <FaEnvelope size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
                                        <a href="mailto:sanjaykumarvgs@gmail.com" className="font-medium text-black dark:text-white text-base">
                                            sanjaykumarvgs@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* SOCIAL ICONS */}
                            <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6">
                                <div className="flex items-center gap-4">

                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg shadow"
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </a>

                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-400 text-white shadow">
                                        <FaInstagram />
                                    </a>

                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow">
                                        <FaFacebookF />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* RIGHT PANEL - BOOKING FORM */}
                    <main className="rounded-xl p-6 sm:p-8 shadow-lg bg-white dark:bg-slate-800">

                        <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                            Book a Service
                        </h3>

                        <form onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-4">

                            {/* SERVICE DROPDOWN */}
                            <div>
                                <label className="text-sm font-medium">Service</label>
                                <select
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                >
                                    <option>Washing Machine</option>
                                    <option>Refrigerator</option>
                                    <option>Air Conditioner</option>
                                    <option>Television</option>
                                    <option>Microwave Oven</option>
                                    <option>Water Heater</option>
                                    <option>CCTV Installation</option>
                                    <option>Speaker Repair</option>
                                </select>
                            </div>

                            {/* NAME + PHONE */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                    />
                                    {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
                                        }
                                        className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                    />
                                    {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* EMAIL + DATE TIME */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Preferred Date & Time</label>
                                    <input
                                        type="datetime-local"
                                        value={form.datetime}
                                        onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                    />
                                    {errors.datetime && <p className="text-xs text-red-600">{errors.datetime}</p>}
                                </div>
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    rows="4"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="mt-1 w-full rounded-md border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white"
                                ></textarea>
                            </div>

                            {/* CONSENT */}
                            <div className="flex gap-3">
                                <input
                                    type="checkbox"
                                    checked={form.consent}
                                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                                />
                                <label className="text-sm">
                                    I agree to be contacted about this booking.
                                </label>
                            </div>

                            {/* BUTTONS */}
                            <div className="pt-3 flex flex-wrap gap-3">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-md shadow font-semibold"
                                >
                                    Send via WhatsApp
                                </button>

                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md shadow"
                                >
                                    Open WhatsApp
                                </a>
                            </div>

                            {success && (
                                <p className="text-green-600 text-sm mt-2">{success}</p>
                            )}
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

