import React from 'react'
import Header from '../../../components/Header'
import HeroEng from './HeroEng'
import ProjectRec from './ProjectRec'
import EnSolApp from './EnSolApp'
import Starter from './Starter'

const Engineering = () => {
  return (
    <div>
        <Header />
        <HeroEng/>
        <ProjectRec/>
        <EnSolApp />
        <Starter />
    </div>
  )
}

export default Engineering