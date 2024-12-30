import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  automationSolutionSVG,
  customizedSolSVG,
  genralPlannerSVG,
  globalPlayerSVG,
  innolabZetaTechCenter,
  managementOfComplexity,
  processSolutionsSVG,
  ultarfastPrjectSVG,
} from "../../assets/svg";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  const benefitsData = [
    {
      image: genralPlannerSVG,
      title: "General Planner",
      description:
        "We take over the planning and coordination of your projects!",
    },
    {
      image: ultarfastPrjectSVG,
      title: "Ultra-fast-Projects",
      description: "Maximum quality with minimum project duration!",
    },
    {
      image: processSolutionsSVG,
      title: "Process Solutions",
      description:
        "Your expert for large molecules, blood plasma, vaccines and parenterals!",
    },
    {
      image: customizedSolSVG,
      title: "Customized Solutions",
      description:
        "Challenge accepted – we will find the right solution for your requirement.",
    },
    {
      image: automationSolutionSVG,
      title: "Automation Solutions",
      description:
        "Single-user control, DCS system or MTP? We have the right automation solution for you!",
    },
    {
      image: globalPlayerSVG,
      title: "Global Player",
      description:
        "Working for you all over the world! We are always close by with our 17 branch offices.",
    },
    {
      image: managementOfComplexity,
      title: "Management of Complexity",
      description: "Whether greenfield or brownfield - we manage your project!",
    },
    {
      image: innolabZetaTechCenter,
      title: "Innolab DENDRITES TechCenter",
      description:
        "DENDRITES TechCenter – where the spirit of research and problem-solving skills come together!",
    },
  ];

  return (
    <div className="bg-[#00223e] py-8">
      <div className="max-w-[1410px] mx-auto lg:px-6 px-4">
        <h2 className="text-center text-white font-bold text-4xl lg:text-6xl text-shadow-glow lg:py-14 lg:pb-24 pb-5 uppercase">
          Benefits
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <Link
              key={index}
              className="group rounded-lg lg:px-6 pb-5 text-center text-white transition flex flex-col justify-center items-center mb-6"
            >
              <div className="w-[170px] h-[170px] border border-[#80acd3a1] flex justify-center items-center rounded-full mb-8">
                <div className="w-[150px] h-[150px] group-hover:bg-[#80acd3a1] duration-300 rounded-full flex justify-center items-center">
                  {benefit.image}
                </div>
              </div>
              <h3 className="lg:text-2xl text-[17px] leading-5 lg:leading-6 font-semibold mb-3 text-center tracking-normal h-[50px] lg:w-[65%] w-[75%]">
                {benefit.title}
              </h3>
              <p className="text-sm text-white text-center lg:pt-7 pt-2 font-light h-[90px] lg:w-[92%]">
                {benefit.description}
              </p>
              <div className="lg:text-lg text-sm flex justify-center items-center gap-3 text-[#80acd3] px-6 font-bold lg:pt-3 cursor-pointer tracking-tight h-[40px]">
                <FaArrowRightLong size={20} />
                Learn more
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center w-100 pb-7">
          <button className="text-lg flex items-center gap-3 bg-[#80acd3] px-8 py-2 font-bold text-white rounded-md transition duration-300 hover:bg-white hover:text-[#80acd3]">
            <FaArrowRightLong />
            Show all solutions!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
