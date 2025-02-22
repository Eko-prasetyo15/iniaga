"use client";
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
} from "@/components";
import { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2025/ID")
      .then((response) => response.json())
      .then((data) => console.log(data)) // Menampilkan daftar hari libur
      .catch((error) => console.error("Error:", error));
  });
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            {/* <CardDeal /> */}
            <PriceList />
            {/* <RegisterForm /> */}
            <Testimonials />
            {/* <Clients /> */}
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
