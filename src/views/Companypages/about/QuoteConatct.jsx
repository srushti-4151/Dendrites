import React from "react";
import "../../../assets/scss/QuoteConatct.scss";
import img1 from "../../../assets/alfred_marchler.webp";
import img2 from "../../../assets/andreas_machler.webp";
import img3 from "../../../assets/maier_josef-8fba400c.jpg";

const QuoteConatct = () => {
  const teamMembers = [
    {
      name: "Alfred Marchler",
      imgSrc: img1,
      imgAlt:
        "Contact Alfred Marchler - Managing Director | General Management",
      imgTitle:
        "Contact Alfred Marchler - Managing Director | General Management",
    },
    {
      name: "Andreas Marchler",
      imgSrc: img2,
      imgAlt:
        "Contact Andreas Marchler - Managing Director | General Management",
      imgTitle:
        "Contact Andreas Marchler - Managing Director | General Management",
    },
    {
      name: "Josef Maier",
      imgSrc: img3,
      imgAlt: "Contact Josef Maier - Managing Director | General Management",
      imgTitle: "Contact Josef Maier - Managing Director | General Management",
    },
  ];
  return (
    <>
      <div className="bg-[#00223E]">
        <div className="bg-transparent w-[1410px] max-w-full mx-auto px-4 py-20 text-center">
          <blockquote
            // className={`relative block bg-transparent max-w-[960px] w-full mx-auto pt-16 font-bold text-[57px] leading-[1.15] text-white before:content-[''] before:block before:bg-url:${quoteImage} before:bg-contain before:bg-center before:w-[217px] before:h-[169px] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:z-10`}
            className="quote-blockquote"
          >
            <div className="quote-text">
              <p className="pquote text-shadow-glow inline-block font-bold text-[57px] leading-[1.15789474] text-white text">
                We accelerate the process of bringing drugs to market in order
                to save lives
              </p>
            </div>
          </blockquote>

          <div className="mt-10">
            <ul className="w-[1021px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <li key={index} className="pl-[58.5px]">
                  <div className="w-full h-full flex flex-col items-center">
                    <div
                     className={`relative member-img w-full aspect-square border border-[#41729c] rounded-full flex justify-center items-center ${
                        index === teamMembers.length - 1 ? "no-line" : ""
                      }`}
                    >
                      <img
                        src={member.imgSrc}
                        alt={member.imgAlt}
                        title={member.imgTitle}
                        className="w-[90%] h-[90%] object-cover rounded-full object-center"
                      />
                    </div>
                    <p className="font-medium text-[23px] text-[#80acd3] mt-4">
                      {member.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[888px] w-full mx-auto mt-[60px] text-[#80acd3] font-bold text-[18px] leading-[1.388]">
            <h2 className="text-white font-light text-[30px] leading-[1.333] mx-auto mt-[25px] max-w-full">
              Managing Board Dendrites Holding
            </h2>
            <p>
              Together with our customers, we work to implement projects as
              quickly as possible. Our goal is to accelerate the market launch
              of vital active ingredients so that patients can benefit from them
              as quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteConatct;
