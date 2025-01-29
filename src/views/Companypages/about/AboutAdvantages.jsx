import React from "react";
import { Link } from "react-router-dom";

const AboutAdvantages = () => {
  const steps = [
    {
      number: 1,
      title: "Interdisciplinary Team",
      description:
        'The Dendrites team is made up of experts from a wide variety of areas. This guarantees expertise and know-how for every phase of your project.',
    },
    {
      number: 2,
      title: "Time to Market",
      description:
        "Our innovative procurement and project management strategies shorten your project duration.",
    },
    {
      number: 3,
      title: "Management of Complexities",
      description:
        "Whether greenfield or brownfield - no challenge is too big for us! We use innovative project management methods to handle your project transparently and professionally.",
    },
    {
      number: 4,
      title: "Transparency in All Phases",
      description:
        "Maintain an overview with full cost transparency, continuous performance progress and structured scheduling.",
    },
    {
      number: 5,
      title: "Comprehensive Partner Network",
      description: "Bundled know-how and expertise: We take advantage of an established and reliable network of hand-selected partners.",
    },
  ];

  return (
    <div className="relative bg-[#80ACD3] w-full py-[70px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-1">
        <svg
          class="kreis-rechts-responsive"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          data-width="1440"
          data-height="900"
          width="1440"
          height="745.031"
          viewBox="0 0 1440 745.031"
          preserveAspectRatio="none"
          className="absolute w-full h-full object-cover"
        >
          <g transform="translate(2.614 -2912)">
            <rect
              data-width="1440"
              data-height="900"
              width="1440"
              height="745.031"
              transform="translate(-2.614 2912)"
              fill="#80acd3"
            ></rect>
            <g class="circle" transform="translate(412 2912)">
              <path
                d="M830.82-16.012c10.969,12.472,830.82,1084.706,830.82,1543.556,0,362.488-232.143,670.756-556.3,784.4a828.9,828.9,0,0,1-274.521,46.425C371.971,2358.364,0,1986.393,0,1527.543S819.851-28.484,830.82-16.012Z"
                transform="translate(36.541 -1217.519)"
                fill="#709eca"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="relative z-3 max-w-[1410px] w-full mx-auto px-4">
        <div className="text-center">
          <h2 class="font-light text-[40px] leading-[1.15] tracking-[0.025em] max-w-[800px] text-white text-uppercase mx-auto text-shadow-glow uppercase">
            <strong className="font-bold">ADVANTAGES</strong> of the Dendrites Project Management
          </h2>

          <ul className="w-full mt-[85px] lg:pl-0 md:pl-0 pl-[30px]">
            {steps.map((step) => (
              <li
                key={step.number}
                className={`mb-8 mt-12 lg:mt-0 md:mt-0 relative text-left align-top lginline-block md:inline-block block lg:w-[33.33%] md:w-[33.33%] w-full ${
                  step.number === 1
                    ? "lg:pr-[30px] md:pr-[30px] pr-0"
                    : step.number === 2
                    ? "lg:px-[15px] md:px-[15px] px-0"
                    : step.number === 3
                    ? "lg:pl-[30px] md:pl-[30px] pl-0"
                    : step.number === 4
                    ? "lg:pr-[30px] md:pr-[30px] pr-0 lg:mt-[40px] md:mt-[40px] mt-0"
                    : step.number === 5
                    ? "lg:px-[15px] md:px-[15px] px-0 lg:mt-[40px] md:mt-[40px] mt-0"
                    : "lg:px-[15px] md:px-[15px] mt-0"
                }`}
              >
                <span
                  className={`absolute font-bitter top-0 transform -translate-x-1/2 -translate-y-1/2 font-bold lg:text-[120px] md:text-[120px] text-[72px] leading-[1.29166667] text-[#fff] text-opacity-[0.15] z-1 ${
                    step.number === 1
                      ? "left-0"
                      : step.number === 2
                      ? "lg:left-[15px] md:left-[15px] left-0"
                      : step.number === 3
                      ? "lg:left-[30px] md:left-[30px] left-0"
                      : step.number === 4
                      ? "left-0"
                      : step.number === 5
                      ? "lg:left-[15px] md:left-[15px] left-0"
                      : "left-0"
                  }`}
                >
                  {step.number}
                </span>
                <h4
                  className="font-bold lg:text-[30px] md:text-[30px] text-[18px] leading-[1.2] text-[#00223e] mb-[18.5px] relative z-2"
                  style={{
                    minHeight: "22px", // Default (small screens)
                    "@media (min-width: 768px)": { minHeight: "71px" }, // Medium screens (md)
                    "@media (min-width: 1024px)": { minHeight: "72px" }, // Large screens (lg)
                  }}
                >
                  {step.title}
                </h4>
                <div className="font-light lg:text-[18px] md:text-[18px] text-[13px] leading-[1.38888889] text-[#00223e] relative z-20">
                  {step.description}
                </div>
              </li>
            ))}
          </ul>

          {/* button  */}
          <div className="w-full h-full mt-[50px] flex justify-center">
            <Link
              to="#"
              className="group btn px-6 py-2 border-2 bg-[#96E8CA] border-[#96E8CA] text-[#00223E] rounded-md hover:bg-transparent hover:text-[#96E8CA] transition duration-300"
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
              <span>Further questions?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAdvantages;


  