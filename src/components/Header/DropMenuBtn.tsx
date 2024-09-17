import { DropDownMenu } from "@/types";
import React from "react";
// import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropDownMenu";


const user1 = "/user-1.png";
const menus = ({
  text,
  isIconAvailable,
  data,
  extraThings,
  otherCss,
}: DropDownMenu) => {
  return (
    <DropdownMenu modal={false} >
      <DropdownMenuTrigger asChild>
        <div className={`flex justify-center items-center ${otherCss} `}>
           {text == "profile" ? (
            <div className="relative w-14 h-14 rounded-full">
              <img src={user1} alt="profile" className="absolute object-cover rounded-full"  />
            </div>
          ) : (
            <> 
              <div>{text}</div>
              <div className="mt-1">{extraThings}</div>
           </>
          )} 
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuSeparator />
        {data?.map((items, idx) => (
          <DropdownMenuItem key={idx} className="flex">
            {isIconAvailable && items.icon && (
              <span className="mr-2">
                {/* Render the icon component */}
                {React.createElement(items.icon, { className: "h-4 w-4" })}
              </span>
            )}
            <span>{items.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default menus;
