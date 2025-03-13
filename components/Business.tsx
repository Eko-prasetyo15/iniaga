import styles, { layout, component } from "@/styles/style";
import { features } from "@/constants";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import { icInterview } from '@/public/assets';
import "swiper/css";
import "swiper/css/pagination";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content }) => (
  <div className="flex items-start gap-3 p-4">
    <Image
      src={icon}
      alt="icon"
      width={50}
      height={50}
      className="object-contain"
    />
    <div>
      <h4 className="font-poppins font-semibold text-black text-lg">{title}</h4>
      <p className="font-poppins text-gray-500 text-sm mt-1 whitespace-normal break-words">
        {content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className="py-12 mt-14">
    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
      
      {/* Gambar di Kiri */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src={icInterview}
          alt="icon"
          width={300}
          height={300}
          className="object-contain w-full xs:w-[70%] md:w-full"
        />
      </div>

      {/* Bagian Kanan */}
      <div className="w-auto md:w-1/2 text-left">
        <p className={component.titleAccent}>Features</p>
        <h2 className={`${styles.heading2}`}>
          Anda fokus pada product, <br className="hidden sm:block" />
          Kami urus semuanya.
        </h2>

        <p className={`${styles.paragraph} mt-5 whitespace-normal break-words text-[#656769]`}>
          Kami menyediakan semua tools yang dibutuhkan untuk mendongkrak penjualan Anda dan memperluas jaringan agen.
        </p>

        {/* Grid untuk Desktop */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          {features.map((feature, index) => (
            <FeaturesCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Slider untuk Mobile */}
        {/* <div className="block md:hidden mt-6">
          <Swiper spaceBetween={20} slidesPerView={1.2} pagination={{ clickable: true }}>
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <FeaturesCard {...feature} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  </section>
);

export default Business;
