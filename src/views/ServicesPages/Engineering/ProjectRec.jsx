import React from "react";
import projimage from "../../../assets/Projectphasen_new.webp";
import { Link } from "react-router-dom";

const ProjectRec = () => {
  return (
    <>
      <div className="bg-[#00223E] text-white">
        <div className="max-w-[1410px] w-full mx-auto lg:px-[15px] lg:py-[100px]">
          {/* Header */}
          <div className="text-center py-5 px-1 md:px-2 md:py-5">
            <h2 className="text-center text-white font-bold text-[34px] md:text-3xl lg:text-[40px] lg:py-7 lg:pb-5 uppercase">
              Projects in record time
            </h2>
            <div class="font-normal text-[20px] md:text-[25px] lg:text-[30px] text-center">
              <p>
                Time to market: With ZETA's project management <br />
                <strong>up to 50 % faster to market.</strong>
              </p>
            </div>
          </div>

          {/* Project image */}
          <div className="w-full h-full p-5">
            <img
              src={projimage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* button  */}
          <div className="w-full h-full mt-[20px] flex justify-center">
            <Link
              to="#"
              className="group btn px-6 py-2 border-2 bg-[#96E8CA] border-[#96E8CA] text-[#00223E] rounded-md hover:bg-transparent hover:text-[#96E8CA] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.571"
                height="14.387"
                viewBox="0 0 21.571 14.387"
                className="group-hover:fill-[#96E8CA] fill-[#00223e] transition duration-300"
              >
                <path
                  d="M21.632,11.527a.979.979,0,0,0-.007,1.379l4.556,4.563H8.842a.974.974,0,0,0,0,1.948H26.172L21.617,23.98a.986.986,0,0,0,.007,1.379A.97.97,0,0,0,23,25.351l6.174-6.219h0a1.094,1.094,0,0,0,.2-.307.93.93,0,0,0,.075-.375.977.977,0,0,0-.277-.682L23,11.55A.954.954,0,0,0,21.632,11.527Z"
                  transform="translate(-7.875 -11.252)"
                ></path>
              </svg>
              <span>View all Phases!</span>
            </Link>
          </div>

          {/* header-2 */}
          <div class="max-w-[800px] w-full mx-auto pt-[140px]">
            <h3 class="pb-5 font-bold text-4xl leading-[1.15] uppercase text-center">
              Interdisciplinary Project Team
            </h3>
            <div class="font-light leading-[1.33333333] text-center">
              <p className="lg:text-[30px]">
                Different teams work with you on an
                <span className="text-[#c2e0f4]">
                  {" "}
                  <span className="text-[#80acd3]">
                    <strong className="font-bold tracking-wide">
                      interdisciplinary basis
                    </strong>
                  </span>
                </span>{" "}
                in every phase of the process!
              </p>
            </div>
          </div>

          {/*cirles part*/}
          <div className="max-w-[1063px] w-fl mx-auto text-center px-4">
            {/* chart container */}
            <div className="grid grid-cols-1 lg:grid-cols-[160px_auto] gap-4 w-full text-left h-auto pt-[50px]">
              {/* navigation */}
              <div className="pr-20 pb-[50px] w-full max-w-[160px]">
                <strong className="relative block font-ubuntu font-bold text-[25px] leading-[1.16] text-[#80acd3] pb-[14px]">
                  Phase
                </strong>
                <ul className="block text-center mt-5">
                  <li className="relative block font-bitter font-bold text-[57px] leading-[1.19298246] tracking-[0.025em] text-[#ffffff] h-[70px]">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 block top-1/2 left-1/2 w-full">
                      01
                    </span>
                  </li>
                  <li className="relative block font-bitter font-bold text-[18px] leading-[1.19298246] tracking-[0.025em] text-[#80acd3] h-[70px]">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 block top-1/2 left-1/2 w-full">
                      02
                    </span>
                  </li>
                  <li className="relative block font-bitter font-bold text-[18px] leading-[1.19298246] tracking-[0.025em] text-[#80acd3] h-[70px]">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 block top-1/2 left-1/2 w-full">
                      03
                    </span>
                  </li>
                  <li className="relative block font-bitter font-bold text-[18px] leading-[1.19298246] tracking-[0.025em] text-[#80acd3] h-[70px]">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 block top-1/2 left-1/2 w-full">
                      04
                    </span>
                  </li>
                </ul>
              </div>
              {/* circles */}
              <div className="relative w-full h-full max-w-[871px]">
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  <div className="absolute w-full h-full left-0">
                    {/* Circle Items */}
                    <div className="absolute left-0 top-1/2 transform translate-x-0 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#1a70bb] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        Project <br />
                        Managers
                      </div>
                    </div>
                    <div className="absolute left-[23%] top-0 transform -translate-x-1/2 translate-y-0 w-[134.244px] h-[134.244px] bg-[#1a70bb] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        Process
                        <br />
                        Engineer
                      </div>
                    </div>
                    <div className="absolute left-[29%] top-[51%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        HVAC - <br />
                        BMS/EMS <br />
                        Engineers
                      </div>
                    </div>
                    <div className="absolute left-[18%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 w-[86.29px] h-[86.29px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[12px] text-[#00223e]">
                      Mathema­tical <br/>Analysts
                      </div>
                    </div>
                    <div className="absolute left-[46%] top-[10%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        Cleanroom <br/>Experts 
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-transparent border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#fff]">
                      Your <br />company!
                      </div>
                    </div>

                    <div className="absolute left-[69%] top-0 transform -translate-x-1/2 translate-y-0 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                      Automation <br />Expert
                      </div>
                    </div>

                    <div className="absolute left-[72%] top-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#1a70bb] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                      Bio­technology <br />Expert
                      </div>
                    </div>

                    <div className="absolute left-[59%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                      Civil <br />Engineers
                      </div>
                    </div>

                    <div className="absolute left-[88%] top-[33%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        EIC Engineers
                      </div>
                    </div>

                    <div className="absolute left-[92%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                       Mechanical <br />Engineer
                      </div>
                    </div>
                    <div className="absolute left-[38%] top-[90%] transform -translate-x-1/2 -translate-y-1/2 w-[134.244px] h-[134.244px] bg-[#cee1fd] border-transparent border border-white rounded-full transition-all duration-300 ease-in-out">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[10px] text-center transition-all duration-300 ease-in-out uppercase text-shadow-none font-medium text-[18px] text-[#00223e]">
                        Logistics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* modes */}
            <div className="inline-block text-center mt-[70px]">
              <div className="text-[#cee1fd] inline-block text-center py-4 px-6 uppercase">
                <span class="bg-[#cee1fd] text-center border-transparent inline-block w-6 h-6 rounded-full mr-4 -mb-[7px]"></span>
                 <span>low</span>
              </div>
              <div className="text-[#a5d4fd] inline-block items-center py-4 px-6 uppercase">
                <span class="bg-[#a5d4fd] text-center border-transparent inline-block w-6 h-6 rounded-full mr-4 -mb-[7px]"></span>
                 <span>Moderate</span>
              </div>
              <div className="text-[#62abe8] inline-block items-center py-4 px-6 uppercase">
                <span class="bg-[#62abe8] text-center border-transparent inline-block w-6 h-6 rounded-full mr-4 -mb-[7px]"></span>
                 <span>Strong</span>
              </div>
              <div className="text-[#1a70bb] inline-block items-center py-4 px-6 uppercase">
                <span class="bg-[#1a70bb] text-center border-transparent inline-block w-6 h-6 rounded-full mr-4 -mb-[7px]"></span>
                 <span>Very Strong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectRec;
