import { ReactNode } from "react";
import { IconType } from "react-icons";
interface MenuItem {
  name: string;
  link: string;
  islink: boolean;
  icon?: IconType; // Use IconType for the icon property
}
declare type DropDownMenu ={
  text?: string;
  isIconAvailable: boolean;
  data?: MenuItem[];
  extraThings?: ReactNode;
  otherCss?: string;
}

declare type CustomButtonProps= {
    text:string | ReactNode ,
    type ?:"submit" | "button";
    handelClick?:() => void;
    otherCss?:string,
    icon?:ReactNode,
}