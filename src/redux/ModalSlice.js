import { createSlice } from "@reduxjs/toolkit";
import {
  EngineeringIcon,
  EpcmvIcon,
  BuildingServicesIcon,
  DecarbonizationIcon,
  ExecutiveQualityIcon,
  LifecycleManagement,
  Automation1,
  Digitalization,
  ProcessSolutions,
  Biotech,
  FoodEng,
  ResAndDev,
  SuccStories,
  FeatureArticles,
  ContactCall,
  AboutDrop,
  LocationDrop,
  Whydet,
  careerAtDet,
  Vacancies,
  NewsBlog,
  Events,
  MediaRel,
} from "../assets/svg";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalContent: null,
    isModalOpen: false,
    modalData: {
      Services: {
        title: "Services",
        data: [
          {
            image: EngineeringIcon,
            title: "Engineering",
            description:
              "Dendrites implements highly complex projects in the shortest possible time.",
            path: "/services/engineering",
          },
          {
            image: EpcmvIcon,
            title: "EPCMV",
            description:
              "We take over the planning and coordination of your projects.",
            path: "/services/epcmv",
          },
          {
            image: BuildingServicesIcon,
            title: "Building Services",
            description:
              "We combine HVAC, cleanroom and the entire process technology under one roof.",
          },
          {
            image: DecarbonizationIcon,
            title: "Decarbonization",
            description:
              "Sustainable production of buildings becoming increasingly important.Dendrites supports you in decarbonizing your process!",
          },
          {
            image: ExecutiveQualityIcon,
            title: "Executive Quality",
            description: "You can rely on us-we are by your side 14/7!",
          },
          {
            image: LifecycleManagement,
            title: "Lifecycle Management",
            description:
              "You can rely on us-ervices along the entire product life cycle.",
          },
        ],
      },
      Solutions: {
        title: "Solutions",
        data: [
          {
            image: Automation1,
            title: "Automation",
            description: "Multi-brand PLC and SCADA based solutions",
          },
          {
            image: Digitalization,
            title: "Digitalization",
            description: "IoT hardware and Centralized software-based solution",
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
        ],
      },
      Innovation: {
        title: "Innovation",
        data: [
          {
            image: ResAndDev,
            title: "Research & Development",
            description: "Multi-brand PLC and SCADA based solutions",
          },
          {
            image: SuccStories,
            title: "Success Stories",
            description: "IoT hardware and Centralized software-based solution",
          },
          {
            image: FeatureArticles,
            title: "Feature Articles",
            description:
              "We combine HVAC, cleanroom and the entire process technology under one roof.",
          },
        ],
      },
      Company: {
        title: "Company",
        data: [
          {
            image: ContactCall,
            title: "Contact",
            description:
              "Find your contact at Dendrites. ✓ Email: office@Den.com ✓ Phone: +43 3136 9010 1000.",
            path: "/company/contact",
          },
          {
            image: AboutDrop,
            title: "About",
            description:
              "Evolution of Technology: Who we are and what drives us!",
            path: "/company/about",
          },
          {
            image: LocationDrop,
            title: "Locations",
            description:
              "Working for you worldwide! With our 31 subsidiaries, we are always close to you.",
          },
        ],
      },
      Jobs: {
        title: "Jobs",
        data: [
          {
            image: Whydet,
            title: "Why Dendrites",
            description:
              "We live appreciation, commitment, competence and motivation!",
          },
          {
            image: careerAtDet,
            title: "Career at Dendrites",
            description:
              "Motivated, committed, open for new things? Grow together with Dendrites.",
          },
          {
            image: Vacancies,
            title: "Vacancies",
            description:
              "Let's engineer your career together! Join the successful Dendrites team.",
          },
        ],
      },
      Search: {
        title: "Search",
        data: [
          {
            title: "Why Dendrites",
          },
          {
            title: "Career at Dendrites",
          },
          {
            title: "Vacancies",
          },
        ],
      },
      NewsRoom: {
        title: "NewsRoom",
        data: [
          {
            image: NewsBlog,
            title: "News / Blog",
            description:
              "Always up to date - news, insights, highlights & expert know-how!",
          },
          {
            image: Events,
            title: "Events",
            description:
              "Dendrites on Tour: International presence at conferences, trade fairs and industry events.",
          },
          {
            image: MediaRel,
            title: "Media relations",
            description:
              "Press releases, images and logos for our media partners.",
          },
        ],
      },
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
