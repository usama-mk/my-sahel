import React from 'react'
import arrowBlack from "../../assets/images/arrowBlack-2x.png";
import { LatestTag } from '../LatestItem/LatestTag';
import { useNavigate } from "react-router-dom";



function LatestItemTwo({image, text, address, tagName}) {
  let navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/${address}`)} className='bg-[#EEEEEE] text-left cursor-pointer ' >
        <img className='w-[800px] ' src={image} alt="" />
       <div className='p-5 flex justify-between items-end 2xl:justify-start sm:block ' >
       <div>
       <LatestTag fill={"black"} tagName={tagName} />
        <h1  className=' my-5 text-[22px] uppercase font-medium 2xl:text-[30px] 3xl:text-[50px] ' >{text}</h1>
       </div>
        <img className='my-5 w-5 object-contain mb-7 2xl:mb-0  ' src={arrowBlack} alt="" />
       </div> 
    </div>
  )
}

export default LatestItemTwo