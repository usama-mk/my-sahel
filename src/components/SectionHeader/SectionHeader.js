import React from 'react'
import smallArrow from '../../assets/images/small-arrow-2x.png'

function SectionHeader({name, events, borderBottomWhite}) {
  return (
    <div className={` text-left m-2 border-b-2 ${borderBottomWhite?"border-white":"border-black"} uppercase flex items-center `} >
        <h1 className='text-[25px]' >{name}</h1>

       {
         events &&
         <div className='flex items-center ml-[10%] w-[100%]' >
         <h4 className='text-[12px]' >
         buy ticket
         </h4>
         <img className='w-2 object-contain ml-[5%]' src={smallArrow} alt="" />
       </div>
       }
    </div>
  )
}

export default SectionHeader