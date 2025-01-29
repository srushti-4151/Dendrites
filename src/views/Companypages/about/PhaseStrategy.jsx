import React from "react";
import strategy from "../../../assets/about_purchasing_strategy-b9d82b1d.webp";

const PhaseStrategy = () => {
  return (
    <div className="bg-[rgb(2,46,85)] overflow-hidden">
      <div className="max-w-[1410px] w-full mx-auto pt-[50px] bg-[rgb(2,46,85)]">
        <div className="max-w-[1310px] w-full mx-auto px-[15px] bg-[rgb(2,46,85)] flex lg:flex-row flex-col-reverse items-center justify-center">
          {/* text-container */}
          <div className="max-w-[508px] w-full lg:pt-0 pt-[30px]">
            <h3 className="font-bold lg:text-[40px] text-[25px] leading-[1.15] tracking-[0.025em] text-[#80acd3] uppercase">
              Purchasing <br /> Strategy
            </h3>

            <div className="font-light text-white lg:text-[16px] text-[13px] leading-[1.53846154] mt-6 text-left">
              <p>
                <strong>
                  Managing complexity in project management - use ZETA's
                  know-how as a supply chain professional!
                </strong>
              </p>

              <p className="my-4">
                The classic functions of the supply chain such as purchasing,
                material disposition and warehouse logistics are supplemented at
                ZETA by the functions of stock list responsibility, certificate
                management, and supplier quality assurance (SQA).
              </p>

              <p>
                The focus is always on the optimal handling of the material flow
                together with the suppliers and right up to the customer.
              </p>
            </div>
          </div>
          {/* image-container */}
          <div className="lg:pl-[25px] pl-0">
            <div className="lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] relative border border-[#fff] rounded-full flex justify-center items-center">
              <img
                src={strategy}
                alt="img"
                className="w-[95%] h-[95%] object-cover rounded-full object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseStrategy;
