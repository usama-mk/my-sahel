import React from "react";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import concert from '../../assets/images/Concert.png'
import homeConcert from '../../assets/images/home concert.png'
import { landingPageContent } from "../../utilities/Template/Template";


function Events() {
  return (
    <div id="events" >
      <SectionHeader name={landingPageContent.Events.headerName} events={true} address={landingPageContent.Events.headerAddress} />
      {/* events body */}
      <div className="sm:flex mb-10">
        {/* left */}
        <div className="flex flex-col justify-evenly sm:items-start p-3 bg-[#43A047] sm:w-[100%] 2xl:p-8 3xl:p-10 ">
          {/* tags */}
          <div className="flex justify-center sm:justify-start">
            {
              landingPageContent.Events.tagNames.map((tagName, key)=>
              <LatestTag key={key} event={true} tagName={tagName} />
              )
            }
           
          </div>
          {/* event title */}
          <h1 className="uppercase text-white text-[24px] font-medium 2xl:text-[70px] 3xl:text-[99px] sm:text-left mt-5 sm:mt-2 "> Launching 27 May during Dakar Biennale </h1>
          {/* event date */}
          <h1 className="uppercase text-white text-[18px] font-medium 2xl:text-[40px] 3xl:text-[52px] " > Future events being announced soon  </h1>
        </div>
        {/* left end */}

      </div>
    </div>
  );
}

export default Events;
