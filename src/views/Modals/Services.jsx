// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import "../../assets/scss/Servics.scss";
// import {
//   EngineeringIcon,
//   EpcmvIcon,
//   BuildingServicesIcon,
//   DecarbonizationIcon,
//   ExecutiveQualityIcon,
//   LifecycleManagement,
//   sideshape,
//   mobileSideshape,
//   SearchIcon,
//   MobileSearchIcon,
//   CloseSearchIcon,
//   CloseModalIcon,
// } from "../../assets/svg";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { closeModal } from "../../redux/ModalSlice";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import ModalOf from "./ModalOf";

// const Services = () => {
//   const services = [
//     {
//       image: EngineeringIcon,
//       title: "Engineering",
//       description:
//         "Dendrites implements highly complex projects in the shortest possible time.",
//       path: "/services/engineering",
//     },
//     {
//       image: EpcmvIcon,
//       title: "EPCMV",
//       description:
//         "We take over the planning and coordination of your projects.",
//       path: "/services/epcmv",
//     },
//     {
//       image: BuildingServicesIcon,
//       title: "Building Services",
//       description:
//         "We combine HVAC, cleanroom and the entire process technology under one roof.",
//     },
//     {
//       image: DecarbonizationIcon,
//       title: "Decarbonization",
//       description:
//         "Sustainable production of buildings becoming increasingly important.Dendrites supports you in decarbonizing your process!",
//     },
//     {
//       image: ExecutiveQualityIcon,
//       title: "Executive Quality",
//       description: "You can rely on us-we are by your side 14/7!",
//     },
//     {
//       image: LifecycleManagement,
//       title: "Lifecycle Management",
//       description:
//         "You can rely on us-ervices along the entire product life cycle.",
//     },
//   ];
//   const dispatch = useDispatch();

//   return (
//     <>
//       <ModalOf modalData={services} title={"Services"}/>
//     </>
//   );
// };

// export default Services;
