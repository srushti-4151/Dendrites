import React from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoCallOutline, IoLogoVimeo } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";

const CopySection = () => {
  return (
    <div className="border-t border-[#2d4152] bg-[#00223e]">
      <div className="max-w-[1410px] mx-auto">
        <div className="flex justify-between items-center flex-wrap py-[17px] px-6">
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-[#80acd3]">© 2024 ZETA</p>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto gap-3 mb-4 sm:mb-0 lg:pr-24">
            <div className="group border border-[#80acd3] p-2 rounded-full hover:bg-[#80acd3] cursor-pointer">
              <FaLinkedinIn size={21} className="text-[#80acd3] group-hover:text-white transition duration-300" />
            </div>
            <div className="group border border-[#80acd3] p-1 rounded-full hover:bg-[#80acd3] cursor-pointer">
              <IoLogoFacebook size={29} className="text-[#80acd3] group-hover:text-white transition duration-300" />
            </div>
            <div className="group border border-[#80acd3] p-2 rounded-full hover:bg-[#80acd3] cursor-pointer">
              <FaYoutube size={21} className="text-[#80acd3] group-hover:text-white transition duration-300" />
            </div>
            <div className="group border border-[#80acd3] p-2 rounded-full hover:bg-[#80acd3] cursor-pointer">
              <IoLogoVimeo size={21} className="text-[#80acd3] group-hover:text-white  transition duration-300" />
            </div>
            <div className="group border border-[#80acd3] p-2 rounded-full hover:bg-[#80acd3] cursor-pointer">
              <RiInstagramFill size={21} className="text-[#80acd3] group-hover:text-white transition duration-300" />
            </div>
          </div>

          {/* <div className="group w-full sm:w-auto text-center sm:text-right relative cursor-pointer">
            <p className="text-[#80acd3]">made by Rittle & Co</p>
            <div className="absolute bottom-[-2px] left-1/2 w-0 h-[1px] bg-[#80acd3] transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%-10px)]"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CopySection;
