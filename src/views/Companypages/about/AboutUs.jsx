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
    <OurExperts />
    <PersonContact/>
    </>
  )
}

export default AboutUs