import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const ProductsSignup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country*");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
  ];

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm(""); // Clear search on select
  };

  return (
    <>
      <div className="bg-[rgb(128,172,211)] w-full h-full overflow-hidden">
        <div className="relative block h-full w-full bg-[rgb(128,172,211)] py-[60px] lg:py[80px] 2xl:py-[80px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-1">
            <svg
              class="kreis-links-responsive"
              xmlns="http://www.w3.org/2000/svg"
              data-width="1440"
              data-height="900"
              width="1440"
              height="900"
              viewBox="0 0 1440 900"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <rect
                data-width="1440"
                data-height="900"
                width="1440"
                height="900"
                fill="#80acd3"
              ></rect>
              <g class="circle" transform="translate(0.386)">
                <path
                  d="M830.82-16.012C819.851-3.54,0,1068.694,0,1527.543c0,362.488,232.143,670.756,556.3,784.4a828.9,828.9,0,0,0,274.521,46.425c458.849,0,830.82-371.971,830.82-830.82S841.789-28.484,830.82-16.012Z"
                  transform="translate(-673.181 -1217.519)"
                  fill="#709eca"
                ></path>
              </g>
            </svg>
          </div>
          <div className="relative z-3 bg-transparent text-center overflow-hidden">
            <div class="text-[15px] md:text-[18px] lg:text-[23px] 2xl:text-[23px] font-medium text-[#00223E] mb-10">
              Products - Quality by design
            </div>
            <h2 class="font-light md:text-[50px] lg:text-[57px] 2xl:text-[57px] text-[30px] lg:px-0 px-4 leading-[1.15789474] tracking-[0.025em] uppercase text-white m-0">
              Sign up
              <br />
              for the
              <strong className="font-bold text-[#96e8ca]"> newsletter!</strong>
            </h2>
            <div className="mt-10 h-full w-full overflow-hidden flex justify-center">
              <form className="text-[#fff] mx-auto w-full lg:px-3 2xl:px-3 px-4 lg:max-w-[515px] 2xl:max-w-[515px] md:max-w-[580px]">
                <div>
                  <label className="block text-left text-[#BAD0E5] text-lg font-normal">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-left text-[#BAD0E5] text-lg font-normal">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  />
                </div>
                <div>
                  <label className="block text-left text-[#BAD0E5] text-lg font-normal">
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-left text-[#BAD0E5] text-lg font-normal">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                    required
                  />
                </div>

                {/* <select
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  required
                >
                  <option value="" disabled selected>
                    Country*
                  </option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                </select> */}
                {/* <div className="relative w-full mb-4">
                  <select
                    className="w-full text-lg py-2 pl-12 bg-transparent border border-white rounded p-2 pr-10 focus:outline-none appearance-none"
                    required
                  >
                    <option value="" disabled selected>
                      Country*
                    </option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                  </select>
                  <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <IoIosArrowDown size={27}/>
                  </span>
                </div> */}
                <div className="relative w-full mb-4 text-lg" ref={dropdownRef}>
                  {/* Select Box */}
                  <div
                    className="w-full bg-transparent border border-gray-300 text-gray-300 rounded p-2 cursor-pointer flex items-center justify-start gap-2"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>{selectedCountry}</span>
                  </div>

                  {/* Dropdown */}
                  {isOpen && (
                    <div className="absolute z-10 bg-[#0A2239] border border-gray-300 rounded w-full mt-2 shadow-lg">
                      {/* Search Input */}
                      <div className="w-full p-2 flex items-center justify-between bg-[#0A2239]">
                        <div className="w-full p-2 flex items-center justify-between bg-[#274C6B] rounded-lg">
                          <input
                            type="text"
                            placeholder=" "
                            className="w-full bg-transparent text-gray-300 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <IoSearch size={23} />
                        </div>
                      </div>
                      {/* Options */}
                      <ul className="max-h-48 overflow-y-auto">
                        {filteredCountries.map((country, index) => (
                          <li
                            key={index}
                            className="pb-2 px-3 text-left font-bold text-white hover:text-[#80ACD3] cursor-pointer"
                            onClick={() => handleSelect(country)}
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3 text-left text-sm mb-8">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-[63px] h-[23px] appearance-none border border-[#fff] bg-transparent checked:bg-[#fff] checked:border-[#fff] focus:outline-none"
                    required
                  />
                  <label htmlFor="consent">
                    We use your data in accordance with our{" "}
                    <a href="#" className="underline text-[#96e8ca]">
                      data protection guidelines
                    </a>
                    . By subscribing to the newsletter, I expressly consent to
                    the processing of my provided data for the purpose of
                    receiving electronic advertisements.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-fit px-8 lg:text-lg 2xl:text-lg text-sm text-center bg-white text-[#103758] font-bold py-2 rounded shadow hover:bg-transparent hover:text-white border hover:border-white transition"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSignup;
