import React from "react";
import BlackHighlight from "../../components/BlackHighlight/BlackHighlight";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function SponserBanner() {
  return (
    <div id="sponser" className="bg-[#FEBF10] p-10">
      <SectionHeader name={"become a sponser"} />
      <div className="m-8 " >
      <div className="flex justify-evenly sm:justify-start  py-3  ">
        <LatestTag event={true} fill={"black"} tagName={"benefit concert"} />
        <LatestTag event={true} fill={"black"} tagName={"art exhibition"} />
      </div>
     <div className="flex justify-center 2xl:justify-start " >
     <h1 className=" text-[20px] sm:text-[40px] font-medium text-left 2xl:text-left w-[65%] 2xl:w-[60%] uppercase font-sans 3xl:text-[112px] 3xl:leading-[104px] 3xl:w-[70%] 3xl:my-4 " >
          you can make a difference by BECOMING  a #mysahel sponsor today
      </h1>
     </div>

      <div className="flex justify-center sm:justify-between items-center w-[95%] my-10 flex-wrap     " >
          <BlackHighlight name={"make a pledge"} />
          <div className="mt-5 sm:mt-0 3xl:text-[34px] " >
          <span className="uppercase " >IN COLLABORATION to </span> 
          <span className="uppercase font-bold" >
          UNITED NATIONS OCHA PROJECT
          </span>
          </div>
      </div>
      </div>
    </div>
  );
}

export default SponserBanner;
