import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/pblogimg1.webp";
import img2 from "../../assets/pbloimg2.webp";
import img3 from "../../assets/pblogimg3.webp";
import img4 from "../../assets/pblogimg4.webp";

const ProductBlog = () => {
  return (
    <>
      <div className="bg-[#00223E]">
        <div className="lg:max-w-[1410px] lg:w-full 2xl:w-full 2xl:max-w-[1410px] lg:py-[100px] 2xl:py-[100px] py-[50px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full lg:px-4 2xl:px-0 px-4 bg-[#00223E]">
          <h2 className="mb-12 mx-auto w-full text-center lg:text-[40px] 2xl:text-[40px] text-[24px] leading-[1.15] tracking-[0.025em] uppercase text-white m-0">
            <strong className="font-bold text-shadow-glow">
              Interesting insights to products
            </strong>
            <br /> in our blog
          </h2>

           {/* Grid Layout */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1 - Two Rows */}
            <div className="grid grid-rows-2 gap-0 max-h-full h-[428px] overflow-hidden">
              <div className="relative row-span-2 w-full h-full">
                <div className="absolute w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                  <Link to="#">
                    <img
                      src={img1}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute w-full p-4 bg-white bg-opacity-70 rounded-lg mt-[135.984px] bottom-0">
                  <p className="text-[#00223E] text-sm">23.08.2024</p>
                  <h3 className="text-[#00223E] text-[15px] font-medium mb-4">
                    Feature Article: Early-stage Engineering
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
              <div className="relative bg-[#80acd3] rounded-lg shadow-lg h-[150px] overflow-hidden lg:mb-4 md:mb-0 mt-5">
                <div className="p-5">
                  <p className="text-[#00223E] text-sm">15.02.2024</p>
                  <h3 className="text-[#00223E] leading-5 text-lg font-medium mb-5">
                    Feature Article: How Dendrites Drives Innovation
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - One Row */}
            <div className="grid grid-rows-1 gap-6 max-h-full h-[428px]">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                  <Link to="#">
                    <img
                      src={img2}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="w-full absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0">
                  <p className="text-[#00223E] text-sm">29.02.2024</p>
                  <h3 className="text-[#00223E] text-[15px] font-semibold mb-4 leading-[20px]">
                    Interview: Thomas Maischberger - Research and Development at
                    Dendrites
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3 - Two Rows (Hidden on Medium Screens) */}
            <div className="hidden lg:grid gap-0 max-h-full h-[428px] overflow-hidden">
              <div className="relative bg-[#80acd3] rounded-lg shadow-lg h-[150px] overflow-hidden">
                <div className="p-5">
                  <p className="text-[#00223E] text-sm">08.01.2024</p>
                  <h3 className="text-[#00223E] leading-5 text-lg font-medium mb-5">
                    Feature Article: Automation solutions for pharma
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
              <div className="relative w-full h-[248px] overflow-hidden mt-5">
                <div className="absolute w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                  <Link to="#">
                    <img
                      src={img3}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0 w-full">
                  <p className="text-[#00223E] text-sm">16.05.2023</p>
                  <h3 className="text-[#00223E] text-[15px] font-medium mb-4">
                    White Paper: Advancements in the field of high-shear mixers
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4 - One Row (Hidden on Medium Screens) */}
            <div className="hidden lg:grid grid-rows-1 gap-6 max-h-full h-[428px]">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                  <Link to="#">
                    <img
                      src={img4}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0 w-full">
                  <p className="text-[#00223E] text-sm">03.05.2023</p>
                  <h3 className="text-[#00223E] text-[15px] font-semibold mb-4 leading-[20px]">
                    Product: Cleanroom wall ducts
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*mobile view */}
          <div className="lg:hidden 2xl:hidden md:hidden grid grid-cols-1 gap-4">
            <div className="relative w-full h-full max-h-[240px]">
              <div className="w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                <Link to="#">
                  <img
                    src={img1}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-70 rounded-lg">
                <p className="text-[#00223E] text-sm">29.02.2024</p>
                <h3 className="text-[#00223E] text-[15px] font-medium mb-4">
                  Event: ACHEMA 2024
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>

            <div className="relative bg-[#80acd3] rounded-lg shadow-lg overflow-hidden h-full max-h-[111px]">
              <div className="p-4">
                <p className="text-[#00223E] text-[14px]">15.02.2024</p>
                <h3 className="text-[#00223E] text-[13px] font-medium mb-2">
                  Feature Article: How ZETA Drives Innovations
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[387px]">
              <div className="w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                <Link to="#">
                  <img
                    src={img2}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="w-full absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0">
                <p className="text-[#00223E] text-sm">29.02.2024</p>
                <h3 className="text-[#00223E] text-[15px] font-semibold mb-4 leading-[20px]">
                  Interview: Thomas Maischberger - Research and Development at
                  Dendrites
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>

            <div className="relative bg-[#80acd3] rounded-lg shadow-lg overflow-hidden h-full max-h-[111px]">
              <div className="p-4">
                <p className="text-[#00223E] text-[14px]">06.07.2023</p>
                <h3 className="text-[#00223E] text-[13px] font-medium mb-2">
                  Interview: Georg Pöschl - Product Development
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>

            <div className="relative w-full h-full max-h-[255px]">
              <div className="w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                <Link to="#">
                  <img
                    src={img3}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-70 rounded-lg">
                <p className="text-[#00223E] text-sm">16.05.2023</p>
                <h3 className="text-[#00223E] text-[15px] font-medium mb-4">
                  White Paper: Advancements in the field of high-shear mixers
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[387px]">
              <div className="w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                <Link to="#">
                  <img
                    src={img4}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="w-full absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0">
                <p className="text-[#00223E] text-sm">03.05.2023</p>
                <h3 className="text-[#00223E] text-[15px] font-semibold mb-4 leading-[20px]">
                  Product: Cleanroom wall ducts
                </h3>
                <a href="#" className="text-[#00223E] text-sm underline">
                  Read now
                </a>
              </div>
            </div>
          </div>

          {/* button */}
          <div className="mt-12 flex justify-center">
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

              <span>More articles!</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBlog;
