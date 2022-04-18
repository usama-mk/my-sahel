import React from "react";
import { LatestTag } from "../LatestItem/LatestTag";
import smallDownArrow from '../../assets/images/small-down-arrow@2x.png'

function FeaturedArtist({ image, heading, desc, tagNames }) {
  return (
    <div className="flex flex-col justify-evenly sm:items-start py-3 mb-10 sm:w-[33%]">
      <img src={image} alt="" />
      <div className="flex flex-col p-4">
        <div className="flex justify-evenly sm:justify-start  py-3  ">
          
          {
              tagNames.map((tagName , key)=>
              <LatestTag key={key} fill={"black"} tagName={tagName}/> )
          }
          
          
        </div>
        <h1 className="uppercase text-[24px] py-2 sm:text-left font-medium">{heading}</h1>
        <h5 className="max-h-[80px] overflow-hidden text-ellipsis  py-2 sm:text-left">{desc}</h5>
        {/* read more */}
        <div className="flex items-center mt-5" >
        <img className="w-5" src={smallDownArrow} alt="" />
        <h5 className="uppercase ml-3 text-[#C3C3C3] " >read more</h5>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArtist;
