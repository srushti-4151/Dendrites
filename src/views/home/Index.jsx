import React from "react";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import HomeSliderSection from "./HomeSliderSection";
import HomeAnimatedSection from "./HomeAnimatedSection";
import BenefitsSection from "./BenefitsSection";
import CeoSection from "./CeoSection";
import CareerZeta from "./CareerZeta";
import Footer from "../../components/Footer";
import CopySection from "./CopySection";

function index() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <HomeSliderSection />
      <HomeAnimatedSection />
      <BenefitsSection />
      <CeoSection />
      <CareerZeta />
      <Footer />
      <CopySection />
    </>
  );
}

export default index;
