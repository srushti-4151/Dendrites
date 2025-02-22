import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/scss/Servics.scss";
import imgg from "../../assets/ansprechperson_alexander_lausecker.webp";
import {
  sideshape,
  mobileSideshape,
  SearchIcon,
  MobileSearchIcon,
  CloseSearchIcon,
  CloseModalIcon,
} from "../../assets/svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/ModalSlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { closeDrawer, toggleDrawer } from "../../redux/NavSlice";
import logo from "../../assets/dendrites-Trimmed-removebg-preview.png";
import HamburgerButton from "../../components/HamburgerButton";

const ModalOf = ({ modalData, title }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal()); //close the modal
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };
  const handleCollapse = (e) => {
    e.preventDefault();
    setIsExpanded(false);
    setIsInputFocused(false);
  };
  const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);

  return (
    <>
      <Navbar />
      {title === "Search" ? (
        <>
          <div className="lg:block hidden md:hidden modal-overlay z-5"></div>

          <div className="lg:flex hidden outer z-10">
            <div className="absolute max-w-[1410px] w-full mx-auto left-1/2 -translate-x-1/2 service-container">
              <div className="py-16 pl-[15px] search-scrollmodal-countwidth scrollbar-modal absolute left-0 w-full h-full">
                <div className="">
                  <div className="mt-20 pb-12">
                    <div class="font-medium text-[30px] leading-[1.333] text-white m-0">
                      You{" "}
                      <strong className="font-bold text-[#7eabd5]">
                        have not{" "}
                      </strong>
                      found,
                      <br />
                      what you are looking for?
                    </div>
                    <div className="mt-5">
                      <Link
                        to="#"
                        className="flex items-center justify-start gap-4"
                      >
                        <span className="flex items-center justify-between relative font-bold text-[18px] leading-[1.33] text-white pr-[58px] pl-[43px] max-w-[250px] w-full">
                          <div className="inline-block flx absolute top-1/2 left-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21.571"
                              height="14.387"
                              viewBox="0 0 21.571 14.387"
                            >
                              <path
                                d="M21.632,11.527a.979.979,0,0,0-.007,1.379l4.556,4.563H8.842a.974.974,0,0,0,0,1.948H26.172L21.617,23.98a.986.986,0,0,0,.007,1.379A.97.97,0,0,0,23,25.351l6.174-6.219h0a1.094,1.094,0,0,0,.2-.307.93.93,0,0,0,.075-.375.977.977,0,0,0-.277-.682L23,11.55A.954.954,0,0,0,21.632,11.527Z"
                                transform="translate(-7.875 -11.251)"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </div>
                          <span>
                            Contact our <br />
                            experts!
                          </span>
                        </span>
                        <div className="relative border border-white flex items-center justify-center w-[110px] h-[110px] rounded-full overflow-hidden">
                          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full overflow-hidden">
                            <img
                              src={imgg}
                              className="w-full h-full object-cover"
                              width="500"
                              height="500"
                              alt="Contact Alexander Lausecker - Head of Sales Area Eastern Europe"
                              title="Contact Alexander Lausecker - Head of Sales Area Eastern Europe"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 w-1/2 max-w-[650px] top-0 h-full group transition">
              <div className="sideshapesvg text-[#80acd3] opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                {sideshape}
              </div>
              <form className="relative top-[100px] pr-[50px] left-0 w-full py-[64px] pl-[100px] z-20">
                <div className="flex justify-between mb-10">
                  <h3 className="uppercase text-3xl font-bold text-[#00223E]">
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
                  <span className="text-[#00223E] px-2 group-hover:text-[#fff] duration-500">
                    {SearchIcon}
                  </span>

                  {/* input container */}
                  <div className="input-container flex items-center relative">
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
                <div className="pt-10 flex flex-wrap gap-4">
                  {[
                    "Cultured Meat",
                    "Products",
                    "Building Equipment",
                    "Dendrites",
                    "Digitalisation",
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`text-lg px-3 py-2 bg-transparent border border-[#0f2550] text-[#153063] rounded-lg 
                    transition-colors duration-500 
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

          {/* <nav className="lg:hidden md:flex flex flex-col h-screen sub-outer relative">
            <div
              className={`w-full ${
                isExpanded ? "" : "h-[60vh]"
              } flex-grow w-full sub-service-container mx-auto z-20`}
            >
              <div className="sub-scrollbar-modal">
                <div className="pl-3 uppercase tracking-wide py-4 flex items-center gap-4 headline text-[29px] font-bold border-b border-t border-gray-500">
                  <button
                    onClick={() => {
                      dispatch(toggleDrawer());
                      handleCloseModal();
                    }}
                    className="cursor-pointer focus:outline-none p-0 m-0"
                  >
                    <FaArrowLeftLong />
                  </button>{" "}
                  {title}
                </div>
                <ul className="">
                  {modalData.map((service, index) => (
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

            <div
              className={`w-full overflow-hidden bg-transparent 
          ${isExpanded ? "min-h-screen top-0" : "relative h-[32vh] bottom-0"} 
          transition-top duration-700 ease-in-out`}
            >
              <div
                className={`sub-sideshapesvg h-full w-full overflow-hidden
            ${isExpanded ? "top-0" : "bottom-0"} 
          transition-top duration-700 ease-in-out`}
              >
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="375"
                  height="262"
                  viewBox="0 0 375 262"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        width="375"
                        height="282"
                        transform="translate(4417 2345)"
                        fill="#fff"
                        stroke="#707070"
                        strokeWidth="1"
                      />
                    </clipPath>
                  </defs>
                  <g
                    transform="translate(-4417 -2345)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      d="M737.148,0C1144.264,0,1474.3,330.033,1474.3,737.148S1144.264,1474.3,737.148,1474.3,0,1144.264,0,737.148,330.033,0,737.148,0Z"
                      transform="translate(3701.352 2345.352)"
                      fill="#7eabd5"
                    />
                  </g>
                </svg>
              </div>

              <form
                className={`relative z-20 pl-4 tracking-wider h-full ${
                  isExpanded ? "pt-0" : "pt-4"
                }`}
              >
                <div className="mb-5 mt-12">
                  {isInputFocused && (
                    <button
                      onClick={handleCollapse}
                      className="mr-2 text-[#00223E]"
                    >
                      <FaArrowLeftLong size={29} />
                    </button>
                  )}
                  <span className="uppercase text-4xl font-semibold text-[#00223E] ">
                    Easy Search
                  </span>
                </div>
                <div
                  // onClick={handleExpand}
                  className="relative p-3 z-20 flex items-center gap-2 w-[95%] md:w-[60%] focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white"
                >
                  <span onClick={handleExpand} className="text-[#ffffff] px-2">
                    {MobileSearchIcon}
                  </span>

                  <div className="input-container w-full">
                    <input
                      id="search"
                      placeholder=" " //do not remove this
                      autoComplete="off"
                      className="focus:outline-none rounded-lg bg-transparent text-white"
                      onFocus={() => setIsInputFocused(true)}
                      onClick={handleExpand}
                    />
                    {!isInputFocused && (
                      <label
                        htmlFor="search"
                        className="text-white opacity-900 tracking-wide"
                      >
                        Your <strong>search terms</strong>
                      </label>
                    )}

                    {isInputFocused && (
                      <button
                        onClick={handleCollapse}
                        className="mr-2 close-button"
                      >
                        {CloseSearchIcon}
                      </button>
                    )}
                  </div>
                </div>
              </form>

              <div
                className={`absolute z-2 bg-[#7eabd5] ${
                  isExpanded
                    ? "w-full min-h-screen top-0"
                    : "pt-10 w-full bottom-0"
                }
                transition-top duration-700 ease-in-out`}
              ></div>
            </div>
          </nav> */}
          <nav className="lg:hidden flex md:flex md:flex-col flex-col h-screen sub-outer relative">
            {/* <div className="flex-grow w-full h-[60%] sub-service-container mx-auto"> */}
            <div
              className={`w-full ${
                isExpanded ? "" : "h-[60vh]"
              } flex-grow w-full sub-service-container mx-auto z-10`}
            >
              {/* <div className="absolute w-full h-full bg-gradient-to-t from-[#272c55] via-[#272c55]/80 to-transparent"></div> */}
              <div className="sub-scrollbar-modal">
                <div className="pl-3 uppercase tracking-wide py-4 flex items-center gap-4 headline text-[29px] font-bold border-b border-t border-gray-500">
                  <button
                    // onClick={handleCloseModal}
                    onClick={() => {
                      // dispatch(toggleDrawer());
                      handleCloseModal();
                    }}
                    className="cursor-pointer focus:outline-none p-0 m-0"
                  >
                    <FaArrowLeftLong />
                  </button>{" "}
                  {title}
                </div>
                <ul className="">
                  {modalData.map((service, index) => (
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
            {/* <div
                className={`w-full overflow-hidden bg-transparent
                        ${isExpanded ? "min-h-screen top-0" : "relative h-[32vh] bottom-0"} 
                        transition-all duration-700 ease-in-out`}
                        
              > */}
            <div
              className={`w-full overflow-hidden bg-transparent transition-container
                        ${
                          isExpanded
                            ? "h-[3000vh] top-0"
                            : "relative h-[32vh] bottom-0"
                        }`}
            >
              {/* <div
                  className={`sub-sideshapesvg text-[#77a7d1] h-full w-full overflow-hidden
                          ${isExpanded ? "top-0" : "botoom-0"} 
                         transition-transform duration-700 ease-in-out`}
                > */}
              <div
                className={`sub-sideshapesvg text-[#77a7d1] h-full w-full overflow-hidden botoom-0`}
              >
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="375"
                  height="262"
                  viewBox="0 0 375 262"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        width="375"
                        height="282"
                        transform="translate(4417 2345)"
                        fill="#fff"
                        stroke="#707070"
                        strokeWidth="1"
                      />
                    </clipPath>
                  </defs>
                  <g
                    transform="translate(-4417 -2345)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      d="M737.148,0C1144.264,0,1474.3,330.033,1474.3,737.148S1144.264,1474.3,737.148,1474.3,0,1144.264,0,737.148,330.033,0,737.148,0Z"
                      transform="translate(3701.352 2345.352)"
                      fill="#7eabd5"
                    />
                  </g>
                </svg>
              </div>

              <form
                className={`relative z-30 pl-4 tracking-wider h-full ${
                  isExpanded ? "pt-0" : "pt-4"
                }`}
              >
                <div className="mb-5 mt-12">
                  {isInputFocused && (
                    <button
                      onClick={handleCollapse}
                      className="mr-2 text-[#00223E]"
                    >
                      <FaArrowLeftLong size={29} />
                    </button>
                  )}
                  <span className="uppercase text-4xl font-semibold text-[#00223E] ">
                    Easy Search
                  </span>
                </div>
                <div
                  // onClick={handleExpand}
                  className="relative p-3 z-20 flex items-center gap-2 w-[95%] md:w-[60%] focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white"
                >
                  <span onClick={handleExpand} className="text-[#ffffff] px-2">
                    {MobileSearchIcon}
                  </span>

                  <div className="input-container w-full">
                    <input
                      id="search"
                      placeholder=" " //do not remove this
                      autoComplete="off"
                      className="focus:outline-none rounded-lg bg-transparent text-white"
                      onFocus={() => setIsInputFocused(true)}
                      onClick={handleExpand}
                    />
                    {!isInputFocused && (
                      <label
                        htmlFor="search"
                        className="text-white opacity-900 tracking-wide"
                      >
                        Your <strong>search terms</strong>
                      </label>
                    )}

                    {isInputFocused && (
                      <button
                        onClick={handleCollapse}
                        className="mr-2 close-button"
                      >
                        {CloseSearchIcon}
                      </button>
                    )}
                  </div>
                </div>
              </form>

              <div
                className={`absolute z-20 bg-[#7eabd5] w-full h-full 
                    ${
                      isExpanded
                        ? "translate-y-0 top-0"
                        : "pt-10 translate-y-[45%] bottom-0"
                    }
                              transition-transform duration-700 ease-in-out`}
              ></div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <div className="lg:block hidden md:hidden modal-overlay z-5"></div>

          <div className="lg:flex hidden outer z-10">
            <div className="absolute max-w-[1410px] w-full mx-auto left-1/2 -translate-x-1/2 service-container">
              <div className="py-16 pl-[15px] scrollmodal-countwidth scrollbar-modal absolute left-0 w-full h-full">
                <div className="">
                  <h3 className="text-white font-bold text-4xl lg:text-5xl text-shadow-glow pb-14 uppercase tracking-wide">
                    {title}
                  </h3>
                  <div className="grid grid-row-1 sm:grid-row-2 gap-2">
                    {modalData.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="group w-full rounded-lg pb-5 text-white transition flex flex-row items-center"
                      >
                        {" "}
                        {/* <div className="relative w-[100px] h-[100px] border border-[#80acd3a1] align-middle rounded-full">
                          <div className="absolute top-1/2 left-1/2 w-[90px] h-[90px] -translate-x-1/2 -translate-y-1/2 align-middle group-hover:bg-[#80acd3a1] duration-300 rounded-full">
                            <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
                              {service.image}
                            </div>
                          </div>{" "}
                        </div> */}
                        <div className="relative w-[100px] h-[100px] border border-[#80acd3a1] rounded-full flex items-center justify-center">
                          <div className="relative w-[85px] h-[85px] rounded-full group-hover:bg-[#80acd3a1] duration-300 flex items-center justify-center">
                            <div className="w-1/2 h-1/2 flex items-center justify-center">
                              {service.image}
                            </div>
                          </div>
                        </div>
                        <div className="pl-5 w-[75%] align-middle">
                          {/* <Link to={service.path} className="inline-block"> */}
                          <h3 className="text-white font-bold text-2xl lg:text-3xl text-shadow-glow tracking-wider">
                            {service.title}
                          </h3>
                          {/* </Link> */}
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

            <div className="absolute right-0 w-1/2 max-w-[650px] top-0 h-full group transition">
              <div className="sideshapesvg text-[#80acd3] opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                {sideshape}
              </div>
              <form className="relative top-[100px] pr-[50px] left-0 w-full py-[64px] pl-[100px] z-20">
                <div className="flex justify-between mb-10">
                  <h3 className="uppercase text-3xl font-bold text-[#00223E]">
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
                  <span className="text-[#00223E] px-2 group-hover:text-[#fff] duration-500">
                    {SearchIcon}
                  </span>

                  {/* input container */}
                  <div className="input-container flex items-center relative">
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
                <div className="pt-10 flex flex-wrap gap-4">
                  {[
                    "Cultured Meat",
                    "Products",
                    "Building Equipment",
                    "Dendrites",
                    "Digitalisation",
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`text-lg px-3 py-2 bg-transparent border border-[#0f2550] text-[#153063] rounded-lg 
                    transition-colors duration-500 
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

          <nav className="lg:hidden flex md:flex md:flex-col flex-col h-screen sub-outer relative">
            {/* <div className="flex-grow w-full h-[60%] sub-service-container mx-auto"> */}
            <div
              className={`w-full ${
                isExpanded ? "" : "h-[60vh]"
              } flex-grow w-full sub-service-container mx-auto z-10`}
            >
              {/* <div className="absolute w-full h-full bg-gradient-to-t from-[#272c55] via-[#272c55]/80 to-transparent"></div> */}
              <div className="sub-scrollbar-modal">
                <div className="pl-3 uppercase tracking-wide py-4 flex items-center gap-4 headline text-[29px] font-bold border-b border-t border-gray-500">
                  <button
                    // onClick={handleCloseModal}
                    onClick={() => {
                      // dispatch(toggleDrawer());
                      handleCloseModal();
                    }}
                    className="cursor-pointer focus:outline-none p-0 m-0"
                  >
                    <FaArrowLeftLong />
                  </button>{" "}
                  {title}
                </div>
                <ul className="">
                  {/* {modalData.map((service, index) => (
                    <div key={index} className="border-b border-gray-500 py-4">
                      <li className="flex items-center">
                        <div className="text-[23px] font-bold pl-3">
                          {service.title}
                        </div>
                      </li>
                    </div>
                  ))} */}
                  {modalData.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path} // Ensure each service has a `path` property
                      onClick={() => {
                        handleCloseModal(); // Call existing modal close function if needed
                        dispatch(toggleDrawer());
                      }}
                      className="border-b border-gray-500 py-4 block"
                    >
                      <li className="flex items-center">
                        <div className="text-[23px] font-bold pl-3">
                          {service.title}
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className="w-full h-[40%]"> */}
            {/* <div
                className={`w-full overflow-hidden bg-transparent
                        ${isExpanded ? "min-h-screen top-0" : "relative h-[32vh] bottom-0"} 
                        transition-all duration-700 ease-in-out`}
                        
              > */}
            <div
              className={`w-full overflow-hidden bg-transparent transition-container
                        ${
                          isExpanded
                            ? "h-[3000vh] top-0"
                            : "relative h-[32vh] bottom-0"
                        }`}
            >
              {/* <div
                  className={`sub-sideshapesvg text-[#77a7d1] h-full w-full overflow-hidden
                          ${isExpanded ? "top-0" : "botoom-0"} 
                         transition-transform duration-700 ease-in-out`}
                > */}
              <div
                className={`sub-sideshapesvg text-[#77a7d1] h-full w-full overflow-hidden botoom-0`}
              >
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="375"
                  height="262"
                  viewBox="0 0 375 262"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        width="375"
                        height="282"
                        transform="translate(4417 2345)"
                        fill="#fff"
                        stroke="#707070"
                        strokeWidth="1"
                      />
                    </clipPath>
                  </defs>
                  <g
                    transform="translate(-4417 -2345)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      d="M737.148,0C1144.264,0,1474.3,330.033,1474.3,737.148S1144.264,1474.3,737.148,1474.3,0,1144.264,0,737.148,330.033,0,737.148,0Z"
                      transform="translate(3701.352 2345.352)"
                      fill="#7eabd5"
                    />
                  </g>
                </svg>
              </div>

              <form
                className={`relative z-30 pl-4 tracking-wider h-full ${
                  isExpanded ? "pt-0" : "pt-4"
                }`}
              >
                <div className="mb-5 mt-12">
                  {isInputFocused && (
                    <button
                      onClick={handleCollapse}
                      className="mr-2 text-[#00223E]"
                    >
                      <FaArrowLeftLong size={29} />
                    </button>
                  )}
                  <span className="uppercase text-4xl font-semibold text-[#00223E] ">
                    Easy Search
                  </span>
                </div>
                <div
                  // onClick={handleExpand}
                  className="relative p-3 z-20 flex items-center gap-2 w-[95%] md:w-[60%] focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white"
                >
                  <span onClick={handleExpand} className="text-[#ffffff] px-2">
                    {MobileSearchIcon}
                  </span>

                  <div className="input-container w-full">
                    <input
                      id="search"
                      placeholder=" " //do not remove this
                      autoComplete="off"
                      className="focus:outline-none rounded-lg bg-transparent text-white"
                      onFocus={() => setIsInputFocused(true)}
                      onClick={handleExpand}
                    />
                    {!isInputFocused && (
                      <label
                        htmlFor="search"
                        className="text-white opacity-900 tracking-wide"
                      >
                        Your <strong>search terms</strong>
                      </label>
                    )}

                    {isInputFocused && (
                      <button
                        onClick={handleCollapse}
                        className="mr-2 close-button"
                      >
                        {CloseSearchIcon}
                      </button>
                    )}
                  </div>
                </div>
              </form>

              <div
                className={`absolute z-20 bg-[#7eabd5] w-full h-full 
                    ${
                      isExpanded
                        ? "translate-y-0 top-0"
                        : "pt-10  md:translate-y-[55%] translate-y-[45%] bottom-0"
                    }
                              transition-transform duration-700 ease-in-out`}
              ></div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default ModalOf;
