import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LatestItem from '../../components/LatestItem/LatestItem'
import needsYou from '../../assets/images/needsYou.png'
import eventDetails from '../../assets/images/eventDetails.png'


function Latest() {
  return (
    <div>
        {/* heading */}
        <SectionHeader name={"latest"} />
        
        <div className="flex  flex-col sm:flex-row    ">
      {/* hero Left */}
       
       <LatestItem latestImage={needsYou} latestText="Why the Sahel Region Needs You" first={true} />  
         

     
      {/* hero right */}
      
       <LatestItem latestImage={eventDetails} latestText="MySahel Event Details" />  
      
    </div>
    </div>
  )
}

export default Latest