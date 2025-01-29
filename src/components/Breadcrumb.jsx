import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
      className="text-[14px] w-full h-auto bg-[#DDE0E2] fixed shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50"
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
      {/* <div className="relative mx-auto max-w-[1410px] w-full h-auto py-3 px-4 text-left bg-[#F0F0F0]">
        <Link to="/" className="font-medium text-gray-600">
          Home
        </Link>
        {paths.map((path, index) => (
          <span key={index} className="px-1 z-50">
            <Link
              to={`/${paths.slice(0, index + 1).join("/")}`}
              className="z-50"
            >
              <MdOutlineKeyboardArrowRight size={20} className="inline-block" />
              {path.replace("-", " ")}
            </Link>
          </span>
        ))}
      </div> */}
      <div className="relative mx-auto max-w-[1410px] text-[16px] w-full h-auto py-3 px-4 text-left bg-[#DDE0E2]">
        <NavLink to="/" className="font-medium text-gray-600">
          Home
        </NavLink>
        {paths.map((path, index) => (
          <span key={index} className="inline-block">
            <MdOutlineKeyboardArrowRight
              size={27}
              className="inline-block font-medium text-gray-500 mr-1"
            />
            <NavLink
              to={`/${paths.slice(0, index + 1).join("/")}`}
              className={
                index === paths.length - 1
                  ? "text-[#00223E] font-medium"
                  : "text-gray-600 font-medium"
              }
            >
              {path.replace("-", " ")}
            </NavLink>
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Breadcrumb;
