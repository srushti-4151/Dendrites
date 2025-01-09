import React from "react";
import { Link } from "react-router-dom";

const Starter = () => {
  const steps = [
    {
      number: 1,
      title: "Process Improvement",
      description:
        'From the "actual" model to the "target" model: Together with you, we analyze your current process and find out where the technical challenges lie and how we can solve them.',
    },
    {
      number: 2,
      title: "Process Development",
      description:
        "Together with you, we will develop a technological solution that is tailor-made for your needs and your process.",
    },
    {
      number: 3,
      title: "Expert Workshop",
      description:
        "We work out ways to find solutions and possible scenarios in a joint workshop.",
    },
    {
      number: 4,
      title: "Creation of the Scope of Delivery",
      description:
        "We create the follow-up documentation (PFD and URS), schedules, budgeting, results and show recommendations or alternative options for you.",
    },
    {
      number: 5,
      title: "Concluding Meeting",
      description: "We define the next common steps in a final meeting.",
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
            <strong className="font-bold">Starter Package</strong> Engineering
          </h2>
          <div class="font-light text-[18px] leading-[1.38888889] text-white mx-auto mt-[25px] max-w-[800px]">
            <p>
              It all starts with your <strong>vision</strong>: We take over the
              planning and implementation of your idea right from the start.
            </p>
          </div>

          <ul className="w-full mt-[85px]">
            {steps.map((step) => (
              <li
                key={step.number}
                className={`mb-8 relative text-left align-top inline-block w-[33.33%] ${
                  step.number === 1
                    ? "pr-[30px]"
                    : step.number === 2
                    ? "px-[15px]"
                    : step.number === 3
                    ? "pl-[30px]"
                    : step.number === 4
                    ? "pr-[30px] mt-[40px]"
                    : step.number === 5
                    ? "px-[15px] mt-[40px]"
                    : "px-[15px] mt-0"
                }`}
              >
                <span
                  className={`absolute font-bitter top-0 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[120px] leading-[1.29166667] text-[#fff] text-opacity-[0.15] z-1 ${
                    step.number === 1
                      ? "left-0"
                      : step.number === 2
                      ? "left-[15px]"
                      : step.number === 3
                      ? "left-[30px]"
                      : step.number === 4
                      ? "left-0"
                      : step.number === 5
                      ? "left-[15px]"
                      : "left-0"
                  }`}
                >
                  {step.number}
                </span>
                <h4
                  className="font-bold text-[30px] leading-[1.2] text-[#00223e] mb-[18.5px] relative z-2"
                  style={{ minHeight: "72px" }}
                >
                  {step.title}
                </h4>
                <div className="font-light text-[18px] leading-[1.38888889] text-[#00223e] relative z-20">
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

export default Starter;
