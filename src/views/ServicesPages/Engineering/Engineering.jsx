import React from 'react'
import HeroEng from './HeroEng'
import ProjectRec from './ProjectRec'
import EnSolApp from './EnSolApp'
import Starter from './Starter'
import CeopartEng from './CeopartEng'
import Navbar from '../../../components/Navbar'
import Breadcrumb from '../../../components/Breadcrumb'
import { useSelector } from 'react-redux'

const Engineering = () => {
  const isDrawerOpen = useSelector((state) => state.nav.isDrawerOpen);
  return (
    <div>
        <Navbar/>
        {!isDrawerOpen && (<Breadcrumb/>) }
        <HeroEng/>
        <ProjectRec/>
        <EnSolApp />
        <Starter />
        <CeopartEng />
    </div>
  )
}

export default Engineering