import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/pblogimg1.webp";
import img2 from "../../assets/pbloimg2.webp";
import img3 from "../../assets/pblogimg3.webp"
import img4 from "../../assets/pblogimg4.webp"

const ProductBlog = () => {
  return (
    <>
      <div className="bg-[#00223E]">
        <div className="lg:max-w-[1400px] 2xl:max-w-[1400px] py-[150px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full lg:px-5 2xl:px-5 px-4 bg-[#00223E]">
          <h2 className="mb-12 mx-auto w-full text-center text-[50px] leading-[1.15] tracking-[0.025em] uppercase text-white m-0">
            <strong className="font-bold text-shadow-glow">
              Interesting insights to products
            </strong>
            <br /> in our blog
          </h2>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Column 1 - Two Rows */}
            <div className="grid grid-rows-2 gap-6">
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
                  <p className="text-[#00223E] text-sm">29.02.2024</p>
                  <h3 className="text-[#00223E] text-[15px] font-medium mb-4">
                    Event: ACHEMA 2024
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
              <div className="relative bg-[#80acd3] rounded-lg shadow-lg h-[180px] overflow-hidden">
                <div className="p-4">
                  <p className="text-[#00223E] text-sm mb-2">15.02.2024</p>
                  <h3 className="text-[#00223E] text-lg font-medium mb-2">
                    Feature Article: How ZETA Drives Innovation
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - one Row */}
            <div className="grid grid-rows-1 gap-6">
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
                <div className="absolute p-4 bg-white bg-opacity-70 rounded-lg bottom-0">
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

            {/* Column 3 - Two Rows */}
            <div className="grid grid-rows-2 gap-1">
              <div className="relative bg-[#80acd3] rounded-lg shadow-lg h-[180px] overflow-hidden">
                <div className="p-4">
                  <p className="text-[#00223E] text-sm mb-2">06.07.2023</p>
                  <h3 className="text-[#00223E] text-lg font-medium mb-2">
                    Interview: Georg Pöschl - Product Development
                  </h3>
                  <a href="#" className="text-[#00223E] text-sm underline">
                    Read now
                  </a>
                </div>
              </div>
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-[#143e5c] rounded-lg shadow-lg overflow-hidden">
                  <Link to="#">
                    <img
                      src={img3}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="relative p-4 bg-white bg-opacity-70 rounded-lg mt-[135.984px] min-h-[95.984px]">
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

            {/* Column 4 - one Row */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBlog;
