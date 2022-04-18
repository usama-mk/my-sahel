import React from "react";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import concert from '../../assets/images/Concert.png'
import homeConcert from '../../assets/images/home concert.png'


function Events() {
  return (
    <div>
      <SectionHeader name={"events"} events={true} />
      {/* events body */}
      <div className="sm:flex mb-10">
        {/* left */}
        <div className="flex flex-col justify-evenly sm:items-start p-3 bg-[#43A047] sm:w-[33%] ">
          {/* tags */}
          <div className="flex justify-evenly sm:justify-start">
            <LatestTag tagName={"Event 1"} />
            <LatestTag tagName={"Day 1"} />
          </div>
          {/* event title */}
          <h1 className="uppercase text-white text-[24px] sm:text-left ">UN - OCHA ‘MySahel’</h1>
          {/* event date */}
          <h1 className="uppercase text-white text-[18px] font-medium " >25th may 2022</h1>

          {/* event details */}
          <div className="text-white py-10 sm:text-left " >
              {/* event time */}
                <h5 className="pb-5" >6pm - 9pm</h5>
                <h5>50-60 Seats Available</h5>
                <h5>@ Hotel Boma</h5>
                <h5 className="font-bold" >http://hotelbloma.net/</h5>
          </div>

          {/* live */}
          <h5 className="pt-t pb-5 text-white" >Live Acoustic Concert</h5>

          {/* price */}
          <div className="text-white pb-5" >
              <h5>Ticket Price</h5>
              <h1 className="text-[22px]" >$00.00</h1>
          </div>

          {/* access event type */}
          <h5 className="pb-3 text-white" >Private Events - Invite Only</h5>
        </div>
        {/* left end */}

        {/* mid  */}
        <div className="flex flex-col bg-[#E5E5E5] sm:items-start " >
            <img src={concert} alt="" />
            <div className=" p-5 sm:text-left " >
            <div className="flex justify-evenly sm:justify-start ">
            <LatestTag fill={"black"} tagName={"Event 1"} />
            <LatestTag fill={"black"} tagName={"Day 2"} />
          </div>

          <h1 className="uppercase text-black text-[18px] font-medium py-5" >26th May 2022</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left " >
              {/* event time */}
                <h5 className="pb-5" >6pm - 9pm</h5>
                <h5>50-60 Seats Available</h5>
                <h5>@ Hotel Boma</h5>
                <h5 className="font-bold" >http://hotelbloma.net/</h5>
                <h5 className="py-4" >drinks & Snacks Included</h5>
                <h5 className="py-4" >Acoustic performances</h5>
                <h5 className="py-4" >Live Panels & Talks</h5>
                <h5 className="pt-4" >Live Art Exhibition</h5>
                <h5>- Physical and Digital - NFT displays</h5>
          </div>
            </div>
        </div>
        {/* mid end */}

        {/* right */}
        <div className="flex flex-col bg-[#EEEEEE] sm:items-start " >
            <img src={homeConcert} alt="" />
            <div className=" p-5 sm:text-left " >
           <div className="flex justify-evenly sm:justify-start" >
           <LatestTag fill={"black"} tagName={"coming soon"} />
           </div>
            
            

          <h1 className="uppercase text-black text-[18px] font-medium  py-5" >mid sep 2022</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left " >
             
                <h5 className="pb-5" >Virtual Concert</h5>
                {/* price */}
                <div className="pb-4" >
                <h5>Ticket Price</h5>
                <h5>€20 - €30</h5>
                </div>

                <div className="pb-4" >
                <h5>Ticket Price</h5>
                <h5>€20 - €30</h5>
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
