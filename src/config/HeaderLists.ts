import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GrGallery } from "react-icons/gr";
import { TbMoodEdit } from "react-icons/tb";
import { MdLiveHelp } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { MenuItem } from "@/types";

export const HeaderLists = [
  {
    name: "Home",
    link: "/",
    islink: false,

    icon: CgProfile,
  },
  {
    name: "Create Your Own NFT",
    link: "/Nftai",
    islink: false,
    icon: CgProfile,
  },
  {
    name: "How its Work?",
    link: "/Work",
    islink: false,
    icon: CgProfile,
  },
  {
    name: "FaQs",
    link: "/faq",
    islink: false,
    icon: CgProfile,
  },
];

export const ProfileLists: MenuItem[] = [
  {
    name: "My Profile",
    link: "/",
    islink: false,
    icon: CgProfile,
  },
  {
    name: "My Items",
    link: "/Nftai",
    islink: false,
    icon: GrGallery,
  },
  {
    name: "Edit Profile",
    link: "/Work",
    islink: false,
    icon: TbMoodEdit,
  },
  {
    name: "Help",
    link: "/faq",
    islink: false,
    icon: MdLiveHelp,
  },
  {
    name: "About Us",
    link: "/faq",
    islink: false,
    icon: FaDownload,
  },
];

export const DiscoverLists = [
  {
    name: "Collection",
    link: "/",
    islink: false,
  },
  {
    name: "Search",
    link: "/Nftai",
    islink: false,
  },
  {
    name: "Author Profile",
    link: "/Work",
    islink: false,
  },
  {
    name: "Account Setting",
    link: "/faq",
    islink: false,
  },
  {
    name: "Upload NFT",
    link: "/faq",
    islink: false,
  },
  {
    name: "Connect Wallet",
    link: "/faq",
    islink: false,
  },
  {
    name: "Blog",
    link: "/faq",
    islink: false,
  },
];

export const HelpcenterLists = [
  {
    name: "About",
    link: "/",
    islink: false,
    
  },
  {
    name: "Contract Us",
    link: "/Nftai",
    islink: false,
    
  },
  {
    name: "Sign Up",
    link: "/Work",
    islink: false,
   
  },
  {
    name: "Supscription",
    link: "/faq",
    islink: false,
   
  },
];
