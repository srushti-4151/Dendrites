import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/ModalSlice";

const Breadcrumb = () => {
  const [topValue, setTopValue] = useState(110);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paths = location.pathname.split("/").filter((p) => p);
  const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setTopValue(scrollPosition <= 110 && scrollPosition < 40 ? 110 - scrollPosition : 70);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define which paths should open a modal instead of navigation
  const modalRoutes = ["services", "solutions", "innovation", "company", "jobs", "newsroom"];

  const handleClick = (path) => {
    if (modalRoutes.includes(path.toLowerCase())) {
      dispatch(openModal(path.charAt(0).toUpperCase() + path.slice(1))); // Capitalize modal name
    } else {
      navigate(`/${path}`);
    }
  };

  if (isDrawerOpen) return null;

  return paths.length > 0 ? (
    <div
      className="text-[14px] w-full h-auto bg-[#DDE0E2] fixed shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50"
      style={{
        top: window.innerWidth >= 1025 ? topValue : 73,
      }}
    >
      <div className="relative mx-auto max-w-[1410px] text-[16px] w-full h-auto py-3 px-4 text-left bg-[#DDE0E2]">
        <span className="font-medium text-gray-600 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>
        {paths.map((path, index) => (
          <span key={index}>
            <MdOutlineKeyboardArrowRight size={27} className="inline-block font-medium text-gray-500 mx-1" />
            <span
              onClick={() => handleClick(paths.slice(0, index + 1).join("/"))}
              className={`cursor-pointer ${
                index === paths.length - 1 ? "text-[#00223E] font-medium" : "text-gray-600 font-medium"
              }`}
            >
              {path.replace("-", " ")}
            </span>
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Breadcrumb;

// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { useSelector } from "react-redux";

// const Breadcrumb = () => {
//   const [topValue, setTopValue] = useState(110);
//   const location = useLocation();
//   const paths = location.pathname.split("/").filter((p) => p);
//   const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);

//   useEffect(() => {
//     console.log("topval", topValue);
//     console.log("scroollpY", window.scrollY);
//   }, [topValue]);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition <= 110 && scrollPosition < 40) {
//       setTopValue(110 - scrollPosition);
//     } else {
//       setTopValue(70);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Function to check if the colorful line should be present
//   const hasColorfulLine = () => {
//     return (
//       location.pathname.includes("/services") ||
//       location.pathname.includes("/solutions")
//     );
//   };

//   const getBreadcrumbTop = () => {
//     const navbarHeight = 70; //default height of navbar
//     const colorfulLineHeight = hasColorfulLine() ? 3 : 0;
//     return navbarHeight + colorfulLineHeight;
//   };

//   if (isDrawerOpen) {
//     return null;
//   }

//   return paths.length > 0 ? (
//     <div
//       className="text-[14px] w-full h-auto bg-[#DDE0E2] fixed shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50"
//       style={{
//         top:
//           window.innerWidth >= 1025
//             ? hasColorfulLine()
//               ? topValue + 3 // Add 3px if line is present
//               : topValue // Default without line
//             : 73, // Small screen default
//       }}
//       // style = { {
//       //   top: `${getBreadcrumbTop()}px`,
//       // }}
//     >
//       <div className="relative mx-auto max-w-[1410px] text-[16px] w-full h-auto py-3 px-4 text-left bg-[#DDE0E2]">
//         <NavLink to="/" className="font-medium text-gray-600">
//           Home
//         </NavLink>
//         {paths.map((path, index) => (
//           <span key={index}>
//             <MdOutlineKeyboardArrowRight
//               size={27}
//               className="inline-block font-medium text-gray-500 mr-1"
//             />
//             <NavLink
//               to={`/${paths.slice(0, index + 1).join("/")}`}
//               className={
//                 index === paths.length - 1
//                   ? "text-[#00223E] font-medium"
//                   : "text-gray-600 font-medium"
//               }
//             >
//               {path.replace("-", " ")}
//             </NavLink>
//           </span>
//         ))}
//       </div>
//     </div>
//   ) : null;
// };

// export default Breadcrumb;
