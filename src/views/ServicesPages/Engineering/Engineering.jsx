import React from 'react'
import Header from '../../../components/Header'
import HeroEng from './HeroEng'
import ProjectRec from './ProjectRec'
import EnSolApp from './EnSolApp'
import Starter from './Starter'
import CeopartEng from './CeopartEng'

const Engineering = () => {
  return (
    <div>
        <Header />
        <HeroEng/>
        <ProjectRec/>
        <EnSolApp />
        <Starter />
        <CeopartEng />
    </div>
  )
}

export default Engineering