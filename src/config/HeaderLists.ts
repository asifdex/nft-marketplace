import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GrGallery } from "react-icons/gr";
import { TbMoodEdit } from "react-icons/tb";
import { MdLiveHelp } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

interface MenuItem {
  name: string;
  link: string;
  islink: boolean;
  isDivlink: boolean;
  icon: IconType; // Use IconType for the icon property
}
export const HeaderLists = [
  {
    name: "Home",
    link: "/",
    islink: false,
    isDivlink: false,
    icon: "home.svg",
  },
  {
    name: "Create Your Own NFT",
    link: "/Nftai",
    islink: false,
    isDivlink: false,
    icon: "NFT.svg",
  },
  {
    name: "How its Work?",
    link: "/Work",
    islink: false,
    isDivlink: false,
    icon: "home.svg",
  },
  {
    name: "FaQs",
    link: "/faq",
    islink: false,
    isDivlink: false,
    icon: "faq.svg",
  },
];

export const ProfileLists:MenuItem[] = [
  {
    name: "My Profile",
    link: "/",
    islink: false,
    isDivlink: false,
    icon: CgProfile,
  },
  {
    name: "My Items",
    link: "/Nftai",
    islink: false,
    isDivlink: false,
    icon:GrGallery,
  },
  {
    name: "Edit Profile",
    link: "/Work",
    islink: false,
    isDivlink: false,
    icon: TbMoodEdit,
  },
  {
    name: "Help",
    link: "/faq",
    islink: false,
    isDivlink: false,
    icon: MdLiveHelp,
  },
  {
    name: "About Us",
    link: "/faq",
    islink: false,
    isDivlink: false,
    icon: FaDownload,
  },
];

export const DiscoverLists = [
  {
    name: "Collection",
    link: "/",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Search",
    link: "/Nftai",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Author Profile",
    link: "/Work",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Account Setting",
    link: "/faq",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Upload NFT",
    link: "/faq",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Connect Wallet",
    link: "/faq",
    islink: false,
    isDivlink: false,
  },
  {
    name: "Blog",
    link: "/faq",
    islink: false,
    isDivlink: false,
  },
];

export const HelpcenterLists = [
  {
    name: "About",
    link: "/",
    islink: false,
    isDivlink: false,
    icon: "home.svg",
  },
  {
    name: "Contract Us",
    link: "/Nftai",
    islink: false,
    isDivlink: false,
    icon: "NFT.svg",
  },
  {
    name: "Sign Up",
    link: "/Work",
    islink: false,
    isDivlink: false,
    icon: "home.svg",
  },
  {
    name: "Supscription",
    link: "/faq",
    islink: false,
    isDivlink: false,
    icon: "faq.svg",
  },
];
