import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images1/Thumbnail_Nicole Zangl.webp";
import img2 from "../../../assets/images1/Thumbnail_Expert Herzog.webp";
import "../../../assets/scss/OurExperts.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const OurExperts = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null); // Track active video
  useEffect(() => {
    const slickDots = document.querySelectorAll('.slick-dots');
    const dotContainer = document.querySelector('.dot-container');

    if (slickDots.length && dotContainer) {
      dotContainer.appendChild(slickDots[0]); // Move the slick dots inside your custom container
    }
  }, []);
  
  // const videos = [
  //   "https://www.youtube-nocookie.com/embed/L5S45u3gGMo?enablejsapi=1&origin=https://www.zeta.com",
  //   "https://www.youtube-nocookie.com/embed/Hij8QMAQkJ8?enablejsapi=1&origin=https://www.zeta.com",
  //   "https://www.youtube-nocookie.com/embed/tNTkkHjGsyE?enablejsapi=1&origin=https://www.zeta.com",
  //   "https://www.youtube-nocookie.com/embed/L5S45u3gGMo?enablejsapi=1&origin=https://www.zeta.com",
  //   "https://www.youtube-nocookie.com/embed/Hij8QMAQkJ8?enablejsapi=1&origin=https://www.zeta.com",
  //   "https://www.youtube-nocookie.com/embed/tNTkkHjGsyE?enablejsapi=1&origin=https://www.zeta.com",
  // ];
  const videos = [
    {
      thumbnail: img1,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/L5S45u3gGMo?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Nicole Zangl",
      designation: "Business Development Mixing Technology",
    },
    {
      thumbnail: img2,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/Hij8QMAQkJ8?enablejsapi=1&origin=https://www.zeta.com",
      name: "Josef Herzog",
      designation: "Associate Director Business Line Automation",
    },
    {
      thumbnail: img1,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/L5S45u3gGMo?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Nicole Zangl",
      designation: "Business Development Mixing Technology",
    },
    {
      thumbnail: img2,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/Hij8QMAQkJ8?enablejsapi=1&origin=https://www.zeta.com",
      name: "Josef Herzog",
      designation: "Associate Director Business Line Automation",
    },
  ];

  const prevArrow = (
    <button className="prev-arrow">
      <IoIosArrowBack
        className={`${"text-[#00223e] text-3xl lg:text-[22px] h-[50px] p-2 w-[50px] border border-[#00223e] rounded-full"}`}
      />
    </button>
  );

  const nextArrow = (
    <button className="next-arrow">
      <IoIosArrowForward
        className={`${"text-[#00223e] text-3xl lg:text-[22px] h-[50px] p-2 w-[50px] border border-[#00223e] rounded-full"}`}
      />
    </button>
  );

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    dots: true,
    // appendDots: (dots) => (
    //   <div className="custom-dots-container">
    //     <ul className="custom-dots">{dots}</ul>
    //   </div>
    // ),
    // customPaging: (i) => <div className="custom-dot"></div>,
    appendDots: (dots) => (
      <div className="dot-container flex justify-center items-center">{dots}</div>
    ),
    customPaging: (i) => (
      <div className="custom-dot"></div> // Custom dot styling
    ),
    dotsClass: "slick-dots custom-dots",
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleThumbnailClick = (index) => {
    setActiveVideoIndex(null); // Reset active video
    setTimeout(() => setActiveVideoIndex(index), 100); // Small delay to force re-render
  };

  return (
    <>
      <div className="bg-[rgb(2,46,85)] px-0 py-[70px] pb-[130px] w-full text-center">
        <div className="max-w-[1410px] w-full mx-auto px-[15px] text-white">
          <h2 class="font-bold lg:text-[57px] text-[34px] leading-[1.15789474] tracking-[0.025em] uppercase text-white text-shadow-glow">
            Our experts
          </h2>
          <div className="lg:text-[30px] text-[18px] leading-[1.33333333] font-light mt-[25px] w-[888px] max-w-full mx-auto">
            Let yourself be inspired by{" "}
            <strong className="font-bold leading-[1.33333333] text-[#80acd3]">
              insights into the most varied of topics
            </strong>{" "}
            in our “Expert Interviews”.
          </div>

          {/* <div className="slider-outer relative max-w-[1114px] w-full mx-auto mt-[35px] mb-0">
            <Slider {...sliderSettings}>
              
            </Slider>
            
          </div> */}
          <div className="relative max-w-[835px] aspect-[16/9] w-full mx-auto mt-[35px] mb-0">
            <div className="w-full h-full">
              <Slider
                {...settings}
                customPaging={(i) => (
                  <div
                    className={`custom-dot ${
                      i === currentSlide ? "active-dot" : ""
                    }`}
                  ></div>
                )}
              >
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`h-full w-full ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <div className="video-wrapper">
                      <div
                        className={`thumbnail-container ${
                          activeVideoIndex === index ? "hidden" : ""
                        }`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={`Video ${index + 1}`}
                          className="thumbnail"
                        />
                      </div>
                      {activeVideoIndex === index && (
                        <div className="video-container">
                          <iframe
                            className="iframe-video w-full h-full"
                            src={video.videoUrl}
                            title={`Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="navigation-container flex items-center justify-center gap-4 mt-[33px]">
                <button
                  className="text-[#6a929c] text-3xl lg:text-4xl border border-[#6a929c] rounded-full p-2"
                  onClick={() => document.querySelector(".slick-prev").click()}
                >
                  <IoIosArrowBack />
                </button>
                {/* Custom Dots */}
                <div className="dot-container flex justify-center items-center"></div>
                <button
                  className="text-[#6a929c] text-3xl lg:text-4xl border border-[#6a929c] rounded-full p-2"
                  onClick={() => document.querySelector(".slick-next").click()}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            {/* Names circle  */}
            {/* <div className="z-20 absolute bottom-[83px] right-[54px] transform translate-y-1/2 opacity-0 invisible pointer-events-none block w-[255px] h-[255px] rounded-full border border-[#dfe9f8] transition-opacity duration-300 ease-in-out">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block w-[90.19607843%] h-[90.19607843%] rounded-full bg-[#dfe9f8]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-2.5 box-border">
                  <h2 className="relative font-bold text-[18px] leading-[1.38888889] text-[#00223e] mb-[14.5px] pb-[6.4px]">
                    Nicole Zangl
                  </h2>
                  <div className="font-light text-[16px] leading-[1.25] text-[#80acd3]">
                    Business Development Mixing Technology
                  </div>
                </div>
              </div>
            </div> */}
            {/* Circle with Name and Designation */}
            {/* {activeVideoIndex !== null && (
              <div className="name-circle">
                <div className="inner-circle">
                  <h2 className="expert-name">
                    {videos[activeVideoIndex].name}
                  </h2>
                  <div className="expert-designation">
                    {videos[activeVideoIndex].designation}
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;
