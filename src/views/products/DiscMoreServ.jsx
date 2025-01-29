import React from "react";
import img1 from "../../assets/customer_care_verlinkung.webp";
import img2 from "../../assets/digi_opt1_final.webp";
import img3 from "../../assets/automation_opt2_final.webp";
import { ServiceSvg, SolutionSvg, AutomSvg } from "../../assets/svg";

const DiscMoreServ = () => {
  const servdata = [
    {
      image: img1,
      heading: "SERVICE",
      icon: ServiceSvg,
      title: "General Planning",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
    {
      image: img2,
      heading: "SOLUTIONS",
      icon: SolutionSvg,
      title: "Digitalization",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
    {
      image: img3,
      heading: "SOLUTIONS",
      icon: AutomSvg,
      title: "Process Solutions",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
  ];

  return (
    <>
      <div className="bg-[#00223E] overflow-hidden">
        <div className="lg:max-w-[1400px] 2xl:max-w-[1400px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full lg:py-24 2xl:py-24 py-16 lg:px-5 2xl:px-5 px-4 bg-[#00223E]">
          <h1 className="text-shadow-glow text-white font-light lg:text-4xl 2xl:text-4xl text-2xl leading-[1.15] tracking-[0.025em] text-center uppercase m-0">
            Discover <br />
            <strong className="font-bold">more services</strong>
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 lg:gap-5 md:gap-5 2xl:gap-7 gap-6 mt-[50px]">
            {servdata.map((data, index) => (
              <div
                key={index}
                className="border-transparent border rounded-[5px] block w-full 2xl:max-w-[446px] 2xl:h-[535px] lg:max-w-[446px] lg:h-[535px] md:max-w-[570px] md:h-[490px] max-w-[570px] h-[470px] overflow-hidden"
              >
                <div className="relative w-full h-full top-0 left-0">
                  <img
                    src={data.image}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                  <div
                    className="lg:block hidden absolute inset-0 
                    bg-gradient-to-r
                    from-white/15 
                    via-white/5 to-transparent
                    z-10"
                  ></div>
                  <div
                    className="lg:hidden block absolute inset-0 
                    bg-gradient-to-r
                    from-white/55 
                    via-white/55 to-white/55
                    z-10"
                  ></div>
                  {/* <div
                    className="absolute top-0 right-0 h-full w-[68%] lg:bg-[#6a929c] 2xl:bg-[#6a929c] bg-[#81A1BE] lg:opacity-60 2xl:opacity-60 opacity-0"
                    style={{
                      clipPath: "ellipse(100% 120% at 100% 50%)",
                    }}
                  ></div> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="1440"
                    height="900"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                    className="absolute top-0 right-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="wb_a"
                        x1="-0.051"
                        y1="0.73"
                        x2="1.034"
                        y2="0.557"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                      <clipPath id="wb_b">
                        <rect
                          width="1025"
                          height="900"
                          transform="translate(415)"
                          fill="#fff"
                          stroke="#707070"
                          strokeWidth="1"
                        />
                      </clipPath>
                    </defs>
                    <g transform="translate(13523 4750)">
                      <rect
                        width="1440"
                        height="900"
                        transform="translate(-13523 -4750)"
                        fill="url(#wb_a)"
                      />
                      <g
                        transform="translate(-13523 -4750)"
                        clipPath="url(#wb_b)"
                      >
                        <path
                          d="M830.82-16.012c10.969,12.472,830.82,1084.706,830.82,1543.556,0,362.488-232.143,670.756-556.3,784.4a828.9,828.9,0,0,1-274.521,46.425C371.971,2358.364,0,1986.393,0,1527.543S819.851-28.484,830.82-16.012Z"
                          transform="translate(451.541 -1217.519)"
                          fill="#80acd3"
                          opacity="0.25"
                          style={{
                            mixBlendMode: "multiply",
                            isolation: "isolate",
                          }}
                        />
                      </g>
                    </g>
                  </svg>
                  {/* text container */}
                  <div className="w-full h-full relative z-30 p-10 lg:pt-48 2xl:pt-48 pt-[120px]">
                    <div className="relative flex justify-center items-center w-[100px] h-[100px] border border-[#002a4d] rounded-full overflow-hidden">
                      <div className="flex justify-center items-center text-center w-[60px] h-[60px]">
                        {data.icon}
                      </div>
                    </div>
                    <h4 className="z-100 text-[#002a4d] text-lg absolute top-[37px] left-[40px] uppercase">
                      {data.heading}
                    </h4>
                    <div className="z-70 font-bold min-h-[70px] text-[30px] leading-[1.16666667] tracking-[0.025em] text-[#002a4d] mt-6">
                      {data.title}
                    </div>
                    <div className="font-light text-[13px] leading-[1.38461538] text-[#002a4d] mt-[9px]">
                      {data.desc}
                    </div>
                    <div className="mt-[30px] text-lg font-bold text-[#002a4d]">
                      {" "}
                      <span className="border-b border-[#002a4d]">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscMoreServ;
