import React, { useEffect, useState } from "react";
// import logo from "../assets/zeta-logo.svg";
import logo from "../assets/dendrites-Trimmed-removebg-preview.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { closeModal, openModal } from "../redux/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import "../assets/scss/Navbar.scss";
import { mobileSideshape, SearchIcon, CloseSearchIcon } from "../assets/svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [topValue, setTopValue] = useState(40);
  const dispatch = useDispatch();
  const location = useLocation();
  const modalContent = useSelector((state) => state.modal.modalContent);
  console.log("Current Modal Content:", modalContent);

  useEffect(() => {
    // Close modal on route change if modal is open
    if (modalContent && location.pathname !== "/") {
      dispatch(closeModal());
      console.log("Modal closed due to route change:", location.pathname);
    }
  }, [location.pathname, modalContent]);

  const handleModalOpen = (modalName) => {
    if (modalContent !== modalName) {
      dispatch(openModal(modalName));
      console.log(`Modal opened: ${modalName}`);
    }
  };

  // useEffect(() => {
  //   // Close modal when path changes
  //   if (modalContent && location.pathname !== "/") {  // Only close if modalContent exists (it's open)
  //     dispatch(closeModal());
  //     console.log("Modal closed due to path change:", location.pathname);
  //   }

  // }, [location, dispatch, modalContent]);

  // const handleModalOpen = (modalName) => {
  //   if (modalContent !== modalName) {  // Open the modal only if it's not already open
  //     dispatch(openModal(modalName));
  //   }
  // };
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

  // const links = [
  //   "Services",
  //   "Solutions",
  //   "Products",
  //   "Innovation",
  //   "Company",
  //   "Jobs",
  // ];

  const links = [
    {
      name: "Services",
      onClick: () => {
        console.log("handlinggggggggggggg");
        handleModalOpen("Services");
      },
    },
    { name: "Solutions", onClick: () => handleModalOpen("Solutions") },
    { name: "Products", path: "/products" },
    { name: "Innovation", onClick: () => handleModalOpen("Services") },
    { name: "Company", onClick: () => handleModalOpen("Services") },
    { name: "Jobs", onClick: () => handleModalOpen("Services") },
  ];
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <>
      <div
        className="z-50 fixed lg:block hidden"
        style={{
          background: "rgba(0, 34, 62 , .85)",
          width: "100%",
          opacity: topValue / 40,
        }}
      >
        <div className="mx-auto max-w-[1410px] flex justify-end items-center gap-2 py-2 lg:pr-24">
          <div className="flex gap-5">
            <div>
              <Link className="text-[#a7b8b8] text-[13px] hover:text-white duration-300">
                Contact
              </Link>
            </div>
            <div>
              <Link className="text-[#a7b8b8] text-[13px] hover:text-white duration-300">
                Newsroom
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="shadow-[0px_10px_10px_rgba(0,0,0,0.2)] fixed z-50 lg:pt-0 pt-3"
        style={{
          background: "rgba(0,34,62,0.85)",
          // top: topValue,
          top: window.innerWidth >= 1024 ? topValue : 0,
          width: "100%",
        }}
      >
        <div
          className="m-auto max-w-[1410px] lg:px-4 overflow-hidden h-[70px]"
          // style={{ height: "63.7px" }}
        >
          <div className="flex justify-between gap-20 items-center p-2 lg:p-0 px-6">
            {/* Logo Section */}
            <Link to="/" className="">
              <img
                src={logo}
                className="w-72 h-8 bg-transparent"
                alt="Zeta Logo"
              />
            </Link>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center items-center gap-14 py-4">
              {links.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 ${
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
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 ${
                      activeLink === link
                        ? "after:absolute after:left-0 after:bottom-[-18px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700"
                        : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700"
                    }`}
                  >
                    {link.name}
                  </button>
                )
              )}
              {/* Search Icon */}
              <Link
                to="/"
                className={`relative transition-all duration-300 ${
                  activeLink === "Search"
                    ? "after:absolute after:left-0 after:bottom-[-18px] after:pb-[0px] after:w-full after:h-[3px] after:bg-white after:transition-all after:duration-700 text-white"
                    : "hover:after:absolute hover:after:left-0 hover:after:bottom-[-18px] hover:after:w-full hover:after:h-[3px] hover:after:bg-white after:transition-all after:duration-700 text-white"
                }`}
                onClick={() => setActiveLink("Search")}
              >
                <FiSearch size={24} />
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="text-white text-2xl"
              >
                {isDrawerOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <nav className="fixed top-0 left-0 w-full h-screen bg-[#00223e] z-40 transition-transform duration-300 flex flex-col sub-outer1">
              <div className="shadow-[0px_10px_10px_rgba(0,0,0,0.2)] flex justify-between items-center p-3 mb-3">
                <img src={logo} className="w-52 h-8" alt="Logo" />
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white"
                >
                  <FiX size={45}/>
                </button>
              </div>
            <div className="flex-grow w-full h-[50%] mx-auto">
              <div className="sub-scrollbar-modal1">
                <ul>
                  {links.map((link, index) => (
                    <div
                      key={index.name}
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

            <div className="w-full h-[50%] secondnav-partcontainer">
              <div className="sub-sideshapesvg1 transition-colors text-[#77a7d1]">
                {mobileSideshape}
              </div>
              <div className="relative z-20 pt-16 pl-4">
                <form className="w-full">
                  <div className="mb-5 mt-12">
                    <h3 className="uppercase text-4xl font-semibold text-[#00223E]">
                      Easy Search
                    </h3>
                  </div>

                  <div className="relative p-2 z-20 flex items-center gap-2 w-[90%] focus:outline-none rounded-lg bg-transparent border border-[#ffffff] group-hover:border-white group-hover:text-white duration-500 text-white">
                    <span className="text-[#ffffff] px-2">
                        {SearchIcon}
                    </span>
                    <div 
                    // className="input-container1 w-full"
                    className={`input-container1 w-full ${
                      isInputFocused ? "focused" : ""
                    } transition-all duration-300`}
                    >
                      <input
                        id="search"
                        placeholder=" "
                        autoComplete="off"
                        className="focus:outline-none mt-2 rounded-lg bg-transparent text-white"
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                      />
                      <label
                        htmlFor="search"
                        className="text-white opacity-900 tracking-wide"
                      >
                        Your <strong>search terms</strong>
                      </label>
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
