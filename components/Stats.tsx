"use client";
import { stats } from "@/constants";

const Stats: React.FC = () => (
  <section className="py-4 sm:py-10 border-b border-b-[#cbcbcb]">
    <div className="hidden sm:flex flex-wrap justify-center gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center gap-3">
          <h4 className="font-poppins font-semibold text-[30px] sm:text-[40px] text-black leading-[43px] sm:leading-[53px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-[15px] sm:text-[18px] text-gray-500 uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </div>

    <div className="block sm:hidden overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee flex space-x-4 min-w-max">
        {stats.concat(stats).map((stat, index) => (
          <div key={index} className="flex items-center gap-2 mx-3">
            <h4 className="font-poppins font-semibold text-[30px] leading-[43px] text-black">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal text-[15px] leading-[21px] text-gray-500 uppercase">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>

    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-43%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 8s linear infinite;
      }
    `}</style>
  </section>
);

export default Stats;
