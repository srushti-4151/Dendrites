import React from 'react'
import HeroContact from './HeroContact'
import PersonContact from './PersonContact'
import MoreOffers from './MoreOffers'
import Footer from "../../../components/Footer";
import ContactBlog from './ContactBlog'
import { useSelector } from 'react-redux'
import Breadcrumb from '../../../components/Breadcrumb'
import Navbar from '../../../components/Navbar';

const ContactPage = () => {
  const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);
  return (
    <>
    <Navbar />
    {!isDrawerOpen && (<Breadcrumb/>) }
    <HeroContact/>
    <PersonContact />
    <MoreOffers/>
    <ContactBlog />
    <Footer/>
    </>
  )
}

export default ContactPage