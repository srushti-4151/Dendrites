import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Bar = () => {
  return (
    
    <div className="text-sm w-full bg-gray-100 bg-opacity-90 shadow-md py-3 fixed z-10 top-[70px]">
      <div className="relative text-left w-full mx-auto px-4 flex space-x-3 text-gray-600 items-center">
        <a href="/" className="text-gray-600 hover:underline">
          Home
        </a>
        <span className="text-lg">
          <FaChevronRight size={15} />
        </span>
        <a href="/products" className="text-gray-600 hover:underline">
          Products
        </a>
        <span>
          <FaChevronRight size={15} />
        </span>
        <span className="text-blue-700">Product</span>
      </div>
    </div>
   
  );
};

export default Bar;
