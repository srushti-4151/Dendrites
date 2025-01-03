import React from "react";
import { ProductSideshape } from "../../assets/svg";
import img1 from "../../assets/magnetic_mixing_technology.webp";
import img2 from "../../assets/solution_smartmaintenance-8b5eea96.webp"
import img3 from "../../assets/produkte_freeze&thaw_systeme_option_2-ba578626.webp"
import img4 from "../../assets/ZETA_Filterhousings_3-c06cc35a.webp"
import img5 from "../../assets/produkte_elektropolieren-5f5e38dc.webp"
import img6 from "../../assets/staubabsaugring_opt1_final-8d9c826b.webp"
import img7 from "../../assets/produkte_sterilkonnektoren-af5ece0e.webp"
import img8 from "../../assets/produkte-mouseholes-9530eb54.webp" 


const ProductOverview = () => {
  const products = [
    {
      title: "MAGNETIC MIXING AGITATOR",
      description: "Show more",
      image: img1,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img2,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img3,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img4,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img5,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img6,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img7,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: img8,
    },
  ];

  return (
    <div className="bg-[#00223E] text-white">
      {/* Header */}
      <div className="text-center py-5 px-1 md:px-2 md:py-5">
        <h2 className="text-center text-white font-bold text-[34px] md:text-5xl lg:text-6xl text-shadow-glow lg:py-7 lg:pb-5 uppercase">
          PRODUCT OVERVIEW
        </h2>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mx-auto px-0 pb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="mx-auto group max-w-[1000px] w-full bg-[#dfe9f8] lg:w-[100%] lg:h-[330px] relative flex flex-col lg:flex-row items-center rounded-md shadow-lg hover:shadow-xl overflow-hidden hover:bg-[#80acd3] transition duration-500"
          >
            {/* Image Section */}
            <div className="relative flex-shrink-0 lg:h-full lg:w-[37%] w-full lg:flex hidden md:hidden items-center justify-center bg-[#d9e9f8]">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
              {/* Svg shape */}
              <div className="absolute bottom-0 right-[-1px] h-full flex items-center justify-center group-hover:fill-[#80acd3] fill-[#dfe9f8] transition duration-500">{ProductSideshape}</div>
            </div>

            {/* Text Section */}
            <div className="relative w-full lg:w-[63%] p-6 py-9 md:p-7 md:py-12 lg:py-8 lg:pr-32 text-[#00223e]">
              <h2 className="text-[24px] leading-[25px] md:text-[35px] md:leading-[25px] lg:leading-[45px] lg:text-[42px] font-extrabold mb-5 md:mb-10 lg:mb-10 uppercase tracking-wider">
                {product.title}
              </h2>
                <a
                  href="#"
                  className="text-sm md:text-lg lg:text-lg lg:text-start font-semibold border-b border-transparent group-hover:border-[#00223e] transition-colors duration-300"
                  style={{
                    animation: "fade-in-line 0.3s ease-out forwards",
                  }}
                >
                  {product.description}
                </a>
                <div className="ml-auto absolute inset-y-0 right-[40px] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g transform="translate(344 815) rotate(180)"><g transform="translate(296 767)" fill="none" stroke="#00223e" stroke-width="1"><circle cx="24" cy="24" r="24" stroke="none"></circle><circle cx="24" cy="24" r="23.5" fill="none"></circle></g><path d="M-6866.086-3964.343h15.916v15.917" transform="translate(-1728.329 -6856.076) rotate(-135)" fill="none" stroke="#00223e" stroke-width="3"></path></g></svg>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
