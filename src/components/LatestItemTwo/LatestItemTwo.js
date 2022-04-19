import React from 'react'
import arrowBlack from "../../assets/images/arrowBlack-2x.png";
import { LatestTag } from '../LatestItem/LatestTag';


function LatestItemTwo({image, text}) {
  return (
    <div className='bg-[#EEEEEE] text-left' >
        <img className='w-[800px] ' src={image} alt="" />
       <div className='p-5' >
       <LatestTag fill={"black"} tagName="art exhibition" />
        <h1  className=' my-5 text-[22px] uppercase font-medium 3xl:text-[50px] ' >{text}</h1>
        <img className='my-5 w-5  ' src={arrowBlack} alt="" />
       </div> 
    </div>
  )
}

export default LatestItemTwo