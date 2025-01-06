import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/scss/Servics.scss";
import imgg from "../../assets/ansprechperson_alexander_lausecker.webp";
import {
  ContactCall,
  AboutDrop,
  LocationDrop,
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

const Search = () => {
  const company = [
    {
      image: ContactCall,
      title: "Research & Development",
      description: "Multi-brand PLC and SCADA based solutions",
    },
    {
      image: AboutDrop,
      title: "Success Stories",
      description: "IoT hardware and Centralized software-based solution",
    },
    {
      image: LocationDrop,
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

  useEffect(() => {
    console.log("isExpanded onchange:", isExpanded);
  }, [isExpanded]);

  return (
    <>
      <Navbar />
      <div className="lg:flex hidden outer bg-blue-900 text-white">
        <div className="w-1/2 service-container mx-auto">
          <div className="pt-40 w-[75%] h-[513px]">
            <div className="mt-10 pb-12">
              <div class="font-medium text-[30px] leading-[1.333] text-white m-0">
                You{" "}
                <strong className="font-bold text-[#7eabd5]">have not </strong>
                found,
                <br />
                what you are looking for?
              </div>
              <div className="mt-5">
                <Link to="#" className="flex items-center justify-start gap-4">
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
                  <div className="relative inline-block w-[110px] h-[110px] rounded-full overflow-hidden">
                    <img
                      src={imgg}
                      className="w-full h-full object-cover"
                      width="500"
                      height="500"
                      alt="Contact Alexander Lausecker - Head of Sales Area Eastern Europe"
                      title="Contact Alexander Lausecker - Head of Sales Area Eastern Europe"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 py-10 group transition">
          <div className="sideshapesvg transition-colors duration-500 text-[#77a7d1] group-hover:text-[#acd6fc]">
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
                    group-hover:border-white group-hover:text-white hover:text-[#1c2b47] hover:bg-white  
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
    </>
  );
};

export default Search;
