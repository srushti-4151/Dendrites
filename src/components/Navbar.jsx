import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/dendrites-Trimmed-removebg-preview.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { closeModal, openModal } from "../redux/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import "../assets/scss/Navbar.scss";
import {
  mobileSideshape,
  MobileSearchIcon,
  CloseSearchIcon,
} from "../assets/svg";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [topValue, setTopValue] = useState(40);
  const dispatch = useDispatch();
  const location = useLocation();
  const modalContent = useSelector((state) => state.modal.modalContent);
  // console.log("Current Modal Content:", modalContent);

  const prevLocation = useRef(location.pathname);
  // Close modal on route change if modal is open
  useEffect(() => {
    // Check if modal is open and the route has changed (not the first route)
    if (modalContent && prevLocation.current !== location.pathname) {
      dispatch(closeModal());
      // console.log("Modal closed due to route change:", location.pathname);
    }
    // Update the previous location
    prevLocation.current = location.pathname;
  }, [modalContent, location.pathname, dispatch]);

  const handleModalOpen = (modalName) => {
    if (modalContent !== modalName) {
      dispatch(openModal(modalName));
      // console.log(`Modal opened: ${modalName}`);
    }
  };
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition <= 40) {
      setTopValue(40 - scrollPosition);
    } else {
      setTopValue(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Services",
      onClick: () => {
        // console.log("handlingg");
        handleModalOpen("Services");
      },
    },
    {
      name: "Solutions",
      onClick: () => handleModalOpen("Solutions"),
    },
    { name: "Products", path: "/products" },
    {
      name: "Innovation",
      onClick: () => handleModalOpen("Innovation"),
    },
    {
      name: "Company",
      onClick: () => handleModalOpen("Company"),
    },
    { name: "Jobs", onClick: () => handleModalOpen("Jobs") },
    {
      name: <FiSearch size={24} />,
      onClick: () => handleModalOpen("Search"),
    },
  ];

  const mobileLinks = [
    {
      isShow: true,
      name: "Services",
      onClick: () => {
        handleModalOpen("Services");
      },
    },
    {
      isShow: true,
      name: "Solutions",
      onClick: () => handleModalOpen("Solutions"),
    },
    { isShow: false, name: "Products", path: "/products" },
    {
      isShow: true,
      name: "Innovation",
      onClick: () => handleModalOpen("Innovation"),
    },
    {
      isShow: true,
      name: "Company",
      onClick: () => handleModalOpen("Company"),
    },
    { isShow: true, name: "Jobs", onClick: () => handleModalOpen("Jobs") },
    {
      isShow: true,
      name: "NewsRoom",
      onClick: () => handleModalOpen("NewsRoom"),
    },
  ];

  const [isInputFocused, setIsInputFocused] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    setIsInputFocused(true);
  };
  const handleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    console.log("Drawer state changed:", isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <>
      <div
        className="z-50 fixed lg:block hidden"
        style={{
          background: "rgba(0, 34, 62 , 0.75)",
          width: "100%",
          opacity: topValue / 40,
        }}
      >
        <div className="mx-auto max-w-[1410px] flex justify-end items-center gap-2 py-2 lg:pr-24 border-none">
          <div className="flex gap-5">
            <div>
              <Link
                to="/contact"
                className="text-[#a7b8b8] text-[13px] hover:text-white duration-300"
              >
                Contact
              </Link>
            </div>
            <div>
              {/* <Link className="text-[#a7b8b8] text-[13px] hover:text-white duration-300">
                Newsroom
              </Link> */}
              <button
                onClick={() => handleModalOpen("NewsRoom")}
                className="text-[#a7b8b8] text-[13px] hover:text-white duration-300"
              >
                Newsroom
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="shadow-[0px_10px_10px_rgba(0,0,0,0.2)] fixed z-50 lg:p-0 p-5"
        style={{
          background: "rgba(0,34,62,0.75)",
          // top: topValue,
          top: window.innerWidth >= 1024 ? topValue : 0,
          width: "100%",
        }}
      >
        <div
          className="m-auto max-w-[1410px] lg:px-4 overflow-hidden lg:h-[70px]"
          // style={{ height: "63.7px" }}
        >
          <div className="flex justify-between gap-20 items-center p-0">
            {/* Logo Section */}
            <Link to="/" className="">
              <img
                src={logo}
                className="w-72 h-8 bg-transparent lg:block hidden"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center items-center gap-12 py-4">
              {/* {links.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 tracking-wider ${
                      activeLink === link
                        ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700"
                        : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 tracking-wider ${
                      activeLink === link
                        ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700"
                        : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700"
                    }`}
                  >
                    {link.name}
                  </button>
                )
              )} */}
              {links.map((link) =>
                link.path ? (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-[10px] text-[18px] uppercase transition-all duration-300 tracking-wider 
                    ${
                      isActive //for text
                        ? "text-[#80acd3]"
                        : "text-[#fff]"
                    } 
                    after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:transition-all after:duration-700 
                    ${
                      isActive // for underline
                        ? "hover:after:bg-[#80acd3]"
                        : "after:bg-transparent hover:after:bg-[#ffffff]"
                    }`
                    }

                    // className={({ isActive }) =>
                    //   `relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 tracking-wider ${
                    //     isActive
                    //       ? "text-[#80acd3]" // Active state: text color changes
                    //       : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-[#ffff] after:transition-all after:duration-700" // Hover state: text color changes on hover
                    //   }
                    //   after:transition-all after:duration-700 after:h-[3px] after:w-full after:left-0 after:bottom-[-18px]
                    //   ${
                    //     isActive
                    //       ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-[#80acd3] after:transition-all after:duration-700 after:text-[#80acd3]" // Active state: hide underline
                    //       : "" // Hover state: underline appears with color
                    //   }`
                    // }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 tracking-wider ${
                      modalContent === link.name
                        ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700"
                        : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700"
                    }`}
                  >
                    {link.name}
                  </button>
                )
              )}
              {/* Search Icon */}
              {/* <Link
                to="/"
                className={`relative transition-all duration-300 ${
                  activeLink === "Search"
                    ? "after:absolute after:left-0 after:bottom-[-18px] after:pb-[0px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700 text-white"
                    : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700 text-white"
                }`}
                onClick={() => setActiveLink("Search")}
              >
                <FiSearch size={24} />
              </Link> */}
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden w-full top-0 relative flex items-center justify-between">
            <img src={logo} className="w-52 h-8" alt="Logo" />
            {/* Animated Hamburger Button */}
            <HamburgerButton
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <nav className="fixed top-0 left-0 w-full h-screen bg-[#00223e] z-50 transition-transform duration-300 flex flex-col sub-outer1">
            <div className="relative shadow-[0px_10px_10px_rgba(0,0,0,0.2)] bg-[rgba(0,34,62,0.8)] flex justify-between items-center p-5 z-50">
              <img src={logo} className="w-52 h-8" alt="Logo" />
              {/* Animated Close Button (Same Hamburger Logic) */}
              <HamburgerButton
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>

            <div className="flex-grow w-full h-[60%] mx-auto sub-service-container1">
              <div className="sub-scrollbar-modal1">
                <ul>
                  {mobileLinks.map((link, index) => (
                    <div
                      key={link.name}
                      className="border-t border-gray-500 py-4 flex items-center"
                    >
                      <li className="tracking-wider text-[30px] uppercase font-bold pl-3 text-white">
                        {link.path ? (
                          <a href={link.path} onClick={link.onClick}>
                            {link.name}
                          </a>
                        ) : (
                          <button
                            onClick={link.onClick}
                            className="teacking-wider text-white text-[30px] uppercase font-bold focus:outline-none"
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`w-full  z-30
                      ${isExpanded ? "min-h-screen bg-[#7eabd5]" : "h-[40%]"} 
                    transition-all ease-linear duration-300`}
            >
              <div
                className={`sub-sideshapesvg1 text-[#77a7d1]
                        ${isExpanded ? "top-0 bg-[#7eabd5]" : "bottom-0"} 
                      transition-all ease-linear duration-300`}
              >
                {mobileSideshape}
              </div>
              <div
                className={`relative z-20 px-4 tracking-wider
                ${isExpanded ? "pt-0" : "pt-10"} `}
              >
                <form
                  className={`w-full transition-all ease-linear duration-700${
                    isExpanded ? "top-0" : "bottom-0"
                  }`}
                >
                  <div className={`${isExpanded ? "mb-5 mt-7" : "mb-3 mt-14"}`}>
                    <h3 className="uppercase text-[32px] font-medium text-[#00223E]">
                      Easy Search
                    </h3>
                  </div>
                  <div className="h-[50px] relative p-2 z-20 flex items-center gap-2 w-full focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white">
                    {/* Search Icon */}
                    <button
                      onClick={handleExpand}
                      className="inline-block text-[#ffffff] px-2"
                    >
                      {MobileSearchIcon}
                    </button>

                    {/* input container */}
                    <div className="input-container1 w-full">
                      {/* Search Input */}
                      <input
                        id="search"
                        placeholder=" " //do not remove this
                        autoComplete="off"
                        className="focus:outline-none mt-2 rounded-lg bg-transparent text-white"
                        onFocus={handleExpand} // Focus triggers input state
                      />
                      {/* Label */}
                      <label
                        htmlFor="search"
                        // className="text-white opacity-900 tracking-wide"
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-white opacity-90 tracking-wide transition-all duration-300 peer-focus:opacity-0 peer-focus:-translate-y-4`}
                      >
                        Your <strong>search terms</strong>
                      </label>

                      {isInputFocused && ( // Show only on input focus
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleCollapse();
                          }}
                          className="mr-2 close-button"
                        >
                          {CloseSearchIcon}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;

{
  /* <ul>
                  {mobileLinks.map((link, index) => (
                    <div
                      key={link.name}
                      className="border-t border-gray-500 py-4 flex items-center"
                    >
                      <li className="tracking-wider text-[30px] uppercase font-bold pl-3 text-white">
                        {link.path ? (
                          <a href={link.path} onClick={link.onClick}>
                            {link.name}
                          </a>
                        ) : (
                          <button
                            onClick={link.onClick}
                            className="teacking-wider text-white text-[30px] uppercase font-bold focus:outline-none"
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    </div>
                  ))}
                </ul> */
}
{
  /* {links.map((link) => (
                <Link
                  key={link}
                  to="/"
                  className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 ${activeLink === link
                    ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700"
                    : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700"
                    }`}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </Link>
              ))} */
}
{
  /* <div className="">
              <img src={logo} className="w-[138px]" alt="Zeta Logo" />
            </div> */
}
