"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles, { component } from "@styles/style";
import { close, logoDark, logo1, menu } from "@/public/assets";
import { navLinks } from "@/constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <Image src={logo1} priority alt="Iniaga" width={134} height={40} />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:flex">
        <Link
          href="/register"
          className={`ss:w-full ${component.btnPrimary}`}
        >
          Register
        </Link>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button className="rounded-xl p-4 bg-[#247bfe]" onClick={() => setToggle((prev) => !prev)}>
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain"
            width={28}
            height={28}
          />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="#pricingPlant"
                className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-white hover:text-black transition"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
