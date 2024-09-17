import { hero } from "@/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import CustomBtn from "../CustomBtn";

const Hero = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      console.log(`Window width: ${windowWidth}`);
    });
  });
  return (
    <div className=" w-full mb-20 h-screen md:h-[85vh]  flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-full md:w-[75%] dark:text-white text-black gap-6 flex flex-col items-start justify-center">
        <h1 className="text-[30px]  w-full  md:w-[60%] md:text-[40px] lg:text-[50px] xl:text-[64px] font-extrabold">
          Discover, collect, and sell NFTs 🖼️
        </h1>
        <p className="opacity-75">
          Discover the most outstanding NTFs in all topics of life. Creative
          your NTFs and sell them
        </p>
        <CustomBtn
          text="Start Your Search"
          type="button"
          otherCss="px-4 py-2 bg-blue"
          icon={<HiMiniMagnifyingGlass />}
        />
      </div>
      <div className=" max-smPro:w-[300px] max-smPro:h-[300px] flex items-center justify-center xl:pr-5">
        <div className="relative w-[350px] h-[350px]   sm:w-[450px] sm:h-[450px]  lg:w-[500px]  xl:w-[600px] xl:h-[600px] lg:h-[500px]">
          <Image
            src={hero}
            alt="hero"
            layout="fill"
            className="absolute object-fill pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
