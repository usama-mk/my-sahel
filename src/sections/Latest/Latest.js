import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LatestItem from '../../components/LatestItem/LatestItem'
import needsYou from '../../assets/images/needsYou.png'
import eventDetails from '../../assets/images/eventDetails.png'
import hippo from '../../assets/images/hippo.png'
import guitar from '../../assets/images/guitar.png'
import sunset from '../../assets/images/sunset.png'

import LatestItemTwo from '../../components/LatestItemTwo/LatestItemTwo'


function Latest() {
  return (
    <div>
        {/* heading */}
        <SectionHeader name={"latest"} />
        
        <div className="flex  flex-col sm:flex-row     ">
      {/* hero Left */}
       
       <LatestItem latestImage={needsYou} latestText="Why the Sahel Region Needs You" first={true} tagName={"purpose"} />  
         

     
      {/* hero right */}
      
       <LatestItem latestImage={eventDetails} latestText="MySahel Event Details" tagName={"about"} />  
      
    </div>

    <div className="row-2 sm:flex mb-10">
    <LatestItemTwo image={hippo} text="NFT & Blockchain pairing" /> 
    <LatestItemTwo image={guitar} text="featured artists" /> 
    <LatestItemTwo image={sunset} text="become a sponser" /> 
    </div>
    </div>
  )
}

export default Latest