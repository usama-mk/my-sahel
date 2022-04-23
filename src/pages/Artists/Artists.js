import React from 'react'
import DonateBanner from '../../components/DonateBanner/DonateBanner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ArtistsSection from '../../sections/ArtistsSection/ArtistsSection'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'
import { scrollToTop } from '../../utilities/scroll'


function Artists() {
scrollToTop()
  return (
    <div>
        <Header/>
        <ArtistsSection/>
        <SponserBanner/>
        <TagOptions/>
        <DonateBanner/>
        <Footer/>
    </div>
  )
}

export default Artists