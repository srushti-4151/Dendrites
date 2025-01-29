import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images1/Thumbnail_Nicole Zangl.webp";
import img2 from "../../../assets/images1/Thumbnail_Expert Herzog.webp";
import img3 from "../../../assets/images1/Thumbnail_Expert Koch.webp";
import img4 from "../../../assets/images1/Thumbnail_Expert Haibl.webp";
import img5 from "../../../assets/images1/thumbnail_martin_mayer.webp";
import img6 from "../../../assets/images1/Thumbnail_Expert_Goriupp.webp";
import "../../../assets/scss/OurExperts.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const OurExperts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null); // Track active video
  useEffect(() => {
    const slickDots = document.querySelectorAll(".slick-dots");
    const dotContainer = document.querySelector(".dot-container");

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
        "https://www.youtube-nocookie.com/embed/Hij8QMAQkJ8?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Josef Herzog",
      designation: "Associate Director Business Line Automation",
    },
    {
      thumbnail: img3,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/tNTkkHjGsyE?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Johannes Koch",
      designation: "Associate Director Business Line Engineering",
    },
    {
      thumbnail: img4,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/-sIw4G3uWSs?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Marie-Astrid Haibl",
      designation: "Head of Process Engineering",
    },
    {
      thumbnail: img5,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/Ts8daPJICdA?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Martin Mayer",
      designation: "Business Development Digital Services",
    },
    {
      thumbnail: img6,
      videoUrl:
        "https://www.youtube-nocookie.com/embed/DOnle9cJ6OE?enablejsapi=1&origin=https://www.zeta.com&autoplay=1",
      name: "Matthias Goriupp",
      designation: "Associate Director Business Line Customized Systems",
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
      <div className="dot-container flex justify-center items-center">
        {dots}
      </div>
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
      <div className="bg-[rgb(2,46,85)] px-0 lg:py-[70px] py-[40px] w-full text-center overflow-hidden">
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
          <div className="relative max-w-[1114px] w-full mx-auto mt-[35px] mb-0">
            <div className="relative w-full">
              <div className="w-full h-full ">
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
                      className={`h-full w-full relative max-w-[835px] aspect-[16/9] mx-auto ${
                        index === currentSlide ? "active" : ""
                      }`}
                      aria-hidden={index !== currentSlide ? "true" : "false"} // Hide non-active slides
                      inert={index !== currentSlide ? "true" : undefined} // Prevent focus on hidden slides
                    >
                      <div
                        className="video-wrapper"
                        tabIndex={index === currentSlide ? "0" : "-1"}
                      >
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
                    onClick={() =>
                      document.querySelector(".slick-prev").click()
                    }
                  >
                    <IoIosArrowBack />
                  </button>
                  {/* Custom Dots */}
                  <div className="dot-container flex justify-center items-center"></div>
                  <button
                    className="text-[#6a929c] text-3xl lg:text-4xl border border-[#6a929c] rounded-full p-2"
                    onClick={() =>
                      document.querySelector(".slick-next").click()
                    }
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
            {/* Circle with Name and Designation */}
            <div>
              {activeVideoIndex === null && (
                <div className="name-circle lg:flex hidden">
                  <div className="inner-circle">
                    <h2 className="expert-name">{videos[currentSlide].name}</h2>
                    <div className="expert-designation">
                      {videos[currentSlide].designation}
                    </div>
                  </div>
                </div>
              )}
              {activeVideoIndex === null && (
                <div className="relative bg-transparent lg:hidden flex items-center justify-center text-center">
                  <div className="bg-transparent flex flex-col justify-center items-center p-2">
                    <h2 className="relative text-[20px] mb-4 pb-1 font-bold text-[#fff]">
                      {videos[currentSlide].name}
                    <span className="block w-[52px] h-[1px] bg-[#fff] absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
                    </h2>
                    <div className="text-[16px] text-[#80acd3]">
                      {videos[currentSlide].designation}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;
