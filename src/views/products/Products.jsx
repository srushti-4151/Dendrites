import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroProduct from "./HeroProduct";
import ProductOverview from "./ProductOverview";
import CeoPartProduct from "./CeoPartProduct";
import DiscMoreServ from "./DiscMoreServ";
import ProductsSignup from "./ProductsSignup";
import ProductBlog from "./ProductBlog";
import ProductCareer from "./ProductCareer";
import Bar from "../../components/Bar";


const Products = () => {
  return (
    <>
    <Navbar />
    <Bar/>
    <HeroProduct/>
    <ProductOverview/>
    <CeoPartProduct/>
    <DiscMoreServ/>
    <ProductsSignup/>
    <ProductBlog/>
    <ProductCareer/>
    <Footer/>
    </>
  );
};

export default Products;
