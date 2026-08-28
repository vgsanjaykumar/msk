import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import useReducedMotion from "../common/useReducedMotion";
import { siteConfig, waLink } from "../../config/site";

const SERVICE_OPTIONS = [
  "Repair",
  "Installation",
  "Maintenance / AMC",
  "Gas Filling / Refill",
  "Deep Cleaning",
  "Other",
];

const APPLIANCE_OPTIONS = [
  "Air Conditioner",
  "Washing Machine",
  "Refrigerator",
  "Television",
  "Water Heater",
  "Microwave Oven",
  "Speaker",
  "Air Cooler",
];

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-black dark:text-white">
        {label}
        {required && <span className="text-red-600 dark:text-red-400"> *</span>}
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

const inputClasses =
  "mt-1 w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-2 text-black dark:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 focus:shadow-[0_0_0_4px_rgba(147,51,234,0.15)] dark:focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]";

const initialState = {
  name: "",
  phone: "",
  service: SERVICE_OPTIONS[0],
  appliance: APPLIANCE_OPTIONS[0],
  date: "",
  time: "",
  location: "",
  problem: "",
};

/**
 * Booking form for the dedicated /book-service page. This is frontend-only:
 * there is no backend to submit to, so a successful submission opens
 * WhatsApp with the booking details pre-filled rather than pretending the
 * request was sent to a server (see project brief, rule 24).
 */
export default function BookingForm() {
  const uid = useId();
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone number";
    if (!form.date) e.date = "Choose a preferred date";
    if (!form.time) e.time = "Choose a preferred time";
    if (!form.location.trim()) e.location = "Please enter your area / address";
    if (!form.problem.trim()) e.problem = "Please describe the problem briefly";
    return e;
  }

  function buildWhatsAppMessage() {
    const lines = [
      `🛠️ New Booking Request — ${siteConfig.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Appliance: ${form.appliance}`,
      `Service Needed: ${form.service}`,
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      `Location: ${form.location}`,
      `Problem: ${form.problem}`,
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
      setStatus("idle");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      window.open(waLink(buildWhatsAppMessage()), "_blank", "noopener,noreferrer");
      setStatus("success");
      setForm(initialState);
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id={`${uid}-name`} label="Full Name" error={errors.name} required>
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field id={`${uid}-phone`} label="Phone Number" error={errors.phone} required>
          <input
            id={`${uid}-phone`}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id={`${uid}-appliance`} label="Appliance" required>
          <select
            id={`${uid}-appliance`}
            value={form.appliance}
            onChange={(e) => setForm({ ...form, appliance: e.target.value })}
            className={inputClasses}
          >
            {APPLIANCE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>

        <Field id={`${uid}-service`} label="Service Needed" required>
          <select
            id={`${uid}-service`}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClasses}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id={`${uid}-date`} label="Preferred Date" error={errors.date} required>
          <input
            id={`${uid}-date`}
            type="date"
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={inputClasses}
            aria-invalid={Boolean(errors.date)}
          />
        </Field>

        <Field id={`${uid}-time`} label="Preferred Time" error={errors.time} required>
          <input
            id={`${uid}-time`}
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className={inputClasses}
            aria-invalid={Boolean(errors.time)}
          />
        </Field>
      </div>

      <Field id={`${uid}-location`} label="Location / Area in Coimbatore" error={errors.location} required>
        <input
          id={`${uid}-location`}
          type="text"
          placeholder="e.g. Gandhipuram, Coimbatore"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className={inputClasses}
          aria-invalid={Boolean(errors.location)}
        />
      </Field>

      <Field id={`${uid}-problem`} label="Problem Description" error={errors.problem} required>
        <textarea
          id={`${uid}-problem`}
          rows="4"
          placeholder="Briefly describe the issue you're facing"
          value={form.problem}
          onChange={(e) => setForm({ ...form, problem: e.target.value })}
          className={inputClasses}
          aria-invalid={Boolean(errors.problem)}
        />
      </Field>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={prefersReducedMotion || status === "loading" ? undefined : { scale: 1.03 }}
        whileTap={prefersReducedMotion || status === "loading" ? undefined : { scale: 0.97 }}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md shadow font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <FaWhatsapp aria-hidden="true" />
        {status === "loading" ? "Preparing your booking…" : "Book via WhatsApp"}
      </motion.button>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        This form opens WhatsApp with your booking details so our team can confirm directly with you — we don't submit bookings automatically.
      </p>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-2 text-green-700 dark:text-green-400 text-sm"
            role="status"
            aria-live="polite"
          >
            <FaCheckCircle aria-hidden="true" />
            WhatsApp opened with your booking details!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
