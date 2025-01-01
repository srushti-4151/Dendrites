// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import productImage from "../../assets/magnetic_mixing_technology.webp";
// import { ProductSideshape } from "../../assets/svg";

// const ProductOverview = () => {
//   const products = [
//     {
//       title: "MAGNETIC MIXING AGITATOR",
//       description: "Show more",
//       image: productImage,
//     },
//     {
//       title: "SMART TOOLS",
//       description: "Show more",
//       image: productImage,
//     },
//   ];

//   return (
//     <div className="bg-[#002c5c] text-white">
//       {/* Header */}
//       <div className="text-center py-10">
//         <h2 className="text-center text-white font-bold text-4xl lg:text-6xl text-shadow-glow lg:py-14 lg:pb-24 pb-5 uppercase">
//           PRODUCT OVERVIEW
//         </h2>
//       </div>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-[#e8f1f8] relative text-[#00223e] flex flex-col lg:flex-row items-center rounded-md shadow-lg hover:shadow-xl transition"
//           >
//             <div className="bgproductover relative table-cell w-[360px] h-[100%]">
//               {/* Image Section */}
//               <div className="w-full h-full lg:w-1/2 absolute">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="object-cover w-full"
//                 />
//               </div>
//               {/*svg*/}
//               <div className="h-full w-auto">{ProductSideshape}</div>
//             </div>

//             {/* Text Section */}
//             <div className="relative w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-6 flex flex-col justify-between">
//               <h2 className="text-[24px] lg:text-[28px] font-bold mb-2 uppercase">
//                 {product.title}
//               </h2>
//               <div className="flex items-center gap-2 mt-auto">
//                 <a
//                   href="#"
//                   className="text-sm lg:text-md font-semibold underline hover:text-[#407eb1] transition"
//                 >
//                   {product.description}
//                 </a>
//                 <div className="ml-auto">
//                   <FaArrowRight
//                     className="text-[#407eb1] hover:text-[#175b9b] transition"
//                     size={24}
//                   />
//                 </div>
//               </div>
//             </div>
        
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductOverview;
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import productImage from "../../assets/magnetic_mixing_technology.webp";
import { ProductSideshape } from "../../assets/svg";

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
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mx-auto px-0 lg:px-44 pb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#e8f1f8] h-[170px] lg:h-[330px] lg:w-[100%] relative flex flex-col lg:flex-row items-center rounded-md shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative flex-shrink-0 lg:w-[35%] w-full lg:flex hidden items-center justify-center bg-[#d9e9f8]">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
              {/* Svg shape */}
              <div className="absolute bottom-0 right-[-1px]">{ProductSideshape}</div>
            </div>

            {/* Text Section */}
            <div className="relative w-full lg:w-[65%] p-6 lg:py-8 lg:pr-32 text-[#00223e]">
              <h2 className="text-[24px] leading-[25px] lg:leading-[45px] lg:text-[42px] font-extrabold mb-4 uppercase tracking-wider">
                {product.title}
              </h2>
                <a
                  href="#"
                  className="text-sm lg:text-lg lg:text-start font-semibold hover:underline transition mt-5"
                >
                  {product.description}
                </a>
                <div className="ml-auto absolute top-1/2 right-[40px]">
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
