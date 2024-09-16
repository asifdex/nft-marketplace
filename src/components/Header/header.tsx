import React, { useState } from "react";
import { logo, logoLight, user1 } from "@/utils";
import { useTheme } from "next-themes";
import { Input } from "../ui/InputBox";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import DropMenuBtn from "./DropMenuBtn";
import { Moon, Sun } from "lucide-react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';

import {
  DiscoverLists,
  HelpcenterLists,
  ProfileLists,
} from "@/config/HeaderLists";
import CustomBtn from "../CustomBtn";
import MobileMenu from "../MobileMenu";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed px-5  md:px-10 lg:px-15 xl:px-20 py-8 w-full h-24 md:h-40  z-9 opacity-85 shadow-lg dark:bg-black bg-white  flex items-center justify-between  ">
      <div className="flex items-center flex-grow  gap-4 xl:gap-14 ">
        <Link href="/">
          {theme == "dark" ? (
            <img
              src={logoLight}
              width={120}
              height={50}
              alt="logo.png"
              className="object-contain"
            />
          ) : (
            <img
              src={logo}
              width={120}
              height={50}
              alt="logo.png"
              className="object-contain"
            />
          )}
        </Link>
        <div className="hidden lg:flex relative mt-2">
          <Input
            type="text"
            placeholder="Search NFT"
            className="pl-4 pr-10 py-3 bg-transparent rounded-2xl border-2 border-opacity-15 border-[#ddd9d9] cursor-pointer
      md:text-base md:py-3 sm:text-sm sm:py-2"
          />
          <div className="absolute right-2 top-3 sm:right-1 sm:top-2">
            <HiOutlineMagnifyingGlass className="text-xl text-[#ddd9d9] opacity-55 sm:text-lg" />
          </div>
        </div>
      </div>

      <div className="w-[60%] md:w-[70%] xl:w-3/4 2xl:w-1/2 flex items-center justify-around">
        <div className="hidden md:flex ">
          <DropMenuBtn
            text="Discover"
            isIconAvailable={false}
            data={DiscoverLists}
            extraThings={<FaChevronDown />}
          />
        </div>
        <div className="hidden md:flex">
          <DropMenuBtn
            text="Help center"
            isIconAvailable={false}
            data={HelpcenterLists}
          />
        </div>
        <span className="w-[2px] h-6 bg-white opacity-75 hidden md:flex " />
        <div className="flex gap-2 smPro:gap-7 sm:gap-10 md:gap-9 xl:gap-14 items-center justify-around">
          <div
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme == "dark" ? <Moon /> : <Sun />}
          </div>
          <div className="relative">
            <DropMenuBtn
              isIconAvailable={true}
              extraThings={<HiOutlineBellAlert className="text-2xl" />}
            />

            <span className="w-3 h-3 p-1 rounded-full dark:bg-[#0044ff] bg-green-500 absolute -right-2 -top-2" />
          </div>

          <CustomBtn
            text="Connect"
            type="button"
            otherCss=" bg-yellow hidden md:flex px-3 py-2"
          />

          <DropMenuBtn
            text="profile"
            isIconAvailable={true}
            data={ProfileLists}
          />
          <div className="md:hidden">
            <CustomBtn
              text={<CiMenuFries className="text-2xl" />}
              handelClick={toggleMobileMenu}
            />
            <MobileMenu isOpen={isMenuOpen} onClose={toggleMobileMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
