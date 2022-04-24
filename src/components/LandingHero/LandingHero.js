import React from "react";
import TagButton from "./TagButton";
import heroGirl from '../../assets/images/heroGirl.png'
import { landingPageContent } from "../../utilities/Template/Template";

function LandingHero() {
  const SponserButton = () => {
    return (
      <h5 className=" px-2 py-1 border-white border-2 h-fit rounded-full text-center uppercase bg-white my-7 text-[14px] 2xl:text-[30px] 2xl:px-8 2xl:my-10 2xl:py-2  3xl:text-[41px] 3xl:px-12 3xl:my-16 3xl:py-4 ">
        {landingPageContent.LandingHero.sponserButtonText}
      </h5>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero Left */}
      <div className="bg-[#009688] sm:w-[50%] w-[100%] flex flex-col p-5 items-center justify-center sm:items-start 2xl:p-8 3xl:p-12  ">
        <div className="flex flex-wrap justify-center sm:flex-nowrap">
          <TagButton name={landingPageContent.LandingHero.tagOne} />
          <TagButton name={landingPageContent.LandingHero.tagTwo} />
        </div>

        <h1 className="text-[white] font-medium uppercase sm:text-left mt-2 2xl:text-[70px] 2xl:leading-[70px] 3xl:text-[112px] 3xl:leading-[112px] ">
          My Sahel, <br />
          MY BEAUTIFUL Home
        </h1>
        <h5 className="text-[white] uppercase text-[10px] sm:text-left 2xl:text-[20px] 2xl:w-[65%] 3xl:text-[34px] 3xl:w-[65%]  ">
          Live Entertainment Experience with a <span className="font-bold" >Humanitarian Purpose</span>
        </h5>
        <div className="w-fit">
          <SponserButton />
        </div>

        <h6 className="uppercase text-[white] opacity-30 text-[10px] 2xl:text-[18px] 3xl:text-[24px]   " >
            <span>{landingPageContent.LandingHero.dateStart}</span>
            <span className="ml-5" >{landingPageContent.LandingHero.dateEnd}</span>
        </h6>
      </div>
      {/* hero right */}
      <div className="bg-[gray] sm:w-[50%] w-[100%] h-[100%] ">
        <div className=" relative text-[white]  h-[100%] ">
        <img src={heroGirl} className='opacity-[88%]  h-[100%] object-contain' alt="" />
         <div className=" img-overlay absolute bottom-0 text-left " >
         <h5 className=" text-left p-4 pb-0 2xl:text-[12px] 2xl:ml-8 3xl:text-[18px] 3xl:ml-12 " >{landingPageContent.LandingHero.imageContext}</h5>
          <h5 className="  font-bold p-4 pt-1 2xl:text-[12px] 2xl:ml-8 3xl:text-[18px] 3xl:ml-12 ">
          {landingPageContent.LandingHero.artistName}
          </h5>
         </div>
        </div>   
      </div>
    </div>
  );
}

export default LandingHero;
