import React from "react";

const MobileMenu = ({ isOpen, onClose }:any) => {
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
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="text-xl">
            ✖
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4">
          <ul>
            <li>
              <a href="/" onClick={onClose}>
                Home
              </a>
            </li>
            <li>
              <a href="/discover" onClick={onClose}>
                Discover
              </a>
            </li>
            <li>
              <a href="/help" onClick={onClose}>
                Help Center
              </a>
            </li>
            <li>
              <a href="/profile" onClick={onClose}>
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
