import React from "react";
import img1 from "../../../assets/appsolution.webp";
import circl from "../../../assets/check-white.svg";
import { GoCheckCircle } from "react-icons/go";
import { Link } from "react-router-dom";

const EnSolApp = () => {
  const items = [
    "API production",
    "mAb production",
    "Blood plasma processing",
    "Vaccine production",
    "Aseptic products",
    "Emulsions",
    "Chemical synthesis",
  ];

  return (
    <div className="bg-[#022E55] px-0 w-full pt-[63px] pb-[80px]">
      <div className="max-w-[1410px] w-full mx-auto">
        <h2 className="font-light text-shadow-glow text-white text-4xl leading-[1.15] tracking-[0.025em] uppercase text-center mb-12 text-shadow-[0_0_15px_rgba(255,255,255,0.52)]">
          <strong font-bold>Engineering Solutions </strong> for the <br />
          Areas of Application:
        </h2>

        <div className="w-[1030px] max-w-full mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* image */}
            <div className="relative block w-[460px] h-[460px] max-w-full border border-white rounded-full">
              <img
                src={img1}
                alt=""
                className="absolute transform -translate-x-1/2 -translate-y-1/2 block w-[95.65217391%] h-[95.65217391%] object-cover object-center rounded-full top-1/2 left-1/2"
              />
            </div>
            {/* text */}
            <div className="font-light text-white leading-[1.12]">
              <ul className="pl-6 pt-3 pb-8">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="mt-[30px] flex items-center justify-start gap-4"
                  >
                    <GoCheckCircle size={35} />
                    <p className="inline-block text-[23px]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-[38px] flex justify-center items">
          <Link
            to="#"
            className="flex items-center gap-2 group px-8 py-2 border-2 bg-[#80acd3] border-[#80acd3] text-[#ffff] rounded-md hover:bg-[#fff] hover:text-[#80acd3] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.571"
              height="14.387"
              viewBox="0 0 21.571 14.387"
              className="group-hover:fill-[#80acd3] fill-[#fff] transition duration-300"
            >
              <path
                d="M21.632,11.527a.979.979,0,0,0-.007,1.379l4.556,4.563H8.842a.974.974,0,0,0,0,1.948H26.172L21.617,23.98a.986.986,0,0,0,.007,1.379A.97.97,0,0,0,23,25.351l6.174-6.219h0a1.094,1.094,0,0,0,.2-.307.93.93,0,0,0,.075-.375.977.977,0,0,0-.277-.682L23,11.55A.954.954,0,0,0,21.632,11.527Z"
                transform="translate(-7.875 -11.252)"
              ></path>
            </svg>
            <span>Get in touch!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnSolApp;
