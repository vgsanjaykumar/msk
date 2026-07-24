import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSnowflake,
  FaTv,
  FaWater,
  FaFan,
  FaThermometerHalf,
  FaMicrochip,
  FaVolumeUp,
  FaCloud,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";

const items = [
  { id: "ac", title: "Air Conditioner", desc: "AC repair, installation, gas filling and deep cleaning.", icon: FaFan, image: "/assets/services/ac.png" },
  { id: "washing", title: "Washing Machine", desc: "Drum issues, leakage fixing, PCB repair and installation.", icon: FaWater, image: "/assets/services/washing-machine.png" },
  { id: "tv", title: "Television", desc: "LED, LCD & Smart TV repair, display and motherboard service.", icon: FaTv, image: "/assets/services/tv.png" },
  { id: "fridge", title: "Refrigerator", desc: "Cooling issues, compressor repair, gas refill service.", icon: FaSnowflake, image: "/assets/services/refrigerator.png" },
  { id: "heater", title: "Water Heater", desc: "Geyser repair, heating element replacement and installation.", icon: FaThermometerHalf, image: "/assets/services/water-heater.png" },
  { id: "microwave", title: "Microwave Oven", desc: "Heating issues, sparking, and control panel repair.", icon: FaMicrochip, image: "/assets/services/microwave-oven.png" },
  { id: "speaker", title: "Speaker Repair", desc: "Home theater, Bluetooth, tower speaker & woofer repair.", icon: FaVolumeUp, image: "/assets/services/speaker.png" },
  { id: "aircooler", title: "Air Cooler", desc: "Air cooler servicing, pump & fan repair, and cleaning.", icon: FaCloud, image: "/assets/services/air-cooler.png" },
];

function FocusButton({ item, active, onSelect }) {
  const isActive = active === item.id;
  return (
    <button
      onClick={() => onSelect(item.id)}
      className={`w-full text-left rounded-xl p-4 flex gap-4 items-center shadow-sm transition-all duration-300 bg-white dark:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${
        isActive
          ? "ring-2 ring-purple-400 dark:ring-cyan-400 shadow-lg scale-[1.02]"
          : "hover:-translate-y-0.5 hover:shadow-md"
      }`}
      aria-pressed={isActive}
    >
      <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 shrink-0 text-purple-600 dark:text-cyan-400">
        <item.icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
    </button>
  );
}

export default function FocusGrid() {
  const [active, setActive] = useState("ac");
  const activeItem = items.find((i) => i.id === active);

  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Focus"
          title="Home Appliance Services in Coimbatore"
          subtitle="From AC to washing machine, refrigerator, TV and microwave — we service all major brands and models."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-4">
            {items.slice(0, 4).map((item) => (
              <FocusButton key={item.id} item={item} active={active} onSelect={setActive} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-800 p-4 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={activeItem.image}
                  alt={`${activeItem.title} repair service by MSK Solution`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                  className="w-full h-64 sm:h-72 object-cover rounded-xl bg-gray-100"
                />
              </AnimatePresence>

              <div className="mt-4 text-center" aria-live="polite">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl mx-auto">
                  {activeItem.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {items.slice(4).map((item) => (
              <FocusButton key={item.id} item={item} active={active} onSelect={setActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
