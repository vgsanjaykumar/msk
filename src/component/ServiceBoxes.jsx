import React from "react";
import { motion } from "framer-motion";

export default function ServiceBoxes() {
  const services = [
    {
      title: "Washing Machine",
      img: "/assets/servies/washing.png",
      desc: "Expert washing machine service to keep your appliance running smoothly.",
      phone: "6374439209",
    },
    {
      title: "Refrigerator",
      img: "/assets/servies/Refrigerator.png",
      desc: "Fast refrigerator repair and servicing for better cooling efficiency.",
      phone: "6374439209",
    },
    {
      title: "Air Conditioner",
      img: "/assets/servies/ac.png",
      desc: "AC repair, installation, gas filling, and deep cleaning service.",
      phone: "6374439209",
    },
    {
      title: "Television",
      img: "/assets/servies/tv.png",
      desc: "LED, LCD, and Smart TV repair with genuine parts.",
      phone: "6374439209",
    },
    {
      title: "Microwave Oven",
      img: "/assets/servies/Microwave Oven.png",
      desc: "Microwave heating issues, sparking, and circuit repair.",
      phone: "6374439209",
    },
    {
      title: "Water Heater",
      img: "/assets/servies/water.png",
      desc: "Geyser repair, heating element change, and installation.",
      phone: "6374439209",
    },
    {
      title: "CCTV Installation",
      img: "/assets/servies/cctv.png",
      desc: "Home & office CCTV setup, wiring, and maintenance.",
      phone: "6374439209",
    },
    {
      title: "Speaker Repair",
      img: "/assets/servies/speaker.png",
      desc: "Home theater, Bluetooth, tower speaker & woofer repair services.",
      phone: "6374439209",
    },
  ];

  // Animation
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section className="
      w-full 
      bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 
      py-16 transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold 
          text-black dark:text-white mb-12">
          Our Home Appliance Services
        </h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          {services.map((item, index) => (
            <motion.article
              key={index}
              variants={card}
              className="
                rounded-xl p-8 shadow-lg transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]

                bg-white text-black
                dark:bg-slate-900 dark:text-gray-200
              "
            >
              <div className="flex flex-col items-center text-center">

                {/* Image */}
                <div className="
                  w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 
                  rounded-full overflow-hidden shadow-md bg-white 
                  group transition-all duration-500
                ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-full object-cover 
                      transition-transform duration-500 group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg sm:text-xl md:text-2xl dark:text-white font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base max-w-md text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>

                {/* Call Button */}
                <a
                  href={`tel:+91${item.phone}`}
                  className="
                    mt-6 inline-flex items-center gap-3 
                    bg-gradient-to-b from-purple-600 to-purple-900
                    dark:from-cyan-400 dark:to-cyan-600
                    text-white  font-semibold 
                    px-6 py-3 rounded-full shadow-lg 
                    hover:scale-[1.05] transition-transform
                  "
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h2l.4 2M7 7h10l1 5-1 6H6l-1-5 1-6z"
                    />
                  </svg>
                  {item.phone}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
