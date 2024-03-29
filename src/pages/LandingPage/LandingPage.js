import React from 'react'
import Header from '../../components/Header/Header'
import ArtNft from '../../sections/ArtNft/ArtNft'
import DonateBanner from '../../components/DonateBanner/DonateBanner'
import Events from '../../sections/Events/Events'
import RevisedEvents from '../../sections/Events/RevisedEvents'
import FeaturedArtists from '../../sections/FeaturedArtists/FeaturedArtists'
import HeroSection from '../../sections/HeroSection/HeroSection'
import Latest from '../../sections/Latest/Latest'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'
import Footer from '../../components/Footer/Footer'
import { scrollToTop } from '../../utilities/scroll'

function LandingPage() {
  scrollToTop()
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Latest/>
        {/* <Events/> */}
        <RevisedEvents/>
        <FeaturedArtists/> 
        <ArtNft/>
        <SponserBanner/>
        <TagOptions/>
        <DonateBanner/>
        <Footer/>
    </div>
  )
}

export default LandingPage