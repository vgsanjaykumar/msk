import React, { useId, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SectionHeading from "../common/SectionHeading";
import { siteConfig, telLink, waLink } from "../../config/site";

const SERVICE_OPTIONS = [
  "Air Conditioner",
  "Washing Machine",
  "Refrigerator",
  "Television",
  "Microwave Oven",
  "Water Heater",
  "CCTV Installation",
  "Speaker Repair",
];

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const uid = useId();
  const [form, setForm] = useState({
    service: "Air Conditioner",
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
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.datetime) e.datetime = "Choose a preferred date & time";
    if (!form.consent) e.consent = "Please confirm you agree to be contacted";
    return e;
  }

  function buildWhatsAppMessage() {
    const lines = [
      `🛠️ New Booking Request — ${siteConfig.name}`,
      `Service: ${form.service}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "-"}`,
      `Preferred date & time: ${form.datetime}`,
      `Message: ${form.message || "-"}`,
      "",
      "Please confirm the booking.",
    ];
    return lines.join("\n");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      setSuccess("");
      return;
    }
    window.open(waLink(buildWhatsAppMessage()), "_blank", "noopener,noreferrer");
    setSuccess("WhatsApp opened with your booking details!");
  }

  return (
    <section
      id="contact"
      className="w-full bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300"
      aria-label="Contact and book AC service in Coimbatore"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book AC Service in Coimbatore"
          subtitle="Fast, reliable AC repair, installation and maintenance — call or message us for same-day service."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <aside className="rounded-2xl overflow-hidden shadow-lg bg-purple-50 dark:bg-slate-800">
            <div className="w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
              <img
                src="/assets/msk-logo.jpeg"
                alt={`${siteConfig.name} team`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-white">
                Contact {siteConfig.name}
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-md text-cyan-700 dark:text-cyan-200">
                    <FaPhoneAlt size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Phone</div>
                    <a href={telLink()} className="font-medium text-black dark:text-white text-base hover:underline">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-md text-indigo-700 dark:text-indigo-200">
                    <FaMapMarkerAlt size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Location</div>
                    <div className="font-medium text-black dark:text-white text-base">
                      {siteConfig.address.locality}, {siteConfig.address.region}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      AC service near me across all nearby areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-md text-yellow-700 dark:text-yellow-200">
                    <FaEnvelope size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="font-medium text-black dark:text-white text-base hover:underline break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <a
                    href={waLink("Hi MSK Solution, I'd like to book AC service.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg shadow transition-colors"
                  >
                    <FaWhatsapp aria-hidden="true" /> WhatsApp
                  </a>

                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-400 text-white shadow transition-colors"
                    aria-label={`${siteConfig.name} on Instagram`}
                  >
                    <FaInstagram aria-hidden="true" />
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
                    aria-label="Send email"
                  >
                    <SiGmail className="text-xl" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <main className="rounded-2xl p-6 sm:p-8 shadow-lg bg-purple-50 dark:bg-slate-800">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 dark:text-white">
              Book a Service
            </h3>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <Field id={`${uid}-service`} label="Service">
                <select
                  id={`${uid}-service`}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id={`${uid}-name`} label="Full Name" error={errors.name}>
                  <input
                    id={`${uid}-name`}
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                    aria-invalid={Boolean(errors.name)}
                  />
                </Field>

                <Field id={`${uid}-phone`} label="Phone" error={errors.phone}>
                  <input
                    id={`${uid}-phone`}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                    className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                    aria-invalid={Boolean(errors.phone)}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id={`${uid}-email`} label="Email" error={errors.email}>
                  <input
                    id={`${uid}-email`}
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                  />
                </Field>

                <Field id={`${uid}-datetime`} label="Preferred Date & Time" error={errors.datetime}>
                  <input
                    id={`${uid}-datetime`}
                    type="datetime-local"
                    value={form.datetime}
                    onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                    aria-invalid={Boolean(errors.datetime)}
                  />
                </Field>
              </div>

              <Field id={`${uid}-message`} label="Message">
                <textarea
                  id={`${uid}-message`}
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                />
              </Field>

              <div className="flex gap-3 items-start">
                <input
                  id={`${uid}-consent`}
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1"
                  aria-invalid={Boolean(errors.consent)}
                />
                <label htmlFor={`${uid}-consent`} className="text-sm">
                  I agree to be contacted about this booking.
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-600 dark:text-red-400" role="alert">
                  {errors.consent}
                </p>
              )}

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-md shadow font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Send via WhatsApp
                </button>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2.5 rounded-md shadow transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>

              {success && (
                <p className="text-green-700 dark:text-green-400 text-sm mt-2" role="status" aria-live="polite">
                  {success}
                </p>
              )}
            </form>
          </main>
        </div>
      </div>
    </section>
  );
}
