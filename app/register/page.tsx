"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/style";
import { RegisterForm, Navbar, Footer } from "@/components";


const RegisterAcc: React.FC = () => {
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
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAcc;
