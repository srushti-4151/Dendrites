import React from "react";
import imag1 from "../../assets/produkte_banner_gradient.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroProduct = () => {
  return (
    <>
      <div className="relative w-full h-[340px] lg:h-[770px]">
        {/* Background Image */}
        <img
          src={imag1}
          alt="careerZeta"
          className="w-full h-full object-cover"
        />

        {/* White Fade Over Entire Image */}
        <div
          className="absolute inset-0 
               bg-gradient-to-t 
               from-white 
               via-white/50 to-transparent
               "
        ></div>
        {/* Oval Shape on Right Side */}
        <div
          className="absolute top-0 left-0 h-full w-[68%] lg:bg-[#6a929c] bg-[#175b9b] opacity-20"
          style={{
            clipPath: "ellipse(100% 100% at 0% 50%)",
          }}
        ></div>
        {/*Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-end items-center lg:items-start">
            <div className="lg:max-w-[600px] mb-4 lg:mb-0 lg:pl-48">
              <h1 className="tracking-wide text-[30px] font-bold lg:text-[47px] text-[#00223e] pt-4 lg:pb-2 pb-3 uppercase">
                Products
              </h1>
              <p className="text-[18px] font-normal lg:text-[32px] text-[#00223e] lg:pb-2">
                Product solution for modern product plants
              </p>
              <div className="pt-14 lg:pt-7">
                <button className="flex items-center gap-3 bg-[#95e8ca] px-6 py-3 lg:px-8 lg:py-[9px] font-bold text-[#00223e] rounded-md transition duration-500 hover:bg-[#00223e] hover:text-white lg:text-lg text-sm">
                  <FaArrowRight size={20} />
                  Agitator Technology
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full z-20">
          <div className="block vorteile max-w-full w-[1410px] mx-auto px-4 box-border z-10">
            <div className="mb-[47px]">
              <div className="inline-block relative">
                <h3 className="headline inline-block align-middle text-[23px] font-light leading-[1.13] text-[#00223e]">
                  <strong>Your</strong> Advantages
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <g transform="translate(-296 -767)">
                    <g
                      transform="translate(296 767)"
                      fill="none"
                      stroke="#00223e"
                      stroke-width="1"
                    >
                      <circle cx="24" cy="24" r="24" stroke="none"></circle>
                      <circle cx="24" cy="24" r="23.5" fill="none"></circle>
                    </g>
                    <path
                      d="M-6866.086-3964.343h15.916v15.917"
                      transform="translate(-1728.329 -6856.076) rotate(-135)"
                      fill="none"
                      stroke="#00223e"
                      stroke-width="3"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <ul>
              <li className="relative">
                <span className="no absolute top-0 left-[40px]">1</span>
                <div className="text relative block text-[#00223e] font-medium text-[18px] leading-[1.17]">
                  Customized magnetic mixers
                </div>
              </li>
              <li className="relative">
                <span className="no absolute top-0 left-[40px]">2</span>
                <div className="text relative block text-[#00223e] font-medium text-[18px] leading-[1.17]">
                  Freeze & Thaw solutions
                </div>
              </li>
              <li className="relative">
                <span className="no absolute top-0 left-[40px]">3</span>
                <div className="text relative block text-[#00223e] font-medium text-[18px] leading-[1.17]">
                  In-house electropolishing
                </div>
              </li>
              <li className="relative">
                <span className="no absolute top-0 left-[40px]">4</span>
                <div className="text relative block text-[#00223e] font-medium text-[18px] leading-[1.17]">
                  Competence in CFD simulation
                </div>
              </li>
              <li className="relative">
                <span className="no absolute top-0 left-[40px]">5</span>
                <div className="text relative block text-[#00223e] font-medium text-[18px] leading-[1.17]">
                  Quality by design
                </div>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </>
  );
};

export default HeroProduct;
