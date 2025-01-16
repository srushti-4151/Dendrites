import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const Bar = () => {
  const [topValue, setTopValue] = useState(110);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition <= 110) {
      setTopValue(110 - scrollPosition);
    } else {
      setTopValue(70);
    }
  };

  useEffect(() => {
    console.log("topval", topValue);
  
  }, [topValue])
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className="text-sm w-full bg-gray-200 shadow-md py-3 lg:pl-0 pl-2 fixed z-50"
    style={{
      top: window.innerWidth >= 1024 ? topValue : 70,
    }}
    >
      <div className="relative lg:text-base text-sm text-left w-full flex space-x-3 text-gray-600 items-center mx-auto max-w-[1410px] px-4 border-none">
        <a href="/" className="text-gray-600">
          Home
        </a>
        <span className="text-lg">
          <FaChevronRight size={15} />
        </span>
        <a href="/products" className="text-gray-600">
          Products
        </a>
        <span>
          <FaChevronRight size={15} />
        </span>
        <span className="text-[#00223E]">Product</span>
      </div>
    </div>
   
  );
};

export default Bar;
