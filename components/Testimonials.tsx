"use client";

import { feedback } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials: React.FC = () => (
  <section className="mb-14 px-4 sm:px-10">
    {/* Title & Subtitle */}
    <div className="flex flex-col items-center text-center">
      <h1 className="text-white text-3xl font-semibold">Testimonies</h1>
      <p className="text-gray-400 text-sm mt-2 max-w-lg">
        What our customers are saying about us
      </p>
    </div>

    {/* Navigation Buttons */}
    {/* <div className="flex justify-center gap-4 mt-4">
      <button
        className="swiper-button-prev bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md z-10"
      >
        ←
      </button>
      <button
        className="swiper-button-next bg-blue-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md z-10"
      >
        →
      </button>
    </div> */}

    {/* Swiper Container */}
    <div className="relative mt-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="pb-10"
      >
        {feedback.map((testi, index) => (
          <SwiperSlide key={index} className="flex flex-col bg-gray-900 rounded-lg p-4 shadow-lg">
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={testi.img}
                alt={testi.title}
                width={600}
                height={350}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-blue-400">{testi.title}</p>
              <h3 className="text-lg text-white font-semibold mt-1">
                {testi.content}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {testi.name} • {testi.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
