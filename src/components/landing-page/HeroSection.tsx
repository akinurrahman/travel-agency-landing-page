import { imageConstants } from "@/constants/image.constants";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <section className="lg:flex-center  lg:flex-row mt-10 lg:mt-5 ">
            <div className="lg:w-1/2">
                <h2 className="text-accent md:font-bold text-sm lg:text-xl mb-6">BEST DESTINATIONS AROUOND THE WORLD </h2>
                <p className="text-primary font-volkhov text-[45px] md:text-[84px] lg:text-[84px] mb-5 flex flex-col leading-[50px] md:leading-[89px] lg:leading-[89px] font-bold">
                    <span className="text-nowrap relative">Travel, enjoy <Image src={imageConstants.textUnderline} alt="underline" width={350} height={66} className="absolute -right-4  -bottom-4 lg:-right-16 lg:-bottom-5 lg:w-[350px] lg:h-[66px] w-[200px] h-[40px]" /></span>
                    <span className="text-nowrap">and live a new</span>
                    <span className="text-nowrap">and full life</span>
                </p>
                <p className="text-muted text-xs lg:text-base leading-[20px] lg:leading-[30px] ">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="mt-[34px] flex items-center gap-[20px] lg:gap-[44px]">
                    <button className="px-4 py-2 lg:px-6 lg:py-3 bg-yellow-500 text-white rounded-md text-sm lg:text-base">Find out more</button>
                    <button className="flex items-center gap-2">
                        <div className="h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] bg-accent rounded-full flex-center">
                            <Image src={imageConstants.play} alt="play" width={15} height={15} className="size-2 lg:size-[15px]" />
                        </div>
                        <span className="text-muted font-medium lg:ml-[21px]">Play Demo</span>
                    </button>
                </div>
            </div>
            <div className="lg:w-1/2 mt-[40px] lg:mt-0">
                <Image src={imageConstants.heroImg} alt="hero" width={765} height={764} />
            </div>
        </section>
    );
};

export default HeroSection;
