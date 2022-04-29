import React from 'react'
import eventCoverImg from '../../assets/images/eventCover@2x.png'
import { landingPageContent } from '../../utilities/Template/Template'

function EventCover() {
  return (
    <div className='relative' >
        <img className=' 3xl:w-[1920px] 3xl:h-[641px] opacity-[98%] ' src={eventCoverImg} alt="" />
        <div className='absolute bottom-0 pb-2 2xl:pb-10 3xl:pb-10 flex flex-col items-center w-full text-white img-overlay   ' >
        <h1 className='uppercase text-[20px] 3xl:text-[89px] 3xl:leading-[83px] font-medium text-center ' >{landingPageContent.EventCover.heading}</h1>
        <h5 className='uppercase text-[10px] 3xl:text-[34px] text-center'>{landingPageContent.EventCover.subHeading}</h5>
        </div>
    </div>
  )
}

export default EventCover