import React from "react";
import imag1 from "../../../assets/contactAbout-Banner-Bild_Neu.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroAbout = () => {
  const advantages = [
    "Problem solver and system provider",
    "Partner in major global pharmaceutical and biotech projects",
    "Customer-specific tailor-made system solutions",
    "Permanent innovation and first-time-right approach",
    "Attractive employer",
  ];
  return (
    <>
      <div className="relative w-full min-h-screen lg:pb-[100px] pb-[40px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute w-full h-full">
          <img
            src={imag1}
            alt="career"
            className="h-full w-full object-cover lg:object-center object-[35%_center]"
          />
        </div>
        {/* White Fade Over Entire Image */}
        <div
          className="lg:block hidden absolute inset-0 
               bg-gradient-to-t 
               from-white 
               via-white/10 to-transparent
               z-10"
        ></div>
        <div
          className="lg:hidden block absolute inset-0 
               bg-gradient-to-t 
               from-white 
               via-white/35 to-white/10
               z-10"
        ></div>
       
        {/* Oval Shape on left Side */}
        
         <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1440"
          height="900"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="object-center absolute top-0 left-0 h-full w-full z-10 opacity-100"
        >
          <defs>
            <linearGradient
              id="wbr_a"
              x1="1.051"
              y1="0.73"
              x2="-0.034"
              y2="0.557"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="wbr_b">
              <rect
                width="1025"
                height="900"
                fill="#fff"
                stroke="#707070"
                strokeWidth="1"
              />
            </clipPath>
          </defs>
          <rect width="1440" height="900" fill="url(#wbr_a)" />
          <g clipPath="url(#wbr_b)">
            <path
              d="M830.82-16.012C819.851-3.54,0,1068.694,0,1527.543c0,362.488,232.143,670.756,556.3,784.4a828.9,828.9,0,0,0,274.521,46.425c458.849,0,830.82-371.971,830.82-830.82S841.789-28.484,830.82-16.012Z"
              transform="translate(-673.181 -1217.519)"
              fill="#80acd3"
              opacity="0.25"
              style={{ mixBlendMode: "multiply", isolation: "isolate" }}
            />
          </g>
        </svg>

        {/*Text Overlay */}
        <div className="relative wrap inset-0 w-full 2xl:max-w-[1400px] 2xl:mx-auto lg:mx-auto lg:px-5 2xl:px-2 px-3 z-10 lg:pt-[340px] 2xl:pt-[340px] pt-[110px] lg:text-right 2xl:text-right text-left overflow-hidden">
          <div className="inline-block text-left max-w-[450px]">
            <h1 className="tracking-wide text-[30px] font-bold lg:text-[47px] md:text-[37px] text-[#00223e] pt-4 lg:pb-4 pb-4 uppercase">
              About
            </h1>
            <p className="text-[18px] font-thin lg:text-[31px] md:text-[25px] text-[#142738] lg:leading-[37px]">
              <strong className="font-bold lg:text-[#80acd3] 2xl:text-[#80acd3] text-[#0F3354]">
                Evolution of Technology <br/>
              </strong>{" "}
              Who we are and what drives us!
            </p>
            <div className="pt-6 lg:pt-7">
              <button className="flex items-center gap-3 bg-[#95e8ca] px-6 py-3 lg:px-8 lg:py-[9px] font-bold text-[#00223e] rounded-md transition duration-500 hover:bg-[#00223e] hover:text-white lg:text-lg text-sm">
                <FaArrowRight size={20} />
                Our Core Competence
              </button>
            </div>
          </div>
        </div>

        <div className="relative lg:mx-auto 2xl:mx-auto py-[80x] lg:pt-[150px] 2xl:pt-[150px] pt-[50px] mb-[30px] lg:mb-0 2xl:mb-0 lg:w-[1400px] 2xl:w-[1400px] w-full z-20 px-3">
          <div className="lg:mb-[48px] 2xl:mb-[48px] mb-[20px]">
            <div className="relative inline-block">
              <h3 className="inline-block align-middle m-0 font-ubuntu font-light text-[#00223e] lg:text-[23px] 2xl:text-[24px] text-[14px] leading-[1.13043478]">
                <span className="font-extrabold lg:mr-2 2xl:mr-2 mr-1">
                  Your
                </span>{" "}
                Advantages
              </h3>
              <div className="relative inline-block align-middle ml-[15px] lg:ml-[10px] 2xl:ml-[10px]">
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
                      strokeWidth="1"
                    >
                      <circle cx="24" cy="24" r="24" stroke="none"></circle>
                      <circle cx="24" cy="24" r="23.5" fill="none"></circle>
                    </g>
                    <path
                      d="M-6866.086-3964.343h15.916v15.917"
                      transform="translate(-1728.329 -6856.076) rotate(-135)"
                      fill="none"
                      stroke="#00223e"
                      strokeWidth="3"
                    ></path>
                  </g>
                </svg>
                <div className="ml-[48px] top-1/2 left-0 absolute h-[1px] w-[100vw] overflow-hidden block bg-[#0c253b]"></div>
              </div>
            </div>
          </div>
          <ul className="hidden 2xl:table lg:table w-full table-fixed">
            {advantages.map((advantage, index) => (
              <li
                key={index}
                className={`relative table-cell ${
                  index === 0 ? "pl-[0px]" : "pl-[40px]"
                }`}
              >
                <span
                  className={`absolute top-0 transform -translate-x-1/2 -translate-y-1/2 font-bitter font-bold text-[84px] leading-[1.16666667] text-[rgba(128,172,211,0.5)] z-10 ${
                    index === 0 ? "left-[0px]" : "left-[40px]"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="relative block m-0 font-medium lg:text-[18px] 2xl:text-[18px] text-[15px] leading-[1.16666667] text-[#00223e] z-20">
                  {advantage}
                </div>
              </li>
            ))}
          </ul>

          <ul className="2xl:hidden lg:hidden block">
            {advantages.map((advantage, index) => (
              <li
                key={index}
                className={`relavtive block align-top pl-[30px] ${
                  index === 0 ? "mt-[0px] " : "mt-[20px] "
                }`}
              >
                <span
                  className={`absolute left-4 -translate-y-[7px] font-bold text-[30px] text-[#4a7497] leading-none z-10`}
                >
                  {index + 1}
                </span>
                <div className="relative block m-0 font-ubuntu font-medium text-[18px] leading-[1.16666667] text-[#00223e] z-20">
                  {advantage}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
