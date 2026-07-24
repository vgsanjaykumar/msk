import React from "react";
import { motion } from "framer-motion";
import {
  FaSnowflake,
  FaFan,
  FaTools,
  FaCheckCircle,
  FaPhoneAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { staggerContainer } from "../common/motionPresets";
import { telLink } from "../../config/site";

const serviceGroups = [
  {
    id: "ac-service",
    title: "AC Service & Repair in Coimbatore",
    subtitle:
      "Split AC and window AC repair, installation, gas filling and AMC — trusted AC technicians across Coimbatore.",
    cards: [
      { icon: FaSnowflake, title: "AC Repair", desc: "Fix low cooling, sensor and thermostat issues fast." },
      { icon: FaFan, title: "AC Gas Filling", desc: "Refrigerant top-up for stronger, efficient cooling." },
      { icon: FaTools, title: "AC Installation", desc: "Professional split & window AC installation." },
      { icon: FaCheckCircle, title: "AC AMC & Cleaning", desc: "Annual maintenance contracts and deep cleaning." },
    ],
  },
  {
    id: "washing-machine-repair",
    title: "Washing Machine Repair Services",
    subtitle: "Drum issues, spin problems, water leakage and installation service.",
    cards: [
      { icon: FaTools, title: "Drum / Spin Issue", desc: "Repair vibration and spin failures." },
      { icon: FaFan, title: "Water Leakage", desc: "Fix inlet, outlet and pipe leakage." },
      { icon: FaTools, title: "Installation", desc: "Top-load & front-load installation." },
      { icon: FaCheckCircle, title: "Deep Cleaning", desc: "Improve washing performance." },
    ],
  },
  {
    id: "refrigerator-service",
    title: "Refrigerator Repair Services",
    subtitle: "Cooling issues, gas filling, compressor and gasket repair.",
    cards: [
      { icon: FaSnowflake, title: "Cooling Issue", desc: "Resolve freezer and cooling problems." },
      { icon: FaFan, title: "Gas Filling", desc: "Gas refill for strong cooling." },
      { icon: FaTools, title: "Compressor Repair", desc: "Fix noise and compressor failure." },
      { icon: FaCheckCircle, title: "Gasket Replacement", desc: "Replace damaged door seals." },
    ],
  },
  {
    id: "tv-repair",
    title: "Television Repair Services",
    subtitle: "LED, LCD & Smart TV display, sound and motherboard repair.",
    cards: [
      { icon: FaSnowflake, title: "Display Issue", desc: "Fix backlight and screen problems." },
      { icon: FaFan, title: "Sound Issue", desc: "Speaker and audio board repair." },
      { icon: FaTools, title: "Motherboard Repair", desc: "Chip-level TV repairs." },
      { icon: FaCheckCircle, title: "TV Installation", desc: "Wall mount & setup service." },
    ],
  },
];

function ServiceGroup({ group, level }) {
  return (
    <section className="px-6 max-w-7xl mx-auto" id={group.id}>
      <SectionHeading title={group.title} subtitle={group.subtitle} level={level} />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {group.cards.map((card) => (
          <ServiceCard key={card.title} {...card} />
        ))}
      </motion.div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-white text-black dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white transition-colors duration-300">
      <div className="py-16 md:py-20 text-center px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="AC & Home Appliance Services in Coimbatore"
          subtitle={
            <>
              {" "}
              MSK Solution offers professional{" "}
              <strong>AC service in Coimbatore</strong> — repair,
              installation, gas filling, maintenance and AMC — along with
              washing machine, refrigerator and TV repair. Trained
              technicians, genuine spare parts and honest pricing across
              every area of Coimbatore.
            </>
          }
          level={2}
          className="mx-auto"
        />
      </div>

      <div className="space-y-20 md:space-y-24 pb-4">
        {serviceGroups.map((group) => (
          <ServiceGroup key={group.id} group={group} level={3} />
        ))}
      </div>

      <div className="text-center py-16 md:py-20 px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={telLink()} variant="primary" icon={FaPhoneAlt}>
            Call Now – AC Service Coimbatore
          </Button>
          <Button href="#contact" variant="outline" icon={FaCalendarCheck}>
            Book a Service
          </Button>
        </div>
      </div>
    </div>
  );
}
