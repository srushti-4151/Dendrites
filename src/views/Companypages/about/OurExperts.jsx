import React from "react";
import Slider from "react-slick";

const OurExperts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[rgb(2,46,85)] px-0 py-[70px] w-full text-center">
        <div className="max-w-[1410px] w-full mx-auto px-[15px] text-white">
          <h2 class="font-bold text-[57px] leading-[1.15789474] tracking-[0.025em] uppercase text-white text-shadow-glow">
            Our experts
          </h2>
          <div className="subline text-[30px] leading-[1.33333333] font-light mt-[25px] w-[888px] max-w-full mx-auto">
            Let yourself be inspired by{" "}
            <strong className="font-bold text-[30px] leading-[1.33333333] text-[#80acd3]">
              insights into the most varied of topics
            </strong>{" "}
            in our “Expert Interviews”.
          </div>

          <div className="slider-outer relative max-w-[1114px] w-full mx-auto mt-[35px] mb-0">
            <Slider {...sliderSettings}>
              
            </Slider>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;
