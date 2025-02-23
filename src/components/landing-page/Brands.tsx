"use client";

import { motion } from "framer-motion";
import { brands } from "@/constants";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex gap-4 justify-center md:justify-between items-center max-w-[1250px] mx-auto px-4 -mt-10 lg:mt-0"
    >
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: false }}
        >
          <Image
            src={brand}
            alt={`brand-${index}`}
            width={200}
            height={150}
            className="w-[50px] md:w-[200px] object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Brands;
