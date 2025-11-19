// src/components/BrandSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";


export default function BrandSwiper({ logos = [] }) {
    const sample = logos.length
        ? logos
        : [
            

            // add your brand images (public /assets paths)
            "/brands/sony.png",
            "/brands/Bule Star.png",
            "/brands/Panasonic.png",
            "/brands/xiaomi.png",
            "/brands/Samsung.png",
            "/brands/Bosch.png",
            "/brands/Daikin.png",
            "/brands/Godrej.png",
            "/brands/Haier.png",
            "/brands/Lg.png",
            "/brands/Onida.png",
            "/brands/Toshiba.png",
            "/brands/Voltas.png",
            "/brands/Whirlpool.png",
            "/brands/Hitachi.png",
            "/brands/Midea.png",
            "/brands/Mitsubishi.png",
            "/brands/O general.png",
        ];

    return (
        <div className="w-full py-6 transition-colors duration-300 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                        Brands We Give Service
                    </h3>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2200, disableOnInteraction: false }}
                    loop={true}
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
                    aria-label="brand carousel"
                >
                    {sample.map((src, i) => (
                        <SwiperSlide key={i} className="flex items-center justify-center">
                            <div
                                className="flex items-center justify-center px-4 py-6 rounded-md
                           bg-white/60 dark:bg-slate-800/60 border border-gray-100 dark:border-white/5
                           shadow-sm hover:shadow-md transition-transform duration-300
                           transform-gpu hover:-translate-y-1"
                                style={{ width: "100%", maxWidth: 320 }}
                            >
                                <img
                                    src={src}
                                    alt={`brand-${i}`}
                                    className="
                    w-auto
                    max-h-10
                    sm:max-h-12
                    md:max-h-16
                    lg:max-h-20
                    object-contain
                    transition-all duration-300
                  "
                                    onError={(e) => {
                                        // fallback to simpler placeholder in case brand not found
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/assets/placeholder.png";
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
