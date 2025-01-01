import React from "react";
import { FaArrowRight } from "react-icons/fa";
import productImage from "../../assets/magnetic_mixing_technology.webp";

const ProductOverview = () => {
  const products = [
    {
      title: "MAGNETIC MIXING AGITATOR",
      description: "Show more",
      image: productImage,
    },
    {
      title: "SMART TOOLS",
      description: "Show more",
      image: productImage, 
    },
  ];

  return (
    <div className="bg-[#002c5c] text-white">
      {/* Header */}
      <div className="text-center py-10">
        <h2 className="text-center text-white font-bold text-4xl lg:text-6xl text-shadow-glow lg:py-14 lg:pb-24 pb-5 uppercase">
          PRODUCT OVERVIEW
        </h2>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#e8f1f8] text-[#00223e] flex flex-col lg:flex-row items-center rounded-md shadow-lg hover:shadow-xl transition"
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg object-cover w-full h-48 lg:h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-6 flex flex-col justify-between">
              <h2 className="text-[24px] lg:text-[28px] font-bold mb-2 uppercase">
                {product.title}
              </h2>
              <div className="flex items-center gap-2 mt-auto">
                <a
                  href="#"
                  className="text-sm lg:text-md font-semibold underline hover:text-[#407eb1] transition"
                >
                  {product.description}
                </a>
                <div className="ml-auto">
                  <FaArrowRight
                    className="text-[#407eb1] hover:text-[#175b9b] transition"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
