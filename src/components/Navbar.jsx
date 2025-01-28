import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/dendrites-Trimmed-removebg-preview.png";
import { FiSearch } from "react-icons/fi";
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
import { closeDrawer, toggleDrawer } from "../redux/NavSlice";
import { FaArrowLeftLong } from "react-icons/fa6";

const Navbar = () => {
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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isLargeScreen = window.innerWidth >= 1024; // Check if screen is large

    if (isLargeScreen) {
      if (scrollPosition <= 40) {
        setTopValue(40 - scrollPosition);
      } else {
        setTopValue(0);
      }
    } else {
      setTopValue(0); // No extra top offset on small screens
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set correct position on load

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

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const toggleDrawer = () => {
  //   setIsDrawerOpen((prevState) => !prevState);
  // };
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);
  useEffect(() => {
    console.log("Drawer state changed:", isDrawerOpen);
  }, [isDrawerOpen]);

  //Greenline
  // Define color based on path
  const getLineColor = () => {
    if (location.pathname.includes("/services")) return "bg-[#93D050]";
    if (location.pathname.includes("/solutions")) return "bg-blue-500";
    return ""; 
  };

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
                to="/company/contact"
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
        className="lg:shadow-[0px_10px_10px_rgba(0,0,0,0.2)] fixed lg:p-0 p-5 z-50"
        style={{
          background: "rgba(0,34,62,0.75)",
          // top: topValue,
          top: window.innerWidth >= 1025 ? topValue : 0,
          width: "100%",
        }}
      >
        <div
          className="m-auto max-w-[1410px] lg:px-4 overflow-hidden lg:h-[70px] z-50"
          // style={{ height: "63.7px" }}
        >
          <div className="flex justify-between gap-10 items-center p-0">
            {/* Logo Section */}
            <Link to="/" className="">
              <img
                src={logo}
                className="lg:w-48 w-72 h-8 bg-transparent lg:block hidden"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center items-center lg:gap-10 2xl:gap-12 py-4">
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
          <div className="lg:hidden w-full top-0 relative flex items-center justify-between z-50">
            <Link to="/" className="">
              <img src={logo} className="w-52 h-8" alt="Logo" />
            </Link>
            {/* Animated Hamburger Button */}
            <HamburgerButton
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={() => dispatch(toggleDrawer())}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && !isModalOpen && (
          <>
            <div className="lg:hidden block md:block nav-overlay"></div>
            <nav
              className="fixed top-0 left-0 w-full h-screen bg-[#00223e] z-50 transition-transform duration-300 flex flex-col sub-outer1"
              // className={`fixed top-0 left-0 w-full h-screen bg-[#00223e] z-50 transition-transform duration-300 flex flex-col sub-outer1
              // ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              <div className="relative shadow-[0px_10px_10px_rgba(0,0,0,0.2)] bg-[rgba(0,34,62,0.8)] flex justify-between items-center p-5 z-50">
                <Link to="/" className="">
                  <img src={logo} className="w-52 h-8" alt="Logo" />
                </Link>
                <HamburgerButton
                  isDrawerOpen={isDrawerOpen}
                  toggleDrawer={() => dispatch(toggleDrawer())}
                />
              </div>

              <div className="flex-grow w-full h-[60vh] mx-auto sub-service-container1">
                <div className="sub-scrollbar-modal1">
                  <ul>
                    {mobileLinks.map((link, index) => (
                      <div
                        key={link.name}
                        className="border-t border-gray-500 py-3 flex items-center"
                      >
                        <li className="tracking-wider text-[30px] uppercase font-bold pl-3 text-white">
                          {link.path ? (
                            // <a href={link.path} onClick={link.onClick}>
                            //   {link.name}
                            // </a>
                            <Link
                              to={link.path}
                              onClick={() => {
                                dispatch(toggleDrawer());
                                // link.onClick();
                              }}
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <button
                              onClick={() => {
                                console.log("Temp::", link);
                                // dispatch(toggleDrawer());
                                link.onClick();
                              }}
                              // onClick={link.onClick}
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

              {/* <div
                className={`w-full overflow-hidden bg-transparent
                        ${isExpanded ? "min-h-screen top-0" : "relative h-[32vh] bottom-0"} 
                        transition-all duration-700 ease-in-out`}
                        
              > */}
              {/* <div
                  className={`sub-sideshapesvg1 text-[#77a7d1] h-full w-full overflow-hidden
                          ${isExpanded ? "top-0" : "bottom-0"} 
                          transition-all duration-700 ease-in-out`}
                > */}
              <div
                className={`w-full overflow-hidden bg-transparent transition-container1
                        ${
                          isExpanded
                            ? "h-[3000vh] top-0"
                            : "relative h-[32vh] bottom-0"
                        }`}
              >
                <div
                  className={`sub-sideshapesvg1 text-[#77a7d1] h-full w-full overflow-hidden botoom-0`}
                >
                  <svg
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="375"
                    height="282"
                    viewBox="0 0 375 282"
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
                  // className="relative z-30 pt-10 pl-4 tracking-wider"
                  className={`relative z-30 pl-4 tracking-wider ${
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
                    <span
                      onClick={handleExpand}
                      className="text-[#ffffff] px-2"
                    >
                      {MobileSearchIcon}
                    </span>

                    <div className="input-container1 w-full">
                      <input
                        id="search"
                        placeholder=" " //do not remove this
                        autoComplete="off"
                        className="focus:outline-none mt-2 rounded-lg bg-transparent text-white"
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
                {/* ${isExpanded ? "w-full h-full top-0" : "pt-10 w-full bottom-0"} */}
                {/* <div
                  className={`absolute z-2 bg-[#7eabd5] ${
                    isExpanded ? "w-full h-full translate-y-0 top-0" : "pt-10 w-full translate-y-full bottom-0"
                  }
                              transition-transform duration-500 ease-in-out`}
                ></div>  */}
                {/* <div className={`your-div ${isExpanded ? 'expanded' : 'collapsed'}`}></div>  */}
              </div>
            </nav>
          </>
        )}
      </div>

      {/* Persistent Line */}
      <div 
       style={{ top: `${topValue + 70}px` }}
       className={`fixed left-0 h-[3px] ${getLineColor()} z-50 w-full`}></div>
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
