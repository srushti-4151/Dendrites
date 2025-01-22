import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/ModalSlice";

const HamburgerButton = ({ isDrawerOpen, toggleDrawer }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleClick = () => {
    if(isModalOpen) {
      dispatch(closeModal());
    } 
    toggleDrawer();
  }
  return (
    <button
      onClick={handleClick}
      className="text-white relative w-10 h-6 flex flex-col items-start right-15px gap-2"
    >
      {/* Top Line */}
      <span
        className={`absolute h-[3px] bg-white rounded transition-transform duration-500 ease-in-out transform ${
          isDrawerOpen
            ? "w-full rotate-45 top-1/2 translate-y-[-50%]"
            : "w-[60%] rotate-0 top-0 translate-y-0"
        }`}   
      ></span>

      {/* Middle Line */}
      <span
        className={`absolute h-[3px] bg-white rounded transition-transform duration-500 ease-in-out transform ${
          isDrawerOpen
            ? "w-full -rotate-45 top-1/2 translate-y-[-50%]"
            : "w-[80%] rotate-0 top-1/2 translate-y-0"
        }`}
      ></span>

      {/* Bottom Line */}
      <span
        className={`absolute w-full h-[3px] bg-white rounded transition-opacity duration-500 ease-in-out ${
          isDrawerOpen ? "opacity-0 -bottom-1" : "opacity-100 -bottom-1"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
