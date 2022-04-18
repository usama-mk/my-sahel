import React from 'react'
import Header from '../../components/Header/Header'
import Events from '../../sections/Events/Events'
import HeroSection from '../../sections/HeroSection/HeroSection'
import Latest from '../../sections/Latest/Latest'

function LandingPage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Latest/>
        <Events/>
    </div>
  )
}

export default LandingPage