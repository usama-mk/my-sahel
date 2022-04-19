import React from 'react'

export const LatestTag = ({ tagName, fill, event }) => {
    return (
      <div className={` mr-3 px-2 py-1 ${fill==="black"?"text-black border-black":"text-white border-white"} uppercase border-2  rounded-full w-fit text-[10px] 3xl:${event?'text-[16px]':'text-[27px]'} 3xl:px-8 3xl:py-2  `}>
        {tagName}
      </div>
    );
  };