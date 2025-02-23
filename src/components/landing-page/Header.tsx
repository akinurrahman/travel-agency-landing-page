"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { imageConstants } from "@/constants/image.constants";
import { navItems } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex-between pt-5 lg:pt-10 px-4 lg:px-0"
    >
      {/* Logo */}
      <Image
        src={imageConstants.logo}
        alt="logo"
        width={115}
        height={34}
        className="lg:w-[114.91px] lg:h-[33.99px] w-[80px] h-[24px]"
      />

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Image
          src={isMenuOpen ? imageConstants.close : imageConstants.menu}
          alt="menu"
          width={26}
          height={26}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex font-openSans">
        <ul className="flex-center gap-x-12">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="hover:text-accent underline-offset-4 transition-all duration-300"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-x-12 ml-5">
          <button className="hover:text-accent ml-12 underline-offset-4 transition-all duration-300">
            Login
          </button>
          <button className="border border-slate-700 rounded-md px-4 py-1.5">
            Sign up
          </button>
          <select name="language" className="px-4 py-1.5 bg-transparent -ml-8">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full bg-white shadow-md py-6 px-5 z-50"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={imageConstants.logo}
                  alt="logo"
                  width={100}
                  height={30}
                />
                <Image
                  src={imageConstants.close}
                  alt="close menu"
                  width={24}
                  height={24}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer"
                />
              </div>

              <ul className="mt-8 space-y-6 text-lg font-semibold text-gray-800">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 hover:text-accent transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4">
                <button className="w-full py-2 text-center border rounded-md">
                  Login
                </button>
                <button className="w-full py-2 text-center bg-gray-900 text-white rounded-md">
                  Sign up
                </button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
