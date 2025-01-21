import React from "react";

const HamburgerButton = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <button
      onClick={toggleDrawer}
      className="text-white relative w-9 h-6 flex flex-col items-center justify-between right-15px gap-2"
    >
      {/* Top Line */}
      <span
        className={`absolute w-full h-[3px] bg-white rounded transition-transform duration-500 ease-in-out transform ${
          isDrawerOpen
            ? "rotate-45 top-1/2 translate-y-[-50%]"
            : "rotate-0 top-0 translate-y-0"
        }`}   
      ></span>

      {/* Middle Line */}
      <span
        className={`absolute w-full h-[3px] bg-white rounded transition-transform duration-500 ease-in-out transform ${
          isDrawerOpen
            ? "-rotate-45 top-1/2 translate-y-[-50%]"
            : "rotate-0 top-1/2 translate-y-0"
        }`}
      ></span>

      {/* Bottom Line */}
      <span
        className={`absolute w-full h-[3px] bg-white rounded transition-opacity duration-500 ease-in-out ${
          isDrawerOpen ? "opacity-0" : "opacity-100 -bottom-1"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
