import React from "react";
import landingpageImage from "../../assets/keyvisual-landingpage.webp";
import point from "../../assets/point1.webp";
// import mainline from "../../assets/mainpoints-start.svg";
import {
  customizedSolutionsSVG,
  innovationDriverSVG,
  timeMarketSVG,
  zahnradSVG,
} from "../../assets/svg";
import star from "../../assets/star.png";
import mainline from "../../assets/mainline.png";

const Hero = () => {
  return (
    <>
      <div className="relative bg-[#00223e] hero_section">
        <div className="background">
          <div className="SettingIconSvg absolute">{zahnradSVG}</div>
          <div className="image-carrier">
            <img
              src={landingpageImage}
              alt="landingpageImage"
              className="lg:w-full lg:h-auto object-cover"
            />
            <div className="glow star-1">
              <img src={star} alt="star" />
            </div>
            <div className="glow star-2">
              <img src={star} alt="star" />
            </div>
            <div className="glow star-3">
              <img src={star} alt="star" />
            </div>
            <div className="glow star-4">
              <img src={star} alt="star" />
            </div>
            <div className="glow star-5">
              <img src={star} alt="star" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-end lg:top-1/3 2xl:top-[45%] top-1/2 lg:pt-10 2xl:pt-0 lg:-translate-y-1/2 h-fit lg:items-center justify-center z-10">
          <div className="w-full flex flex-col lg:flex-row justify-end items-center lg:items-start">
            {/* Left Content */}
            {/* <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 h-[200px]">
              Add left content if needed
            </div> */}

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left bg-transparent">
                
                <p className="text-white pb-1 text-3xl lg:text-6xl 2xl:text-6xl uppercase text-shadow-glow tracking-wider">
                  Dendrites
                </p>
                <p className="text-white pb-1 text-4xl lg:text-6xl 2xl:text-6xl uppercase text-shadow-glow tracking-wider font-bold">
                  Technology
                </p>
                <p className="text-[#80acd3] text-lg lg:text-2xl 2xl:text-3xl lg:pt-9 2xl:pt-3 pt-4 tracking-wide font-bold">
                  Think Different
                </p>

              <div className="glowmain big-star">
                {/* <img className="w-24 h-24" src={light} alt="light" /> */}
              </div>

              <div className="flex justify-center lg:hidden gap-5 py-10">
                <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center cursor-pointer">
                  <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] rounded-full flex justify-center items-center">
                    <div className="text-center ">
                      <div className="hidden lg:flex justify-center">
                        {timeMarketSVG}
                      </div>
                      <p className="text-white font-bold text-[12px] lg:text-[16px] ">
                        Time to Market
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center cursor-pointer">
                  <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] rounded-full flex justify-center items-center">
                    <div className="text-center ">
                      <div className="hidden lg:flex justify-center">
                        {customizedSolutionsSVG}
                      </div>
                      <p className="text-white font-medium text-[12px] lg:text-[16px]">
                        Customized Solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center cursor-pointer">
                  <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] rounded-full flex justify-center items-center">
                    <div className="text-center ">
                      <div className="hidden lg:flex justify-center">
                        {innovationDriverSVG}
                      </div>
                      <p className="text-white font-medium text-[12px] lg:text-[16px]">
                        Innovation Driver
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-0 hidden lg:flex items-end lg:left-[20%] lg:justify-start z-10 lg:bottom-[5%] 2xl:bottom-[8%]"> */}
        <div className="absolute inset-0 hidden lg:flex items-end lg:justify-center z-10 lg:bottom-[5%] lg:pl-5 2xl:pl-20 pl-0">
          <div className="pb-20 lg:w-[222.5px] 2xl:w-[200px]">
            <img className="h-99" src={mainline} alt="" srcset="" />
          </div>
          <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
              <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                <div className="text-center ">
                  <div className="hidden lg:flex justify-center">
                    {timeMarketSVG}
                  </div>
                  <p className="text-[#FFFFFF] opacity-100 font-bold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-2 tracking-wide">
                    Time to <br /> Market
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-10 2xl:w-14 bg-[#80acd3] mb-20 2xl:mb-[84px]"></div>

          <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
              <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                <div className="text-center ">
                  <div className="hidden lg:flex justify-center">
                    {customizedSolutionsSVG}
                  </div>
                  <p className="text-white font-bold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-2 tracking-wide">
                    Customized Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] 2xl:w-14 w-10 bg-[#80acd3] mb-20 2xl:mb-[84px]"></div>

          <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
              <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                <div className="text-center ">
                  <div className="hidden lg:flex justify-center">
                    {innovationDriverSVG}
                  </div>
                  <p className="text-white font-bold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-2 tracking-wide">
                    Innovation <br /> Driver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex lg:items-end justify-start gap-5 z-10 top-[100px] lg:top-[140px] lg:bottom-[170px] left-[15px] lg:left-[50px]">
        <div className="w-[120px] h-[120px] lg:w-[190px] lg:h-[190px] border border-[#80acd3a1] flex justify-center items-center rounded-full">
          <div className="w-[105px] h-[105px] lg:w-[170px] lg:h-[170px] bg-[#E9E9F880] flex justify-center items-center rounded-full">
            <div className="border border-[#00223e] w-[142px] h-[142px] rounded-full flex justify-center items-center">
              <div className="text-center">
                <p className="text-[25px] text-white lg:text-[40px] font-bold">
                  72
                </p>
                <p className="text-[#00223e] font-bold text-[12px] lg:text-[13px]">
                  vacancies
                  <p className="font-normal">available!</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className="flex items-center justify-end h-full w-full text-center">
  <p className="text-white pb-1 text-4xl lg:text-6xl 2xl:text-7xl uppercase tracking-wide">
    Dendrites Technology
    <span className="text-white lg:pr-7 2xl:pr-10 block text-sm lg:text-base 2xl:text-lg opacity-60 uppercase tracking-wider pt-1">
      Think Different
    </span>
  </p>
</div> */
}
{
  /* <p className="text-white pb-1 text-3xl sm:text-5xl uppercase text-shadow-glow tracking-wide">
                Evolution
              </p>
              <p className="text-white font-bold text-3xl sm:text-5xl uppercase text-shadow-glow tracking-wide">
                of Technology
              </p> */
}

{
  /* <p className="text-lg sm:text-xl lg:text-3xl text-white lg:pt-9 pt-4">
                From Concept to Realization:
              </p>
              <p className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#90adc7] lg:pt-1 tracking-wide">
                ZETA – Your Partner for the Pharmaceutical and Biotech Industry!
              </p> */
}
