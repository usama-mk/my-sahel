import React from "react";
import BlackHighlight from "../../components/BlackHighlight/BlackHighlight";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function SponserBanner() {
  return (
    <div className="bg-[#FEBF10] p-10">
      <SectionHeader name={"become a sponser"} />
      <div className="flex justify-evenly sm:justify-start  py-3  ">
        <LatestTag fill={"black"} tagName={"benefit concert"} />
        <LatestTag fill={"black"} tagName={"art exhibition"} />
      </div>
      <h1 className=" text-[20px] sm:text-[40px] font-medium text-left w-[60%] uppercase font-sans " >
          you can make a difference by become a #mysahel sponsor today
      </h1>

      <div className="flex justify-center sm:justify-between items-center w-[95%] my-10 flex-wrap     " >
          <BlackHighlight name={"make a pledge"} />
          <div className="mt-5 sm:mt-0" >
          <span className="uppercase " >IN COLLABORATION to </span> 
          <span className="uppercase font-bold" >
          UNITED NATIONS OCHA PROJECT
          </span>
          </div>
      </div>
    </div>
  );
}

export default SponserBanner;
