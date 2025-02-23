"use client";

import { motion } from "motion/react";
import { processSteps } from "@/constants";
import { imageConstants } from "@/constants/image.constants";
import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row gap-10 px-4 lg:px-10 mt-20 items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className="md:w-1/2"
      >
        <h2 className="text-muted text-xs font-semibold lg:text-lg tracking-wider">
          Easy and Fast
        </h2>
        <p className="text-primary font-bold text-2xl lg:text-[50px] font-volkhov leading-tight mt-5 flex flex-col capitalize">
          <span>Book your next trip</span>
          <span>in 3 easy steps</span>
        </p>
        <div className="mt-8 flex flex-col gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="flex items-center gap-5"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-contain"
              />
              <div>
                <h3 className="text-muted font-bold">{step.title}</h3>
                <p className="text-muted text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
        className="md:w-1/2"
      >
        <Image
          src={imageConstants.processHeroImg}
          alt="process-hero-img"
          width={485}
          height={459}
          className="-mt-10 w-[600px] h-[450px] md:w-[485px] md:h-[459px] object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Process;
