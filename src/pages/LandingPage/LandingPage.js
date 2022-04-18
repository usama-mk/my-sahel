import React from 'react'
import Header from '../../components/Header/Header'
import ArtNft from '../../sections/ArtNft/ArtNft'
import Events from '../../sections/Events/Events'
import FeaturedArtists from '../../sections/FeaturedArtists/FeaturedArtists'
import HeroSection from '../../sections/HeroSection/HeroSection'
import Latest from '../../sections/Latest/Latest'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'

function LandingPage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Latest/>
        <Events/>
        <FeaturedArtists/>
        <ArtNft/>
        <SponserBanner/>
        <TagOptions/>
    </div>
  )
}

export default LandingPage