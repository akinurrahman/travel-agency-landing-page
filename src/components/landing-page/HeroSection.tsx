"use client";
import { imageConstants } from "@/constants/image.constants";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:flex-center lg:flex-row mt-10 lg:mt-5">
      {/* Left Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of the section is visible
      >
        <motion.h2
          className="text-accent md:font-bold text-sm lg:text-xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          BEST DESTINATIONS AROUND THE WORLD
        </motion.h2>
        <motion.p
          className="text-primary font-volkhov text-[45px] md:text-[84px] lg:text-[84px] mb-5 flex flex-col leading-[50px] md:leading-[89px] lg:leading-[89px] font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="text-nowrap ">
            Travel{" "}
            <span className="relative">
              , enjoy
              <Image
                src={imageConstants.textUnderline}
                alt="underline"
                width={350}
                height={66}
                className="absolute -right-4 -bottom-4 lg:-right-16 lg:-bottom-5 lg:w-[450px] lg:h-[66px] w-[200px] h-[40px]"
              />
            </span>
          </span>
          <span className="text-nowrap">and live a new</span>
          <span className="text-nowrap">and full life</span>
        </motion.p>
        <motion.p
          className="text-muted text-xs lg:text-base leading-[20px] lg:leading-[30px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </motion.p>
        <motion.div
          className="mt-[34px] flex items-center gap-[20px] lg:gap-[44px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="px-4 py-2 lg:px-6 lg:py-3 bg-yellow-500 text-white rounded-md text-sm lg:text-base">
            Find out more
          </button>
          <button className="flex items-center gap-2">
            <div className="h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] bg-accent rounded-full flex-center">
              <Image
                src={imageConstants.play}
                alt="play"
                width={15}
                height={15}
                className="size-2 lg:size-[15px]"
              />
            </div>
            <span className="text-muted font-medium lg:ml-[21px]">
              Play Demo
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="lg:w-1/2 mt-[40px] lg:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src={imageConstants.heroImg}
          alt="hero"
          width={765}
          height={764}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
