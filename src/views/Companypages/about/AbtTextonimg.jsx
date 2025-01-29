import React from "react";
import img from "../../../assets/images1/standorte_banner_bild.webp";
import { Link } from "react-router-dom";

const AbtTextonimg = () => {
  return (
    <div className="relative w-full h-full lg:pt-[250px] pt-[70px] py-0 lg:pb-[150px] pb-[50px] bg-[#00223E] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-1">
        <div>
          <img
            src={img}
            className="absolute top-0 left-0 w-full h-full object-cover lg:object-center object-[75%_center]"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1440"
          height="900"
          viewBox="0 0 1440 900"
          className="absolute top-0 left-0 w-full h-full object-cover lg:object-center object-[75%_center]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="wb_a"
              x1="-0.051"
              y1="0.73"
              x2="1.034"
              y2="0.557"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="wb_b">
              <rect
                width="1025"
                height="900"
                transform="translate(415)"
                fill="#fff"
                stroke="#707070"
                strokeWidth="1"
              />
            </clipPath>
          </defs>
          <g transform="translate(13523 4750)">
            <rect
              width="1440"
              height="900"
              transform="translate(-13523 -4750)"
              fill="url(#wb_a)"
            />
            <g transform="translate(-13523 -4750)" clipPath="url(#wb_b)">
              <path
                d="M830.82-16.012c10.969,12.472,830.82,1084.706,830.82,1543.556,0,362.488-232.143,670.756-556.3,784.4a828.9,828.9,0,0,1-274.521,46.425C371.971,2358.364,0,1986.393,0,1527.543S819.851-28.484,830.82-16.012Z"
                transform="translate(451.541 -1217.519)"
                fill="#80acd3"
                opacity="0.25"
                style={{ mixBlendMode: "multiply", isolation: "isolate" }}
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-2 max-w-[1410px] w-full mx-auto px-[15px]">
        <div className="inline-block">
          <h3 className="font-normal lg:text-[30px] text-[20x] leading-[1.33333333] lg:text-[#80acd3] text-[#00223e] mb-[40px]">
            DENDRITES <strong>globally connected</strong>
          </h3>
          <h2 className="font-light lg:text-[57px] text-[34px] leading-[1.15789474] tracking-[0.025em] uppercase text-[#00223e] max-w-[662px] w-full m-0">
            <strong className="font-bold">Working for you worldwide!</strong>{" "}
            <br />
            With our 31 subsidiaries, we are always close to you.
          </h2>
          <div className="w-full h-full lg:mt-[50px] mt-[30px] flex justify-start">
            <Link
              to="#"
              className="shadow-[0_0_30px_rgba(0,34,62,0.21)] inline-block mt-[50px] group btn px-6 py-2 border-2 bg-[#96E8CA] border-[#96E8CA] text-[#00223E] rounded-md hover:bg-transparent hover:text-[#96E8CA] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.571"
                height="14.387"
                viewBox="0 0 21.571 14.387"
                className="group-hover:fill-[#96E8CA] fill-[#00223e] transition duration-300"
              >
                <path
                  d="M21.632,11.527a.979.979,0,0,0-.007,1.379l4.556,4.563H8.842a.974.974,0,0,0,0,1.948H26.172L21.617,23.98a.986.986,0,0,0,.007,1.379A.97.97,0,0,0,23,25.351l6.174-6.219h0a1.094,1.094,0,0,0,.2-.307.93.93,0,0,0,.075-.375.977.977,0,0,0-.277-.682L23,11.55A.954.954,0,0,0,21.632,11.527Z"
                  transform="translate(-7.875 -11.252)"
                ></path>
              </svg>
              <span className="max-w-[73px]">Show all</span>
            </Link>
          </div>
          {/* text circle */}
          {/* Wrap in a relative div to ensure proper positioning */}
          <div className="lg:block md:block hidden absolute mt-[60px] mb-0 top-0 right-2">
            <div className="w-[167px] h-[167px] bg-[rgba(128,172,211,0.5)] rounded-full flex justify-center items-center">
              <div className="w-[140px] h-[140px] border border-[#002a4d] rounded-full flex justify-center items-center">
                <div className="w-full text-center font-light text-[13px] leading-[1.07692308] text-[#002a4d]">
                  <span class="block text-white mb-[5px] font-ubuntu font-bold text-[43px] leading-[1.13953488]">57</span>
                  <strong>vacancies</strong>
                  <br />
                  available!
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:hidden block relative mt-[60px]">
            <div className="w-[167px] h-[167px] bg-[rgba(128,172,211,0.75)] rounded-full flex justify-center items-center">
              <div className="w-[140px] h-[140px] border border-[#002a4d] rounded-full flex justify-center items-center">
                <div className="w-full text-center font-light text-[13px] leading-[1.07692308] text-[#002a4d]">
                  <span class="block text-white mb-[5px] font-ubuntu font-bold text-[26px] leading-[1.13953488]">57</span>
                  <strong>vacancies</strong>
                  <br />
                  available!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtTextonimg;
