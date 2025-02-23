"use client";

import { imageConstants } from "@/constants/image.constants";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mt-24 pb-5"
        >
            <div className="flex flex-col md:flex-row justify-between">
                {/* Brand Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-primary font-bold text-[44px]">Jadoo.</h2>
                    <p className="text-muted text-xs md:w-[60%]">
                        Book your trip in minute, get full Control for much longer.
                    </p>
                </motion.div>

                {/* Company Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <h2 className="font-bold text-[21px] text-[#080809]">Company</h2>
                    <ul className="text-muted text-lg mt-5">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <h2 className="font-bold text-[21px] text-[#080809]">Contact</h2>
                    <ul className="text-muted text-lg mt-5">
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                    </ul>
                </motion.div>

                {/* More Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    <h2 className="font-bold text-[21px] text-[#080809]">More</h2>
                    <ul className="text-muted text-lg mt-5">
                        <li>Airline fees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                    </ul>
                </motion.div>

                {/* Social & App Store */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <div className="flex gap-4">
                        <Image src={imageConstants.facebook} alt="facebook" />
                        <Image src={imageConstants.instagram} alt="instagram" />
                        <Image src={imageConstants.twitter} alt="twitter" />
                    </div>
                    <p className="text-muted text-xl mt-5">Discover our App</p>
                    <div className="flex gap-4 mt-5">
                        <Image src={imageConstants.appStore} alt="app-store" />
                        <Image src={imageConstants.googlePlay} alt="google-play" />
                    </div>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: false }}
                className="text-muted text-sm mt-16 text-center"
            >
                All rights reserved @jadoo.com
            </motion.p>
        </motion.section>
    );
};

export default Footer;
