import React from 'react'
import Header from '../../components/Header/Header'
import DonateBanner from '../../components/DonateBanner/DonateBanner'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'
import Footer from '../../components/Footer/Footer'
import EventCover from '../../sections/EventCover/EventCover'
import EventNumber from '../../sections/EventNumber/EventNumber'

function AboutEvent() {
  return (
    <div>
        <Header/>
        <EventCover/>
        <EventNumber/>
        <SponserBanner/>
        <TagOptions/>
        <DonateBanner/>
        <Footer/>
    </div>
  )
}

export default AboutEvent