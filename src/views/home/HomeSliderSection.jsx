import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import image1 from "../../assets/Zeta-Digitalisierung-Banner-Bild_Neu.webp";
import image2 from "../../assets/Biotech_Opt1_final-ff592b8e.webp";
import image3 from "../../assets/processengineering_banner.webp";
import image4 from "../../assets/automation_opt2_final.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeSliderSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const homeSliderData = [
    {
      image: image1,
      title: "Digitalization",
      description: "Get to know the digital twin of your production plant!",
    },
    {
      image: image2,
      title: "Food Engineering",
      description:
        "Pioneering technologies for sustainable nutrition. From scale-up to process and food safety.",
    },
    {
      image: image3,
      title: "Process Engineering",
      description:
        "ZETA implements highly complex projects in the shortest possible time.",
    },
    {
      image: image4,
      title: "Automation",
      description:
        "Pioneering technologies for sustainable nutrition. From scale-up to process and food safety.",
    },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: (
      <button className="">
        <IoIosArrowBack
          className={` ${
            windowWidth < 600
              ? "hidden"
              : "text-[#00223e] text-3xl lg:text-[22px] h-[50px] p-2 w-[50px] border border-[#00223e] rounded-full"
          }`}
        />
      </button>
    ),
    nextArrow: (
      <button className="">
        <IoIosArrowForward
          className={` ${
            windowWidth < 600
              ? "hidden"
              : "text-[#00223e] text-3xl lg:text-[22px] h-[50px] p-2 w-[50px] border border-[#00223e] rounded-full"
          }`}
        />
      </button>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {homeSliderData.map((slide, index) => (
          <div key={index} className="relative w-full h-[300px] lg:h-[770px]">
            {/* Background Image */}
            <img
              src={slide?.image}
              alt="careerZeta"
              className="w-full h-full object-cover"
            />

            {/* White Fade Over Entire Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

            {/* Oval Shape on Right Side */}
            <div
              className="absolute top-0 left-0 h-full w-[68%] bg-[#6a929c] opacity-20"
              style={{
                clipPath: "ellipse(100% 100% at 0% 50%)",
              }}
            ></div>
            {/*Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
              <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-end items-center lg:items-start text-right">
                <div className="w-full lg:max-w-[600px] mb-8 lg:mb-0 text-left">
                  <h1 className="text-[30px] font-bold lg:text-[47px] text-[#00223e] pt-4 lg:pt- uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-[20px] font-normal lg:text-[30px] text-[#00223e]">
                    {slide?.description}
                  </p>
                  <div className="pt-6 lg:pt-8">
                    <button className="flex items-center gap-3 bg-[#95e8ca] px-4 py-2 lg:px-6 lg:py-3 font-bold text-[#00223e] rounded-md transition duration-300 hover:bg-[#00223e] hover:text-white">
                      <FaArrowRight />
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        ))}
      </Slider>
      <div
        className={` ${
          windowWidth < 600
            ? "flex justify-center items-center gap-5 py-3 bg-[#00223e]"
            : "hidden"
        }`}
      >
        <button
          className="text-[#6a929c] text-3xl lg:text-4xl border border-[#6a929c] rounded-full p-2"
          onClick={() => document.querySelector(".slick-prev").click()}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="text-[#6a929c] text-3xl lg:text-4xl border border-[#6a929c] rounded-full p-2"
          onClick={() => document.querySelector(".slick-next").click()}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default HomeSliderSection;