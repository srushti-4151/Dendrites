import React from "react";
import "../../../assets/scss/AboutusThoery.scss";
import img from "../../../assets/Thumbnail_who.webp"

const AboutusTheory = () => {
  return (
    <>
      <div className="bg-[#022E55] w-full px-[15px] lg:py-[73px] py-[53px]">
        <div className="max-w-[1016px] w-full mx-auto text-white">
          <h2 className="lg:text-[57px] md:text[45px] text-[34px] font-bold leading-[1.157] uppercase text-center text-shadow-glow mb-5">
            About Us
          </h2>
          <div className="font-light lg:text-[30px] md:text-[24px] text-[18px] leading-[1.333] text-center">
            <p className="m-0 mb-6 leading-[1.4]">
              The Dendrites Group is an{" "}
              <span className="text-[#80acd3] font-bold">
                end-to-end solution provider
              </span>
              operating globally and specializing in the design, construction,
              automation, digitalization, and qualification of{" "}
              <span className="text-[#80acd3] font-bold">
                customer-specific biopharmaceutical systems
              </span>{" "}
              for aseptic process solutions.
            </p>
          </div>
        </div>
        <div className="max-w-[888px] w-full mx-auto lg:mt-[60px] text-center text-white lg:font-bold lg:text-[18px] md:text-[15px] text-[13px] leading-[1.388]">
          <p className="m-0 mb-[1.5em] leading-[1.4em]">
            Dendrites offers comprehensive solutions and services along the
            whole pathway of active substance development and manufacturing. In
            addition, Dendrites serves as an <strong>EPCM contractor</strong>{" "}
            for major pharmaceutical projects, drives{" "}
            <strong>digital innovations</strong>, and develops comprehensive{" "}
            <strong>decarbonization strategies.</strong>
          </p>
        </div>
        <div className="relative rounded-[5px] overflow-hidden max-w-[835px] mx-auto aspect-[16/9]">
          <div className="absolute top-0 left-0 w-full h-full z-3">
            <div className="bg-video">
              <div className="video-in">
                <picture>
                  <img
                    src={img}
                    width="1284"
                    height="722"
                    alt="let's get in contact."
                    title="let's get in contact."
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusTheory;
