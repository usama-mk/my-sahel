import React from 'react'
import DonateBanner from '../../components/DonateBanner/DonateBanner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ArtExhibitionSection from '../../sections/ArtExhibitionSection/ArtExhibitionSection'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'
import { scrollToTop } from '../../utilities/scroll'

function ArtExhibition() {
  scrollToTop()
  return (
    <div>
    <Header/>
    <ArtExhibitionSection/>
    <SponserBanner/>
    <TagOptions/>
    <DonateBanner/>
    <Footer/>
    </div>
  )
}

export default ArtExhibition