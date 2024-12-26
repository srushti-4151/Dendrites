import React, { useEffect, useState } from "react";
// import logo from "../assets/zeta-logo.svg";
import logo from "../assets/dendrites-Trimmed-removebg-preview.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { closeModal, openModal } from "../redux/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [topValue, setTopValue] = useState(40);
  const dispatch = useDispatch();
  const location = useLocation();
  const modalContent = useSelector((state) => state.modal.modalContent);

  useEffect(() => {
    // Close modal when path changes
    if (modalContent && location.pathname !== "/") {  // Only close if modalContent exists (it's open)
      dispatch(closeModal());
      console.log("Modal closed due to path change:", location.pathname);
    }
    
  }, [location, dispatch, modalContent]); 

  const handleModalOpen = (modalName) => {
    if (modalContent !== modalName) {  // Open the modal only if it's not already open
      dispatch(openModal(modalName));
    }
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

  // const links = [
  //   "Services",
  //   "Solutions",
  //   "Products",
  //   "Innovation",
  //   "Company",
  //   "Jobs",
  // ];

  const links = [
    { name: "Services", onClick: () => handleModalOpen("Services")},
    { name: "Solutions", onClick: () => handleModalOpen("Solutions") },
    { name: "Products", path: "/products" },
    { name: "Innovation", onClick: () => handleModalOpen("Services") },
    { name: "Company", onClick: () => handleModalOpen("Services") },
    { name: "Jobs", onClick: () => handleModalOpen("Services") },
  ];

  return (
    <>
      <div
        className="fixed z-50 "
        style={{
          background: "rgba(0, 34, 62 , .85)",
          width: "100%",
          opacity: topValue / 40,
        }}
      >
        <div className="mx-auto max-w-[1410px] flex justify-end items-center gap-2 py-2 px-6 lg:px-5">
          <div className="flex justify-between gap-16">
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
            {/* <div className="flex gap-5">
              <div>
                <Link className="text-[#a7b8b8] font-bold text-[13px] hover:text-white duration-300 br-[20px]">
                  DE
                </Link>
              </div>
              <div>
                <Link className="text-white font-bold text-[13px] hover:text-white duration-300">
                  EN
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="shadow-[0px_10px_10px_rgba(0,0,0,0.2)] fixed z-50"
        style={{
          background: "rgba(0,34,62,0.85)",
          top: topValue,
          width: "100%",
        }}
      >
        <div className="m-auto max-w-[1410px] lg:px-4 overflow-hidden" style={{ height: "63.7px" }}>
          <div className="flex justify-between gap-20 items-center p-2 lg:p-0 px-6">
            {/* Logo Section */}
            <Link to="/" className="">
              <img src={logo} className="w-72 h-8 bg-transparent" alt="Zeta Logo" />
            </Link>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center items-center gap-14 py-4">
              {links.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 ${activeLink === link
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
                    className={`relative text-white font-[10px] text-[18px] uppercase transition-all duration-300 ${activeLink === link
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
                className={`relative transition-all duration-300 ${activeLink === "Search"
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
          <div className="fixed top-0 left-0 w-full h-screen bg-[#00223e] z-40 transition-transform duration-300">
            <div className="p-6">
              {/* Logo and Close Button */}
              <div className="flex justify-between items-center mb-6">
                <img src={logo} className="w-[100px]" alt="Zeta Logo" />
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white text-2xl"
                >
                  <FiX />
                </button>
              </div>
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link}
                    to="/"
                    className="text-white text-lg font-semibold uppercase"
                    onClick={() => {
                      setActiveLink(link);
                      setIsDrawerOpen(false);
                    }}
                  >
                    {link}
                  </Link>
                ))}
                {/* Search Icon */}
                <Link
                  to="/search"
                  className="text-white text-lg font-semibold uppercase flex items-center gap-2"
                  onClick={() => {
                    setActiveLink("Search");
                    setIsDrawerOpen(false);
                  }}
                >
                  <FiSearch size={20} />
                  Search
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
 {/* {links.map((link) => (
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
              ))} */}
               {/* <div className="">
              <img src={logo} className="w-[138px]" alt="Zeta Logo" />
            </div> */}