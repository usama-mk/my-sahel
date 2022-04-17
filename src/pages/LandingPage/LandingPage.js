import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../sections/HeroSection/HeroSection'
import Latest from '../../sections/Latest/Latest'

function LandingPage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Latest/>
    </div>
  )
}

export default LandingPage