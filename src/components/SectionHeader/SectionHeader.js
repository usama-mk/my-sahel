import React from 'react'
import smallArrow from '../../assets/images/small-arrow-2x.png'

function SectionHeader({name, events, borderBottomWhite}) {
  return (
    <div className={` text-left m-2 border-b-2 ${borderBottomWhite?"border-white":"border-black"} uppercase flex items-center 2xl:m-8 2xl:mt-16 3xl:m-8 3xl:mt-16 `} >
        <h1 className='text-[25px] 2xl:text-[60px] 3xl:text-[60px] ' >{name}</h1>

       {
         events &&
         <div className='flex items-center ml-[10%] w-[100%]' >
         <h4 className='text-[12px] font-medium 2xl:text-[23px] 3xl:text-[23px]' >
         buy ticket
         </h4>
         <img className='w-2 object-contain ml-[5%]' src={smallArrow} alt="" />
       </div>
       }
    </div>
  )
}

export default SectionHeader