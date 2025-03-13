"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  RegisterForm,
  Testimonials,
  Clients,
  CTA,
  Footer,
  PriceList,
  Copyright,
} from "@/components";

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#171717] bg-[url(https://cdn.prod.website-files.com/62953ab463d9335a094b424b/62962ca34836cd068a0e950a_bg-grid-techkit-template.svg)]">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "bg-[#171717]" : "transparent"
        }`}
      >
        <div className={`${styles.paddingX} ${styles.marginXauto} ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className="bg-white rounded-[50px] pt-14 ss:pt-[50px]">
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
          </div>
        </div>
      </div>
      <div
        id="wrapperContent"
        className={`${styles.flexStart} pt-14`}
      >
        <div className={`${styles.boxWidth}`}>
          {/* <Billing /> */}
          {/* <CardDeal /> */}
          <Testimonials />
          <PriceList />
          {/* <RegisterForm /> */}
          {/* <Clients /> */}
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart} mb-14`}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
      <Footer />
      {/* <Copyright /> */}
    </div>
  );
};

export default Home;
