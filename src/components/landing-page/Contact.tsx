"use client";

import { imageConstants } from "@/constants/image.constants";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative bg-[#f9f7fe] rounded-tl-[80px] p-6 md:p-10 mt-10"
        >
            {/* Background Overlays */}
            <Image
                src={imageConstants.contactOverlayLeft}
                alt="contact-overlay-left"
                className="absolute -left-24 bottom-0"
            />
            <Image
                src={imageConstants.contactOverlayRight}
                alt="contact-overlay-right"
                className="absolute top-0 right-0"
            />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-muted text-center md:text-[33px] md:leading-[54px] font-semibold pt-[79px] px-4 pb-[74px] md:w-4/5 mx-auto text-sm"
            >
                Subscribe to get information, latest news and other interesting offers about Jadoo
            </motion.h2>

            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: false }}
                className="flex justify-center gap-4 px-6 md:px-0 pb-6"
            >
                {/* Input Field */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false }}
                    className="flex relative"
                >
                    <input
                        type="text"
                        className="w-full md:min-w-[421px] h-[50px] rounded-md border border-[#DFD7F9] bg-white px-4 md:px-14 text-muted text-sm font-medium"
                        placeholder="Enter your email"
                    />
                    <Image
                        src={imageConstants.mail}
                        alt="mail"
                        className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2"
                    />
                </motion.div>

                {/* Subscribe Button */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white px-4 md:px-10  rounded-md"
                >
                    Subscribe
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
