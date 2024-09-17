import { DiscoverLists, ProfileLists } from "@/config/HeaderLists";
import React, { useState } from "react";

const MobileMenu = ({ isOpen, onClose }: any) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    if (openMenus.includes(menu)) {
      setOpenMenus(openMenus.filter((m) => m !== menu));
    } else {
      setOpenMenus([...openMenus, menu]);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={onClose}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-yellow-400">Menu</h2>
          <button onClick={onClose} className="text-xl text-yellow-400">
            ✖
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4 text-yellow-400">
          <ul className="space-y-4">
            {/* Discover dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleMenu("Discover")}
              >
                Discover
                <span>{openMenus.includes("Discover") ? "▲" : "▼"}</span>
              </button>
              {openMenus.includes("Discover") && (
                <ul className="ml-4 mt-2 space-y-2">
                  {DiscoverLists.map((item) => (
                    <li key={item.name}>
                      <a href={item.link} onClick={onClose}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Profile dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleMenu("Profile")}
              >
                Profile
                <span>{openMenus.includes("Profile") ? "▲" : "▼"}</span>
              </button>
              {openMenus.includes("Profile") && (
                <ul className="ml-4 mt-2 space-y-2">
                  {ProfileLists.map((item) => (
                    <li key={item.name} className="flex items-center">
                      {item.icon && <item.icon className="mr-2" />}
                      <a href={item.link} onClick={onClose}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
