import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/scss/Servics.scss";
import {
  Automation1,
  Digitalization,
  ProcessSolutions,
  Biotech,
  FoodEng,
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
import ModalOf from "./ModalOf";

const Solutions = () => {
  const solutions = [
    {
      image: Automation1,
      title: "Automation",
      description:
        "Multi-brand PLC and SCADA based solutions",
    },
    {
      image: Digitalization,
      title: "Digitalization",
      description:
        "IoT hardware and Centralized software-based solution",
    },
    {
      image: ProcessSolutions,
      title: "ProcessSolutions",
      description:
        "We combine HVAC, cleanroom and the entire process technology under one roof.",
    },
    {
      image: Biotech,
      title: "Biotech",
      description:
        "Sustainable production of buildings becoming increasingly important.Dendrites supports you in decarbonizing your process!",
    },
    {
      image: FoodEng,
      title: "Food Engineering",
      description: "You can rely on us-we are by your side 14/7!",
    },
  ];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("isExpanded onchange:", isExpanded);
  // }, [isExpanded])
  

  return (
    <>
    <ModalOf modalData={solutions} title={"Solution"} />
    </>
  );
};

export default Solutions;
