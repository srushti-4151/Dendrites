import React from "react";
import careerZeta from "../../assets/karriere-opt1_final-33526b1f.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CareerZeta = () => (
  <div className="relative w-full h-[500px] lg:h-[700px]">
    {/* Background Image */}
    <img
      src={careerZeta}
      alt="careerZeta"
      className="w-full h-full object-cover filter white-[2.5]"

    />

    {/* White Fade Over Entire Image */}
    <div className="absolute inset-0 bg-gradient-to-l from-white/30 via-white/50 to-white/80"></div>

    {/* Oval Shape on Right Side */}
    <div
      className="absolute top-0 right-0 h-full w-[70%] bg-[#6692b8] opacity-20"
      style={{
        clipPath: "ellipse(100% 120% at 100% 50%)",
      }}
    ></div>

    {/* Centered Text Overlay */}
    <div className="absolute inset-0 flex items-end bottom-32 justify-center z-10 px-4">
      <div className="max-w-[1410px] w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Content */}
        <div className="w-full lg:w-1/2  lg:text-left mb-8 lg:mb-0">
          <p className="text-[20px] lg:text-[30px] text-[#80acd3]">
            <span className="font-bold">Career</span> at <span>ZETA</span>
          </p>
          <h1 className="text-[30px] lg:text-[57px] text-[#03213b] pt-4 lg:pt-9 uppercase leading-[60px] tracking-wide">
            Welcome to <br />
            <span className=" font-bold">the ZETA team</span>
          </h1>
          <div className="pt-6 lg:pt-14">
            <button className="flex items-center gap-3 bg-[#95e8ca] px-4 py-2 lg:px-[34px] lg:py-[10px] font-bold text-[#03213b] rounded-md transition duration-300 hover:bg-[#00223e] hover:text-white">
              <FaArrowRightLong size={20}/>
              My new job
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end lg:-translate-y-12">
          <Link className="w-[170px] h-[170px] bg-[#80acd3a1] flex justify-center items-center rounded-full lg:mt-40">
            <div className="border border-black w-[130px] h-[130px] rounded-full flex justify-center items-center">
              <div className="text-center">
                <p className="text-[20px] lg:text-[40px] text-white font-bold">
                  72
                </p>
                <p className="text-[#03213b]  font-medium text-[12px] lg:text-[16px]">
                  Vacancies <span className="font-thin">available</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CareerZeta;
