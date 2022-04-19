import React from 'react'
import arrowBlack from "../../assets/images/arrowBlack-2x.png";


function TagOption({name}) {
  return (
    <div className=' flex justify-between items-center m-3 px-6 py-1 border-2 border-black rounded-full w-full sm:w-fit 3xl:px-12 3xl:py-2 ' >
        <h5 className=' uppercase font-medium 3xl:text-[44px] ' >{name}</h5>
        <img className='w-3 ml-6 object-contain 3xl:ml-24 3xl:w-6' src={arrowBlack} alt="" />
    </div>
  )
}

export default TagOption