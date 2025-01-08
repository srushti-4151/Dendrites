import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { closeModal, openModal } from "../redux/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
    const location = useLocation();
    const modalContent = useSelector((state) => state.modal.modalContent);

  // Split the URL into parts, ignoring the root "/"
  const breadcrumbParts = location.pathname.split("/").filter((part) => part);
  const [topValue, setTopValue] = useState(110);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition <= 110) {
      setTopValue(110 - scrollPosition);
    } else {
      setTopValue(70);
    }
  };

  useEffect(() => {
    console.log("topval", topValue);
  }, [topValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define modal-specific configurations
  const modalConfigs = {
    "/services": {
      color: "#1e90ff", // Blue for Services
      breadcrumb: "Services",
    },
    "/solutions": {
      color: "#ff7f50", // Coral for Solutions
      breadcrumb: "Solutions",
    },
    "/innovation": {
      color: "#32cd32", // LimeGreen for Innovation
      breadcrumb: "Innovation",
    },
    "/company": {
      color: "#ffa500", // Orange for Company
      breadcrumb: "Company",
    },
    "/jobs": {
      color: "#9400d3", // DarkViolet for Jobs
      breadcrumb: "Jobs",
    },
  };

  // Find the active modal based on the current route
  const activeModal = Object.keys(modalConfigs).find((path) =>
    location.pathname.startsWith(path)
  );

  // Default color and breadcrumb for unknown routes
  const { color = "#000", breadcrumb = "Home" } =
    modalConfigs[activeModal] || {};

  const links = [
    {
      isShow: true,
      name: "Services",
      onClick: () => {
        console.log("handlingg");
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
      name: <FiSearch size={24} />,
      onClick: () => handleModalOpen("Search"),
    },
  ];
  const handleModalOpen = (modalName) => {
    if (modalContent !== modalName) {
      dispatch(openModal(modalName));
      // console.log(Modal opened: ${modalName});
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div
        className="text-sm w-full bg-gray-200 shadow-md py-3 lg:pl-0 pl-2 fixed z-50"
        style={{
          top: window.innerWidth >= 1024 ? topValue : 70,
        }}
      >
        <div className="container mx-auto">
          <span className="text-sm">
            {/* Static Home Link */}
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>

            {/* Dynamic Breadcrumb Links */}
            {breadcrumbParts.map((part, index) => {
              // Generate dynamic path
              const dynamicPath = `/${breadcrumbParts
                .slice(0, index + 1)
                .join("/")}`;

              // Check if the part needs to open a modal or be a regular link
              const link = links.find(
                (link) => link.name === part
              );
              return (
                <span key={index}>
                  {" > "}
                  {link ? (
                    // Handle modal trigger with onClick for modal items
                    <button
                      onClick={link.onClick}
                      className="text-black capitalize hover:text-blue-600"
                    >
                      {part.replace(/-/g, " ")}{" "}
                      {/* Replace dashes with spaces */}
                    </button>
                  ) : (
                    // Regular link for navigation
                    <Link
                      to={dynamicPath}
                      className="text-black capitalize hover:text-blue-600"
                    >
                      {part.replace(/-/g, " ")}{" "}
                      {/* Replace dashes with spaces */}
                    </Link>
                  )}
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
