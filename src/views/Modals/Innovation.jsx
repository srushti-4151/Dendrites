import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/scss/Servics.scss";
import {
    ResAndDev,
    SuccStories,
    FeatureArticles,
  sideshape,
  mobileSideshape,
  SearchIcon,
  MobileSearchIcon,
  CloseSearchIcon,
  CloseModalIcon,
} from "../../assets/svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/ModalSlice";
import { FaArrowLeftLong } from "react-icons/fa6";

const Innovation = () => {
  const innovation = [
    {
      image: ResAndDev,
      title: "Research & Development",
      description: "Multi-brand PLC and SCADA based solutions",
    },
    {
      image: SuccStories,
      title: "Success Stories",
      description: "IoT hardware and Centralized software-based solution",
    },
    {
      image: FeatureArticles,
      title: "Feature Articles",
      description:
        "We combine HVAC, cleanroom and the entire process technology under one roof.",
    },
  ];
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal()); //close the modal
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleCollapse = () => {
    // console.log("Closing...");
    // console.log("isExpanded:", isExpanded);
    setIsExpanded(false);
    // console.log("isExpanded after:", isExpanded);
  };

  // useEffect(() => {
  //   console.log("isExpanded onchange:", isExpanded);
  // }, [isExpanded]);

  return (
    <>
      <Navbar />
      <div className="lg:block hidden modal-overlay z-5"></div>
      <div className="lg:flex w-full hidden outer bg-blue-900 text-white">
        <div className="w-1/2 max-w-[700px] service-container mx-auto">
          <div className="scrollbar-modal">
            <div className="py-20 w-[75%]">
              <h3 className="text-white font-bold text-4xl lg:text-5xl text-shadow-glow pb-14 uppercase tracking-wide">
                Innovation
              </h3>
              <div className="grid grid-row-1 sm:grid-row-2 gap-2">
                {innovation.map((service, index) => (
                  <Link
                    key={index}
                    className="group rounded-lg pb-5 text-white transition flex flex-row items-center"
                  >
                    {" "}
                    <div className="w-[100px] h-[100px] border border-[#80acd3a1] flex justify-center items-center rounded-full">
                      <div className="w-[86px] h-[86px] rounded-full flex justify-center items-center group-hover:bg-[#80acd3a1] duration-300">
                        {service.image}
                      </div>{" "}
                    </div>
                    <div className="p-2 pl-6 w-[83%]">
                      <h3 className="text-white font-bold text-2xl lg:text-3xl text-shadow-glow tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white pt-2 font-light opacity-60">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 max-w-[650px] py-10 group transition h-screen">
          <div className="sideshapesvg text-[#80acd3] opacity-50 transition-opacity duration-500 group-hover:opacity-100">
            {sideshape}
          </div>
          <div className="relative px-16 pl-32 py-36 z-20">
            <form>
              <div className="flex justify-between mb-10">
                <h3 className="uppercase text-3xl font-bold text-[#00223E] ">
                  Easy Search
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-3xl font-bold text-[#00223E]"
                >
                  {CloseModalIcon}
                </button>
              </div>

              <div className="relative p-2 z-20 flex items-center gap-2 w-[90%] focus:outline-none mb-6 rounded-lg bg-transparent border border-[#153063] group-hover:border-white group-hover:text-white duration-500 text-white">
                {/* Search Icon */}
                <span className="text-[#00223E] px-2">{SearchIcon}</span>

                {/* input container */}
                <div className="input-container flex items-center relative w-full">
                  {/* Search Input */}
                  <input
                    id="search"
                    placeholder=" " //do not remove this
                    autoComplete="off"
                    className="focus:outline-none mt-2 rounded-lg bg-transparent text-white"
                  />
                  {/* Label */}
                  <label
                    htmlFor="search"
                    className="text-white opacity-50 group-hover:opacity-100 duration-500 tracking-wide"
                  >
                    Your <strong>search terms</strong>
                  </label>

                  <Link className="mr-2 close-button">{CloseSearchIcon}</Link>
                </div>
              </div>
              <div className="pt-10 group flex flex-wrap gap-4">
                {[
                  "Cultured Meat",
                  "Products",
                  "Building Equipment",
                  "Dendrites",
                  "Digitalisation",
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`text-lg px-3 py-2 bg-transparent border border-[#0f2550] text-[#153063] rounded-lg transition-colors duration-500
                    group-hover:border-white group-hover:text-white 
                    group-hover:hover:text-[#1c2b47]
                    hover:bg-white !hover:text-[#1c2b47]
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>

      <nav className="lg:hidden flex flex-col h-screen sub-outer">
        {/* <div className="flex-grow w-full h-[60%] sub-service-container mx-auto"> */}
        <div
          className={`w-full ${
            isExpanded ? "" : "h-[60%]"
          } flex-grow w-full sub-service-container mx-auto`}
        >
          {/* <div className="absolute w-full h-full bg-gradient-to-t from-[#272c55] via-[#272c55]/80 to-transparent"></div> */}
          <div className="sub-scrollbar-modal">
            <div className="pl-3 uppercase tracking-wide py-4 flex items-center gap-4 headline text-[29px] font-bold border-b border-t border-gray-500">
              <button
                onClick={handleCloseModal}
                className="cursor-pointer focus:outline-none p-0 m-0"
              >
                <FaArrowLeftLong />
              </button>{" "}
              innovation
            </div>
            <ul className="">
              {innovation.map((service, index) => (
                <div key={index} className="border-b border-gray-500 py-4">
                  <li className="flex items-center">
                    <div className="text-[23px] font-bold pl-3">
                      {service.title}
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="w-full h-[40%]"> */}
        <div
          className={`w-full 
           ${isExpanded ? "min-h-screen bg-[#7eabd5]" : "h-[40%]"} 
         transition-all duration-700 ease-in-out`}
        >
          <div
            className={`sub-sideshapesvg text-[#77a7d1] 
             ${isExpanded ? "top-0 bg-[#7eabd5]" : "bottom-0"} 
           transition-all duration-700 ease-in-out`}
          >
            {mobileSideshape}
          </div>
          <div className="relative z-20 pt-10 pl-4 tracking-wider">
            <form className="w-full">
              <div className="mb-5 mt-12">
                <h3 className="uppercase text-3xl font-semibold text-[#00223E] ">
                  Easy Search
                </h3>
              </div>

              <div
                onClick={handleExpand}
                className="relative p-2 z-20 flex items-center gap-2 w-[90%] focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white"
              >
                {/* Search Icon */}
                <span className="text-[#ffffff] px-2">{MobileSearchIcon}</span>

                {/* input container */}
                <div className="input-container w-full">
                  {/* Search Input */}
                  <input
                    id="search"
                    placeholder=" " //do not remove this
                    autoComplete="off"
                    className="focus:outline-none mt-2 rounded-lg bg-transparent text-white"
                  />
                  {/* Label */}
                  <label
                    htmlFor="search"
                    className="text-white opacity-900 tracking-wide"
                  >
                    Your <strong>search terms</strong>
                  </label>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleCollapse();
                    }}
                    className="mr-2 close-button"
                  >
                    {CloseSearchIcon}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Innovation;
