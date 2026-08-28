import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { fadeUp, viewportOnce } from "../common/motionPresets";

const brands = [
  "sony", "blue-star", "Panasonic", "xiaomi", "Samsung", "Bosch",
  "Daikin", "Godrej", "Haier", "Lg", "Onida", "Toshiba",
  "Voltas", "Whirlpool", "Hitachi", "Midea", "Mitsubishi", "o-general",
];

export default function BrandsSwiper() {
  return (
    <section className="w-full py-8 md:py-10 transition-colors duration-300 bg-white dark:bg-slate-900" aria-label="Brands we service">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-cyan-400">
            AC & Appliance Brands We Service
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          className="py-4"
          aria-label="Brand carousel"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand} className="flex items-center justify-center">
              <div
                className="flex items-center justify-center px-4 py-6 rounded-md bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-transform duration-300 transform-gpu hover:-translate-y-1"
                style={{ width: "100%", maxWidth: 320 }}
              >
                <img
                  src={`/brands/${brand}.png`}
                  alt={`${brand.replace(/-/g, " ")} AC service`}
                  className="w-auto max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-20 object-contain transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
