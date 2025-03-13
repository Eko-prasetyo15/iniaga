"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles, { component } from "@/styles/style";
import { icScreen1, icScreen2, icScreen3, icArrowRight } from "@/public/assets";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="text-center sm:pt-16 pt-6">
      {/* Header Text */}
      <div className="flex-1 flex flex-col items-center xl:px-0 sm:px-16 px-6">
        <div className="w-full max-w-3xl">
          <h1 className="font-poppins font-semibold text-[35px] sm:text-[50px] lg:text-[65px] text-white leading-tight">
            Penjualan Optimal <br className="hidden sm:block" />
            <span className="text-[#247bfe]">Teknologi</span> Masa Kini
          </h1>
          <p className={`${styles.paragraph1} mt-5 text-base sm:text-lg break-words`}>
            Tim ahli kami siap membantu Anda menemukan aplikasi penjualan terbaik
            sesuai kebutuhan bisnis.
            <br className="hidden sm:block" />
            Dengan analisis fitur, biaya, dan manfaat, kami memastikan solusi
            optimal untuk meningkatkan performa dan produktivitas tim Anda.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-10 sm:px-0 px-6">
        <Link
          href="#pricingPlant"
          className={`px-6 py-3 sm:px-8 sm:py-4 ${component.btnPrimary} flex items-center justify-center gap-2 group`}
        >
          <span className="leading-[32px]">Registration</span>
          <Image
            src={icArrowRight}
            alt="arrow"
            className="w-[20px] h-auto transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#wrapperContent"
          className={`px-6 py-3 sm:px-8 sm:py-4 ${component.btnSecondary} text-center`}
        >
          Learn More
        </Link>
      </div>

      {/* Images */}
      <div className="flex-1 flex justify-center items-center mt-12 sm:mt-[93px] relative px-6">
        {/* Left Floating Image */}
        <Image
          src={icScreen2}
          alt="screen2"
          className="w-[25%] sm:w-[20%] lg:w-[18%] h-auto rounded-xl absolute z-10 left-4 sm:left-12 shadow-sm transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />

        {/* Center Main Image */}
        <Image
          src={icScreen1}
          alt="screen1"
          className="w-[90%] sm:w-[70%] lg:w-[60%] h-auto rounded-xl relative"
        />

        {/* Right Floating Image */}
        <Image
          src={icScreen3}
          alt="screen3"
          className="w-[25%] sm:w-[20%] lg:w-[18%] h-auto rounded-xl absolute z-10 right-4 sm:right-12 shadow-sm transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>
    </section>
  );
};

export default Hero;
