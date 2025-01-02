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
      description: "IoT hardware and Centralized software-based solution.",
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
        "DENDRITES implements highly complex projects in the shortest possible time.",
    },
    {
      image: image4,
      title: "Automation",
      description:
        "Multi-brand PLC and SCADA based solutions.",
    },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables auto-slide
    autoplaySpeed: 3000,
    // dots: true,
    dots: windowWidth >= 600, // Show dots only for screens 600px or wider
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
          <div key={index} className="relative w-full h-[340px] lg:h-[770px]">
            {/* Background Image */}
            <img
              src={slide?.image}
              alt="careerDENDRITES"
              className="w-full h-full object-cover"
            />

            {/* White Fade Over Entire Image */}
            <div className="absolute inset-0 
            bg-gradient-to-t 
            from-white 
            via-white/50 to-transparent
            "></div>

            {/* Oval Shape on Right Side */}
            <div
              className="absolute top-0 left-0 h-full w-[68%] lg:bg-[#6a929c] bg-[#13518b] opacity-20"
              style={{
                clipPath: "ellipse(100% 100% at 0% 50%)",
              }}
            ></div>
            {/*Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4 pt-9 lg:pt-32">
              <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-end items-center lg:items-start">
                <div className="lg:max-w-[600px] md:max-w-[400px] mb-4 lg:mb-0 lg:pl-20">
                  <h1 className="text-[28px] font-bold lg:text-[45px] text-[#00223e] pt-4 lg:pb-2 pb-3 uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-[18px] font-light lg:text-[30px] text-[#00223e] opacity-90 lg:pb-2">
                    {slide?.description}
                  </p>
                  <div className="pt-7 lg:pt-7">
                    <button className="flex items-center gap-3 bg-[#95e8ca] px-6 py-3 lg:px-8 lg:py-[9px] font-bold text-[#00223e] rounded-md transition duration-500 hover:bg-[#00223e] hover:text-white lg:text-lg text-sm">
                      <FaArrowRight size={20}/>
                      Learn more!
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
