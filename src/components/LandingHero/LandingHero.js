import React from "react";
import TagButton from "./TagButton";
import heroGirl from '../../assets/images/heroGirl.png'

function LandingHero() {
  const SponserButton = () => {
    return (
      <h5 className=" px-2 py-1 border-white border-2 h-fit rounded-full text-center uppercase bg-white my-7 text-[14px] 3xl:text-[41px] 3xl:px-12 3xl:my-16 3xl:py-4 ">
        BECOME A SPONSER
      </h5>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero Left */}
      <div className="bg-[#009688] sm:w-[50%] w-[100%] flex flex-col p-5 items-center justify-center sm:items-start 3xl:p-12  ">
        <div className="flex flex-wrap justify-center sm:flex-nowrap">
          <TagButton name="BENEFIT CONCERT" />
          <TagButton name="art exhibition" />
        </div>

        <h1 className="text-[white] font-medium uppercase sm:text-left mt-2 3xl:text-[112px] 3xl:leading-[112px] ">
          My Sahel, <br />
          MY BEAUTIFUL Home
        </h1>
        <h5 className="text-[white] uppercase text-[10px] sm:text-left 3xl:text-[34px] 3xl:w-[65%]  ">
          Live Entertainment Experience with a <span className="font-bold" >Humanitarian Purpose</span>
        </h5>
        <div className="w-fit">
          <SponserButton />
        </div>

        <h6 className="uppercase text-[white] opacity-30 text-[10px] 3xl:text-[24px]   " >
            <span>25th - 26th MAY 2022.</span>
            <span className="ml-5" >MID SEP 2022</span>
        </h6>
      </div>
      {/* hero right */}
      <div className="bg-[gray] sm:w-[50%] w-[100%] h-[100%] ">
        <div className=" relative text-[white]  h-[100%] ">
        <img src={heroGirl} className='opacity-[88%]  h-[100%] object-contain' alt="" />
         <div className=" img-overlay absolute bottom-0 text-left " >
         <h5 className=" text-left p-4 pb-0 3xl:text-[18px] 3xl:ml-12 " >Placeholder text talking about the context of the image</h5>
          <h5 className="  font-bold p-4 pt-1 3xl:text-[18px] 3xl:ml-12 ">
          Artist Name
          </h5>
         </div>
        </div>   
      </div>
    </div>
  );
}

export default LandingHero;
