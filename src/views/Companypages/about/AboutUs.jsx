import React from 'react'
import Navbar from '../../../components/Navbar'
import Breadcrumb from '../../../components/Breadcrumb'
import HeroAbout from './HeroAbout'
import QuoteConatct from './QuoteConatct'
import AboutusTheory from './AboutusTheory'
import AbtProcess from './AbtProcess'
import AboutAdvantages from './AboutAdvantages'
import AbtGetIn from './AbtGetIn'
import OurExperts from './OurExperts'
import PersonContact from '../contact/PersonContact'
import AbtTextonimg from './AbtTextonimg'
import DiscMoreServ from '../../products/DiscMoreServ'
import ProductsSignup from '../../products/ProductsSignup'
import Footer from "../../../components/Footer";
import PhaseStrategy from './PhaseStrategy'
import AboutBlog from './AboutBlog'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb />
    <HeroAbout/>
    <QuoteConatct />
    <AboutusTheory />
    <AbtProcess />
    <AboutAdvantages/>
    <AbtGetIn />
    <PhaseStrategy />
    <OurExperts />
    <PersonContact/>
    <AbtTextonimg />
    <DiscMoreServ />
    <ProductsSignup />
    <AboutBlog />
    <Footer />
    </>
  )
}

export default AboutUs