import React from 'react'
import { LatestTag } from '../LatestItem/LatestTag'

function ArtExhibitionItem({tagNames, heading, para, image, first}) {
  return (
    <div className="flex flex-col-reverse 2xl:flex-row 2xl:justify-center 2xl:items-center ">
      <div className={`p-10 flex-col ${first ? "bg-[#F2F2F2]" : ""} w-full `}>
        <div className="flex text-left 2xl:flex-grow 2xl:w-[60%] ">
          {tagNames.map((tagName, key) => (
            <LatestTag key={key} event={true} fill={`black`} tagName={tagName} />
          ))}
        </div>
        <h1 className=" font-medium text-left my-5 2xl:text-[50px] 2xl:leading-[45px]  " >
            {heading}
        </h1>

        <h3 className="text-left font-light 2xl:text-[23px] mt-10 max-w-4xl " >
            {para}
        </h3>

      </div>
       <img className=" h-[365px]  2xl:min-h-[564px]
       2xl:max-h-[600px]
       2xl:w-[1003px]
       2xl:max-w-[995px]
       2xl:min-[995]    
       object-cover " src={image} alt="" />
    </div>
  )
}

export default ArtExhibitionItem