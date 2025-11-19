import React from "react";
import { motion } from "framer-motion";

export default function ServiceBoxes() {
  const services = [
    {
      title: "Air Conditioner",
      img: "/assets/servies/ac.png",
      desc: "AC repair, installation, gas filling, and deep cleaning service.",
      phone: "6374439209",
    },
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

  // Framer Motion variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10 } },
  };

  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // fallback image (local uploaded file) — used only if a service image fails to load
  const fallbackImg = "/mnt/data/9d05590e-fa84-4308-9336-9cd5fa2816e7.png";

  return (
    <section
      className="
        w-full 
        bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 
        py-12 sm:py-16 transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold 
          text-black dark:text-white mb-8 sm:mb-12">
          Our Home Appliance Services
        </h2>

        {/* Grid: 1 col on xs, 2 on md, 4 on lg */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
        >
          {services.map((item, index) => (
            <motion.article
              key={index}
              variants={card}
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="
                rounded-xl p-6 sm:p-8 shadow-md transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]

                bg-white text-black
                dark:bg-slate-900 dark:text-gray-200
                flex flex-col items-center text-center
              "
              aria-labelledby={`svc-title-${index}`}
            >
              {/* responsive circle image: smaller on xs */}
              <div className="
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                rounded-full overflow-hidden shadow-md bg-white
                flex-shrink-0
              ">
                <img
                  src={item.img}
                  alt={item.title}
                  onError={(e) => {
                    // fallback to local uploaded image if main image fails to load
                    if (e.target && e.target.src !== fallbackImg) e.target.src = fallbackImg;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <h3
                id={`svc-title-${index}`}
                className="mt-4 text-base sm:text-lg md:text-xl font-semibold"
              >
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-[20rem] sm:max-w-xs md:max-w-sm">
                {item.desc}
              </p>

              {/* <a
                href={`tel:+91${item.phone}`}
                className="
                  mt-5 inline-flex items-center gap-2 
                  bg-gradient-to-b from-purple-600 to-purple-800 
                  dark:from-cyan-400 dark:to-cyan-600
                  text-white font-semibold px-4 sm:px-6 py-2 rounded-full shadow
                  hover:scale-[1.03] transition-transform
                "
                aria-label={`Call ${item.title}`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 7h10l1 5-1 6H6l-1-5 1-6z" />
                </svg>
                <span className="text-sm sm:text-base">{item.phone}</span>
              </a> */}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
