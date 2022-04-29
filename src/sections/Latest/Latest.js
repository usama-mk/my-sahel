import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LatestItem from '../../components/LatestItem/LatestItem'

import LatestItemTwo from '../../components/LatestItemTwo/LatestItemTwo'
import { landingPageContent } from '../../utilities/Template/Template'
import { useMediaQuery } from 'react-responsive'


function Latest() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id="latest" >
        {/* heading */}
        <SectionHeader name={landingPageContent.Latest.headerName} id={landingPageContent.Latest.headerId} />
        
        <div className="flex  flex-col sm:flex-row     ">
      {
        isBigScreen?
        <>
        {/* hero Left */}
       
       <LatestItem latestImage={landingPageContent.Latest.latestitemOne.image} latestText={landingPageContent.Latest.latestitemOne.text} first={true} tagName={landingPageContent.Latest.latestitemOne.tagName} address={landingPageContent.Latest.latestitemOne.address} />  
         

     
         {/* hero right */}
         
          <LatestItem latestImage={landingPageContent.Latest.latestitemTwo.image} latestText={landingPageContent.Latest.latestitemTwo.text} tagName={landingPageContent.Latest.latestitemTwo.tagName} address={landingPageContent.Latest.latestitemTwo.address} />  
        </>
        :
        <>
         <LatestItemTwo image={landingPageContent.Latest.latestitemOne.image} text={landingPageContent.Latest.latestitemOne.text} address={landingPageContent.Latest.latestitemOne.address} tagName={landingPageContent.Latest.latestitemOne.tagName} /> 

        <LatestItemTwo image={landingPageContent.Latest.latestitemTwo.image} text={landingPageContent.Latest.latestitemTwo.text} tagName={landingPageContent.Latest.latestitemTwo.tagName} address={landingPageContent.Latest.latestitemTwo.address} /> 
        </>
      }
      
    </div>

    <div className="row-2 sm:flex mb-10">
    <LatestItemTwo image={landingPageContent.Latest.latestitemThree.image} text={landingPageContent.Latest.latestitemThree.text} address={landingPageContent.Latest.latestitemThree.address} tagName={landingPageContent.Latest.latestitemThree.tagName} /> 
    <LatestItemTwo image={landingPageContent.Latest.latestitemFour.image} text={landingPageContent.Latest.latestitemFour.text} tagName={landingPageContent.Latest.latestitemFour.tagName} address={landingPageContent.Latest.latestitemFour.address} /> 
    <LatestItemTwo image={landingPageContent.Latest.latestitemFive.image} text={landingPageContent.Latest.latestitemFive.text} tagName={landingPageContent.Latest.latestitemFive.tagName} address={landingPageContent.Latest.latestitemFive.address} /> 
    </div>
    </div>
  )
}

export default Latest