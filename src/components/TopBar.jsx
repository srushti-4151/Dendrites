import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className=" bg-[#00223e]">
      <div className="m-auto max-w-[1200px] flex justify-end items-center gap-2 py-2 px-6 lg:px-0 ">
        <Link className="text-[#a7b8b8] text-[14px] hover:text-white duration-1000">
          Contact
        </Link>
        <Link className="text-[#a7b8b8] text-[14px] hover:text-white duration-1000">
          Newsroom
        </Link>
        <Link className="text-[#a7b8b8] text-[14px] hover:text-white duration-1000">
          DE
        </Link>
        <Link className="text-[#a7b8b8] text-[14px] hover:text-white duration-1000">
          EN
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
