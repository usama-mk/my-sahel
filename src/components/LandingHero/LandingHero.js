import React from "react";
import TagButton from "./TagButton";
import heroGirl from '../../assets/images/heroGirl.png'

function LandingHero() {
  const SponserButton = () => {
    return (
      <h5 className=" px-2 py-1 border-white border-2 h-fit rounded-full text-center uppercase bg-white my-7 text-[14px] ">
        BECOME A SPONSER
      </h5>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero Left */}
      <div className="bg-[#009688] sm:w-[50%] w-[100%] flex flex-col p-5 items-center sm:items-start  ">
        <div className="flex flex-wrap justify-center sm:flex-nowrap">
          <TagButton name="BENEFIT CONCERT" />
          <TagButton name="BENEFIT CONCERT" />
        </div>

        <h1 className="text-[white] uppercase sm:text-left mt-2 ">
          My Sahel, MY BEAUTIFUL Home
        </h1>
        <h5 className="text-[white] uppercase text-[10px] sm:text-left  ">
          Live Entertainment Experience with a <span className="font-bold" >Humanitarian Purpose</span>
        </h5>
        <div className="w-fit">
          <SponserButton />
        </div>

        <h6 className="uppercase text-[white] opacity-30 text-[10px]  " >
            <span>25th - 26th MAY 2022.</span>
            <span className="ml-5" >MID SEP 2022</span>
        </h6>
      </div>
      {/* hero right */}
      <div className="bg-[gray] sm:w-[50%] w-[100%] ">
        <div className=" relative text-[white] ">
        <img src={heroGirl} className='opacity-[88%]' alt="" />
         <div className=" img-overlay absolute bottom-0 text-left " >
         <h5 className=" text-left p-4 pb-0 " >Placeholder text talking about the context of the image</h5>
          <h5 className="  font-bold p-4 pt-1">
          Artist Name
          </h5>
         </div>
        </div>   
      </div>
    </div>
  );
}

export default LandingHero;
