"use client";
import Image from "next/image";
import React, { useState } from "react";
import { imageConstants } from "@/constants/image.constants";
import { navItems } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="flex-between pt-[20px] lg:pt-[40px]  px-4 lg:px-0">
      <Image
        src={imageConstants.logo}
        alt="logo"
        width={114.91}
        height={33.99}
        className="lg:w-[114.91px] lg:h-[33.99px] w-[80px] h-[24px]"
      />

      {/* for mobile menu */}
      <div className="lg:hidden">
        <Image
          src={isMenuOpen ? imageConstants.close : imageConstants.menu}
          alt="menu"
          width={26}
          height={26}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        />
      </div>

      {/* for desktop menu */}
      <div className="hidden lg:flex font-openSans">
        <ul className="flex-center gap-x-12">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="  hover:text-accent underline-offset-4 transition-all duration-300"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-x-12 ml-5 ">
          <button className="hover:text-accent   ml-12 underline-offset-4 transition-all duration-300">
            Login
          </button>
          <button className="border border-slate-700 rounded-md px-4 py-1.5">
            Sign up
          </button>
          <select name="" id="" className="px-4 py-1.5 bg-transparent -ml-8">
            <option value="">EN</option>
            <option value="">ES</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Header;
