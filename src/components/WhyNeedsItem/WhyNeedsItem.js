import React from 'react'
import { LatestTag } from '../LatestItem/LatestTag'
import quoteImg from '../../assets/images/quote@2x.png'


function WhyNeedsItem({tagName, heading, image, headingTwo, paraOne, paraTwo, quote}) {
  return (
    <div className='flex flex-col items-start ' >
        <div className='m-4 mb-2 3xl:m-12 3xl:mb-6' >
        <LatestTag tagName={tagName} event={true} fill={"black"} />
        <h1 className='text-left font-medium uppercase 3xl:text-[50px] ' >{heading}</h1>
        </div>
        <img className='3xl:w-[2230px] 3xl:h-[516px] object-cover w-[100vw]  ' src={image} alt="" />
        <div className='m-4 mb-16 3xl:m-12 3xl:mb-36 text-left ' >
        <h1 className='text-left font-bold uppercase 3xl:text-[45px] ' >{headingTwo}</h1>

        <p className='font-light 3xl:text-[23px] my-10 ' > {paraOne}
</p>
<p className='font-light 3xl:text-[23px] mb-5  ' >{paraTwo}
</p>

<div className='flex mt-16 items-center  ' >
    <img className='mr-5 w-28 3xl:w-[153px] ' src={quoteImg} alt="" />
    <h1 className='3xl:text-[54px] text-left w-[70%] ' >{quote}</h1>
</div>

        </div>
    </div>
  )
}

export default WhyNeedsItem