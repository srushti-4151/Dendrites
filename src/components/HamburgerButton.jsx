import React from "react";

const HamburgerButton = ({ isDrawerOpen, toggleDrawer }) => {
    return (
      <button
        onClick={toggleDrawer}
        className="text-white relative w-9 h-6 flex flex-col items-center justify-between"
      >
        {/* Top Line */}
        <span
          className={`absolute block w-full h-[3px] bg-white rounded transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "rotate-45 translate-y-[10px]" : "rotate-0 translate-y-0"
          }`}
        ></span>
  
        {/* Middle Line */}
        <span
          className={`absolute block w-full h-[3px] bg-white rounded transition-opacity duration-500 ease-in-out ${
            isDrawerOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
  
        {/* Bottom Line */}
        <span
          className={`absolute block w-full h-[3px] bg-white rounded transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "-rotate-45 -translate-y-[10px]" : "rotate-0 translate-y-[20px]"
          }`}
        ></span>
      </button>
    );
  };
  

export default HamburgerButton;
