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
        <div className="flex flex-col justify-evenly sm:items-start p-3 bg-[#43A047] sm:w-[34%] 2xl:p-8 3xl:p-10 ">
          {/* tags */}
          <div className="flex justify-evenly sm:justify-start">
            <LatestTag event={true} tagName={"Event 1"} />
            <LatestTag event={true} tagName={"Day 1"} />
          </div>
          {/* event title */}
          <h1 className="uppercase text-white text-[24px] font-medium 2xl:text-[70px] 3xl:text-[99px] sm:text-left ">UN - OCHA ‘MySahel’</h1>
          {/* event date */}
          <h1 className="uppercase text-white text-[18px] font-medium 2xl:text-[40px] 3xl:text-[52px] " >25th may 2022</h1>

          {/* event details */}
          <div className="text-white py-10 sm:text-left  2xl:text-[20px] 2xl:leading-[30px] 3xl:text-[33px] 3xl:leading-[44px] " >
              {/* event time */}
                <h5 className="pb-5  " >6pm - 9pm</h5>
                <h5>50-60 Seats Available</h5>
                <h5>@ Hotel Boma</h5>
                <h5 className="font-bold" >http://hotelbloma.net/</h5>
          </div>

          {/* live */}
          <h5 className="pt-t pb-5 text-white 2xl:text-[20px] 3xl:text-[33px]" >Live Acoustic Concert</h5>

          {/* price */}
          <div className="text-white pb-5" >
              <h5 className="2xl:text-[20px] 3xl:text-[33px]" >Ticket Price</h5>
              <h1 className="text-[22px] 2xl:text-[46px] 3xl:text-[66px]" >$00.00</h1>
          </div>

          {/* access event type */}
          <h5 className="pb-3 text-white 2xl:text-[19px] 3xl:text-[28px]" >Private Events - Invite Only</h5>
        </div>
        {/* left end */}

        {/* mid  */}
        <div className="flex flex-col bg-[#E5E5E5] sm:items-start " >
            <img src={concert} className='2xl:w-[457px] 2xl:h-[285px] 3xl:w-[657px] 3xl:h-[385px] object-cover ' alt="" />
            <div className=" p-5 sm:text-left 2xl:p-8 3xl:p-10 " >
            <div className="flex justify-evenly sm:justify-start ">
            <LatestTag event={true} fill={"black"} tagName={"Event 1"} />
            <LatestTag event={true} fill={"black"} tagName={"Day 2"} />
          </div>

          <h1 className="uppercase text-black text-[18px] font-medium py-5 2xl:text-[40px] 3xl:text-[51px]" >26th May 2022</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left 2xl:text-[16px] 2xl:leading-[20px] 3xl:text-[25px] 3xl:leading-[33px] " >
              {/* event time */}
                <h5 className="pb-5" >7pm - 11pm</h5>
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
            <img className='2xl:w-[457px] 2xl:h-[285px] 3xl:w-[657px] 3xl:h-[385px] object-cover  ' src={homeConcert} alt="" />
            <div className=" p-5 sm:text-left " >
           <div className="flex justify-evenly sm:justify-start" >
           <LatestTag event={true} fill={"black"} tagName={"coming soon"} />
           </div>
            
            

          <h1 className="uppercase text-black text-[18px] 2xl:text-[38px] 3xl:text-[51px] font-medium  py-5" >mid sep 2022</h1>
             {/* event details */}
             <div className="text-black py-0 sm:text-left " >
             
                <h5 className="pb-5 2xl:pb-0 2xl:text-[18px] 3xl:pb-0 3xl:text-[27px] " >Virtual Concert</h5>
                {/* price */}
                <div className="pb-4 2xl:py-8 3xl:py-10 " >
                <h5 className="2xl:text-[18px] 3xl:text-[27px]" >Ticket Price</h5>
                <h5 className="font-medium 2xl:text-[22px] 3xl:text-[38px] " >€20 - €30</h5>
                </div>

                <div className="pb-4" >
                <h5 className="2xl:text-[18px] 3xl:text-[27px]" >Ticket Price</h5>
                <h5 className="2xl:text-[22px] 3xl:text-[38px]" >€20 - €30</h5>
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
