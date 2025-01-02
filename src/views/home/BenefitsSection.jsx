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
      title: "Interdisciplinary Team",
      description:
        "The DENDRITES team is made up of experts from a wide variety of areas.This guarantees expertise and know-how for every phase of your project.",
    },
    {
      image: ultarfastPrjectSVG,
      title: "Fast Development",
      description: "Maximum quality with minimum project duration!",
    },
    {
      image: customizedSolSVG,
      title: "Service & Support",
      description:
        "Dedicated and professional service team helps customer for quick on-site/off-site response.",
    },
    {
      image: processSolutionsSVG,
      title: "Customized Solutions",
      description:
        "Customer specific hardware and software-based solution.",
    },
    {
      image: automationSolutionSVG,
      title: "Quality",
      description:
        "Quality is not negotiable. it is the standard we set, the promise we keep, and the foundation upon which trust is built",
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
      title: "Innolab Dendrites TechCenter",
      description:
        "DENDRITES TechCenter – where the spirit of research and problem-solving skills come together!",
    },
  ];

  return (
    <div className="bg-[#00223e] py-8">
      <div className="max-w-[1410px] mx-auto lg:px-6 md:px-5 px-4">
        <h2 className="text-center text-white font-bold text-4xl md:text-5xl lg:text-6xl text-shadow-glow lg:py-14 lg:pb-24 md:py-10 md:pb-20 pb-5 uppercase">
          Benefits
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-6 md:gap-8">
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
              <h3 className="lg:text-2xl md:text-xl text-[17px] leading-5 lg:leading-6 font-semibold mb-3 text-center tracking-normal h-[50px] lg:w-[65%] w-[75%] md:w-[80%]">
                {benefit.title}
              </h3>
              <p className="text-sm lg:text-sm md:text-lg text-white text-center lg:pt-7 pt-2 font-light h-[150px] md:h-[200px] lg:w-[92%]">
                {benefit.description}
              </p>
              <div className="lg:text-lg md:text-lg text-sm flex justify-center items-center gap-3 text-[#80acd3] px-6 font-bold lg:pt-5 cursor-pointer tracking-tight h-[40px]">
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
