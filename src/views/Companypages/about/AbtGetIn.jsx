import React from "react";
import "../../../assets/scss/AbtGetIn.scss";
import img from "../../../assets/thomas_engelmaier.webp";
import { Link } from "react-router-dom";

const AbtGetIn = () => {
  return (
    <>
      <div className="bg-[rgb(2,46,85)] overflow-hidden">
        <div className="bg-[rgb(2,46,85)] lg:py-[70px] mdLpy-[70px] py-[43px] abt-get">
          <div className="lg:max-w-[1410px] w-full mx-auto px-[15px] box-border">
            <div className="flex lg:flex-row flex-col items-center lg:max-w-[1090px] w-full mt-[34px] mx-auto">
              <div className="">
                <div className="lg:w-[340px] lg:h-[340px] w-[250px] h-[250px] relative border border-[#fff] rounded-full flex justify-center items-center">
                  <img
                    src={img}
                    alt="img"
                    className="w-[90%] h-[90%] object-cover rounded-full object-center"
                  />
                </div>
              </div>
              <div className="text-container lg:pl-[53px] pl-0 lg:mt-0 mt-5">
                <blockquote className="getin-blockquote lg:text-[23px] text-[14px] block">
                  <div className="quote-text">
                    <p className="abtquote inline-block lg:font-bold leading-[1.15789474] text-white">
                      Through consistent and, above all, actively practiced
                      project management, we are able to implement your projects
                      not only in high quality, but also on time and on budget.
                    </p>
                  </div>
                </blockquote>
                <div className="mt-7 font-light lg:text-[18px] text-[13px] leading-[1.2] text-[#41729c]">
                  <strong>
                    Contact: <span>Thomas Engelmaier</span>
                  </strong>
                  <br />
                  <span className="job block">
                    Corporate Head of Project Management
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-[50px] flex justify-center">
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
                <span>Get in touch!</span>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="px-0 w-full pt-[50px]">
          <div className="max-w-[1410px] w-full mx-auto px-[15px]">
            <div className="max-w-[1310px] w-full mx-auto px-[15px] flex lg:flex-row flex-col items-center justify-center">
       
              <div className="max-w-[508px] w-full">
                <h3 className="font-bold text-[40px] leading-[1.15] tracking-[0.025em] text-[#80acd3] uppercase">
                  Purchasing <br /> Strategy
                </h3>

                <div className="font-light text-white text-[16px] leading-[1.53846154] mt-6 text-left">
                  <p>
                    <strong>
                      Managing complexity in project management - use ZETA's
                      know-how as a supply chain professional!
                    </strong>
                  </p>

                  <p className="my-4">
                    The classic functions of the supply chain such as
                    purchasing, material disposition and warehouse logistics are
                    supplemented at ZETA by the functions of stock list
                    responsibility, certificate management, and supplier quality
                    assurance (SQA).
                  </p>

                  <p>
                    The focus is always on the optimal handling of the material
                    flow together with the suppliers and right up to the
                    customer.
                  </p>
                </div>
              </div>
              
              <div className="pl-[25px]">
                <div className="w-[460px] h-[460px] relative border border-[#fff] rounded-full flex justify-center items-center">
                  <img
                    src={strategy}
                    alt="img"
                    className="w-[95%] h-[95%] object-cover rounded-full object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AbtGetIn;
