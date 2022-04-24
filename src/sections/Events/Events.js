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
        <div className="flex flex-col justify-evenly sm:items-start p-3 bg-[#43A047] sm:w-[34%] 2xl:p-8 3xl:p-10 ">
          {/* tags */}
          <div className="flex justify-evenly sm:justify-start">
            <LatestTag event={true} tagName={"Event 1"} />
            <LatestTag event={true} tagName={"Day 1"} />
          </div>
          {/* event title */}
          <h1 className="uppercase text-white text-[24px] font-medium 2xl:text-[70px] 3xl:text-[99px] sm:text-left "> {landingPageContent.Events.eventTitle} </h1>
          {/* event date */}
          <h1 className="uppercase text-white text-[18px] font-medium 2xl:text-[40px] 3xl:text-[52px] " > {landingPageContent.Events.eventDate} </h1>

          {/* event details */}
          <div className="text-white py-10 sm:text-left  2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[33px] 3xl:leading-[44px] " >
              {/* event time */}
                <h5 className="pb-5  " > {landingPageContent.Events.eventTime} </h5>
                <h5>{landingPageContent.Events.eventSeats}</h5>
                <h5>{landingPageContent.Events.eventLocation}</h5>
                <h5 className="font-bold" >{landingPageContent.Events.locationSite}</h5>
          </div>

          {/* live */}
          <h5 className="pt-t pb-5 text-white 2xl:text-[20px] 3xl:text-[33px]" >{landingPageContent.Events.live}</h5>

          {/* price */}
          <div className="text-white pb-5" >
              <h5 className="2xl:text-[20px] 3xl:text-[33px]" >Ticket Price</h5>
              <h1 className="text-[22px] 2xl:text-[46px] 3xl:text-[66px]" >{landingPageContent.Events.ticketPrice}</h1>
          </div>

          {/* access event type */}
          <h5 className="pb-3 text-white 2xl:text-[19px] 3xl:text-[28px]" >{landingPageContent.Events.private}</h5>
        </div>
        {/* left end */}

        {/* mid  */}
        <div className="flex flex-col bg-[#E5E5E5] sm:items-start " >
            <img src={concert} className='2xl:w-[657px] 2xl:h-[285px] 3xl:w-[657px] 3xl:h-[385px] object-cover ' alt="" />
            <div className=" p-5 sm:text-left 2xl:p-8 3xl:p-10 " >
            <div className="flex justify-evenly sm:justify-start ">
            {
              landingPageContent.Events.eventMid.tagNames.map((tagName, key)=> 
                <LatestTag key={key} event={true} fill={"black"} tagName={tagName} />
                )
             
            }
            
          </div>

          <h1 className="uppercase text-black text-[18px] font-medium py-5 2xl:text-[40px] 3xl:text-[51px]" >{landingPageContent.Events.eventMid.eventDate}</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left 2xl:text-[16px] 2xl:leading-[20px] 3xl:text-[25px] 3xl:leading-[33px] " >
              {/* event time */}
                <h5 className="pb-5" >{landingPageContent.Events.eventMid.eventTime}</h5>
                <h5>{landingPageContent.Events.eventMid.eventSeats}</h5>
                <h5>{landingPageContent.Events.eventMid.eventLocation}</h5>
                <h5 className="font-bold" >{landingPageContent.Events.eventMid.locationSite}</h5>
                <h5 className="py-4" >{landingPageContent.Events.eventMid.eventFeast}</h5>
                <h5 className="py-4" >{landingPageContent.Events.eventMid.showOne}</h5>
                <h5 className="py-4" >{landingPageContent.Events.eventMid.showTwo}</h5>
                <h5 className="pt-4" >{landingPageContent.Events.eventMid.showThree}</h5>
                <h5>{landingPageContent.Events.eventMid.showFour}</h5>
          </div>
            </div>
        </div>
        {/* mid end */}

        {/* right */}
        <div className="flex flex-col bg-[#EEEEEE] sm:items-start " >
            <img className='2xl:w-[657px] 2xl:h-[285px] 3xl:w-[657px] 3xl:h-[385px] object-cover  ' src={homeConcert} alt="" />
            <div className=" p-5 sm:text-left " >
           <div className="flex justify-evenly sm:justify-start" >
           <LatestTag event={true} fill={"black"} tagName={"coming soon"} />
           </div>
            
            

          <h1 className="uppercase text-black text-[18px] 2xl:text-[38px] 3xl:text-[51px] font-medium  py-5" >{landingPageContent.Events.eventRight.eventDate}</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left " >
             
                <h5 className="pb-5 2xl:pb-0 2xl:text-[18px] 3xl:pb-0 3xl:text-[27px] " >{landingPageContent.Events.eventRight.concertType}</h5>
                {/* price */}
                <div className="pb-4 2xl:py-8 3xl:py-10 " >
                <h5 className="2xl:text-[18px] 3xl:text-[27px]" >Ticket Price</h5>
                <h5 className="font-medium 2xl:text-[22px] 3xl:text-[38px] " >{landingPageContent.Events.eventRight.ticketPrice}</h5>
                </div>

                <div className="pb-4" >
                <h5 className="2xl:text-[18px] 3xl:text-[27px]" >VIP Tickets</h5>
                <h5 className="font-medium 2xl:text-[22px] 3xl:text-[38px]" >{landingPageContent.Events.eventRight.vipTicketPrice}</h5>
                </div>
               
          </div>
            </div>
        </div>
        {/* right end */}

      </div>
    </div>
  );
}

export default Events;
