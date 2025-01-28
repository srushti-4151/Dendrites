import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const [topValue, setTopValue] = useState(110);

  // Function to check if the colorful line should be present
  const hasColorfulLine = () => {
    return (
      location.pathname.includes("/services") ||
      location.pathname.includes("/solutions")
    );
  };

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
  }, [topValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);

  return paths.length > 0 ? (
    <div
      className="text-[14px] w-full h-auto bg-[#F0F0F0] shadow-md fixed z-50"
      // style={{
      //   top: window.innerWidth >= 1024 ? topValue : 70,
      // }}
      style={{
        top:
          window.innerWidth >= 1024
            ? hasColorfulLine()
              ? topValue + 3 // Add 3px if line is present
              : topValue // Default without line
            : 73, // Small screen default
      }}
    >
      <div className="relative w-full h-auto py-3 px-4 text-left bg-[#F0F0F0] shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50">
        <Link to="/" className="font-medium text-gray-600 hover:text-blue-500">
          Home
        </Link>
        {paths.map((path, index) => (
          <span key={index} className="px-1 z-50">
            <Link
              to={`/${paths.slice(0, index + 1).join("/")}`}
              className="text-blue-500 z-50"
            >
              {">"}
              {path.replace("-", " ")}
            </Link>
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Breadcrumb;
