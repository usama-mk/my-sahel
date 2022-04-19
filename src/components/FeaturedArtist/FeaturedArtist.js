import React from "react";
import { LatestTag } from "../LatestItem/LatestTag";
import smallDownArrow from '../../assets/images/small-down-arrow@2x.png'

function FeaturedArtist({ image, heading, desc, tagNames, art }) {
  return (
    <div className="flex flex-grow flex-col justify-evenly sm:items-start py-3 mb-10 sm:w-[33%] sm:h-[100%] ">
      <img src={image} className='h-[100%] 3xl:w-[640px] 3xl:h-[633px] object-cover ' alt="" />
      <div className="flex flex-col p-4">
        <div className="flex justify-evenly sm:justify-start  py-3  ">
          
          {
              tagNames.map((tagName , key)=>
              <LatestTag event={true} key={key} fill={"black"} tagName={tagName}/> )
          }
          
          
        </div>
        <h1 className={`uppercase text-[24px] py-2 leading-[45px] sm:text-left 3xl:$${art?'w-[20%]':'w-[90%]'} 3xl:h-[135px] 3xl:leading-[55px] 3xl:${art?'text-[50px] mr-10':'text-[60px] mr-10 '} font-medium `}>{heading}</h1>
        {
          desc &&
          <>
          <h5 className="max-h-[98px] overflow-hidden text-ellipsis font-light leading-[31px]  py-2 sm:text-left 3xl:text-[23px] ">{desc}</h5>
        {/* read more */}
        <div className="flex items-center mt-5" >
        <img className="w-5" src={smallDownArrow} alt="" />
        <h5 className="uppercase ml-3 text-[#C3C3C3] " >read more</h5>
        </div>
          </>
        }
      </div>
    </div>
  );
}

export default FeaturedArtist;
