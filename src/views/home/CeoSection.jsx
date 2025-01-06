import React from "react";
import Ceo1 from "../../assets/ceo1.webp";
import Ceo2 from "../../assets/ceo2.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const CeoSection = () => {
  const ceoData = [
    {
      img: Ceo1,
      name: "Alexander Lausecker",
      profession: "Head of Sales",
      text1: "Gerne beraten",
      text2: "wir Sie auch personlich!",
      btn: "Zur Anfrage!",
    },
    {
      img: Ceo2,
      name: "Sushaant Bakhru",
      profession: "CEO DENDRITES Singapore",
      text1: "We are happy to",
      text2: "advise you personally!",
      btn: "Get in touch!",
    },
  ];

  return (
    <div className="bg-[#022e55]">
      <div className="max-w-[1200px] mx-auto px-4">
        {ceoData.map((ceo, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-20 py-12 lg:py-24"
          >
            {/* CEO Image Section */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-[250px] h-[250px] border border-[#eaf3faa1] flex justify-center items-center rounded-full mx-auto">
                  <div className="w-[220px] h-[220px] rounded-full flex justify-center items-center">
                    <img className="rounded-full" src={ceo?.img} alt="" />
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="font-medium text-white">
                    Contact:{" "}
                    <span className="text-[#93bbdda1] mr-1">{ceo?.name}</span>
                  </p>
                  <p className="font-medium text-[#80acd3a1]">
                    {ceo?.profession}
                  </p>
                </div>
              </div>
            </div>

            {/* Text and Button Section */}
            <div className="text-center tracking-wider lg:leading-[40px] leading-[30px] md:leading-[40px]">
              <p className="text-[24px] md:text-[40px] text-white uppercase">
                {ceo?.text1}
              </p>
              <p className="text-[24px] md:text-[40px] text-white font-bold uppercase">
                {ceo?.text2}
              </p>
              <div className="flex justify-center items-center lg:pt-14 pt-8">
                <button className="tracking-tight lg:text-base text-sm flex items-center gap-3 bg-[#80acd3] lg:px-8 py-[10px] px-6 font-bold text-white rounded-md transition duration-500 hover:bg-white hover:text-[#80acd3]">
                  <FaArrowRightLong size={22}/>
                  {ceo?.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeoSection;
