import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Bar from "./Bar";
import HeroProduct from "./HeroProduct";
import ProductOverview from "./ProductOverview";


const Products = () => {
  return (
    <>
    <Navbar />
    {/* <Bar/> */}
    <HeroProduct/>
    <ProductOverview/>
    <Footer/>
    </>
  );
};

export default Products;
