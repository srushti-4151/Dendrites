import React from 'react'
import Navbar from '../../components/Navbar'
import Bar from '../../components/Bar'
import HeroContact from './HeroContact'
import PersonContact from './PersonContact'
import MoreOffers from './MoreOffers'
import Footer from "../../components/Footer";
import ContactBlog from './ContactBlog'

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <Bar/>
    <HeroContact/>
    <PersonContact />
    <MoreOffers/>
    <ContactBlog />
    <Footer/>
    </>
  )
}

export default ContactPage