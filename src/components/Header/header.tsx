import React from "react";
import Image from "next/image";
import { logo, logoLight } from "@/utils";
import { useTheme } from "next-themes";
import { Input } from "../ui/InputBox";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Discover from "./Discover";
import HelpCenter from "./HelpCenter";


import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed px-20 py-8 w-full h-24 md:h-40  z-9  bg-black  flex items-center justify-between  ">
      <div className="flex items-center flex-shrink gap-10 xl:gap-14 ">
        <Link href="/">
          {theme == "dark" ? (
            <Image src={logoLight} width={130} height={50} alt="logo.png" />
          ) : (
            <Image src={logo} width={130} height={50} alt="logo.png" />
          )}
        </Link>
        <div className="relative mt-2">
          <Input
            type="text"
            placeholder="Search NFT"
            className=" pl-4 pr-10 py-3 bg-transparent rounded-2xl border-2 border-opacity-15 border-[#ddd9d9] cursor-pointer"
          />
          <div className="absolute right-2 top-3">
            <HiOutlineMagnifyingGlass className="text-xl text-[#ddd9d9] opacity-55"/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around ">
          <div><Discover/></div>
          <div><HelpCenter/></div>
     
      </div>
    </div>
  );
};

export default Header;
