import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Bar from "./Bar";
import HeroProduct from "./HeroProduct";
import ProductOverview from "./ProductOverview";
import CareerZeta from "../home/CareerZeta";
import CeoPartProduct from "./CeoPartProduct";


const Products = () => {
  return (
    <>
    <Navbar />
    {/* <Bar/> */}
    <HeroProduct/>
    <ProductOverview/>
    <CeoPartProduct/>
    <CareerZeta/>
    <Footer/>
    </>
  );
};

export default Products;
