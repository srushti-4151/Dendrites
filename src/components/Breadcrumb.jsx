import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
  const [topValue, setTopValue] = useState(110);
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);

  useEffect(() => {
    console.log("topval", topValue);
  }, [topValue]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition <= 110) {
      setTopValue(110 - scrollPosition);
    } else {
      setTopValue(70);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to check if the colorful line should be present
  const hasColorfulLine = () => {
    return (
      location.pathname.includes("/services") ||
      location.pathname.includes("/solutions")
    );
  };

  const getBreadcrumbTop = () => {
    const navbarHeight = 70; //default height of navbar
    const colorfulLineHeight = hasColorfulLine() ? 3 : 0;
    return navbarHeight + colorfulLineHeight;
  }

  return paths.length > 0 ? (
    <div
      className="text-[14px] w-full h-auto bg-[#DDE0E2] fixed shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50"
      style={{
        top:
          window.innerWidth >= 1025
            ? hasColorfulLine()
              ? topValue + 3 // Add 3px if line is present
              : topValue // Default without line
            : 73, // Small screen default
      }}
      // style = { {
      //   top: `${getBreadcrumbTop()}px`,
      // }}
    >
      <div className="relative mx-auto max-w-[1410px] text-[16px] w-full h-auto py-3 px-4 text-left bg-[#DDE0E2]">
        <NavLink to="/" className="font-medium text-gray-600">
          Home
        </NavLink>
        {paths.map((path, index) => (
          <span key={index}>
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
