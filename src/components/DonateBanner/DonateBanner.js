import React from 'react'
import BlackHighlight from '../BlackHighlight/BlackHighlight'

function DonateBanner() {
  return (
    <div className='flex flex-col sm:flex-row  bg-[#06BCD3] p-3 sm:p-10 3xl:p-16 ' >
      {/* left */}
      <div className='sm:w-[50%]' >
      <h1 className='uppercase text-black font-medium sm:text-[24px] sm:py-5 sm:w-[50%] sm:text-left 3xl:text-[95px] 3xl:w-[70%] 3xl:leading-[88px]  ' >donate and make a difference</h1>
      </div>
{/* right */}
      <div className=' flex flex-col items-center  sm:w-[50%] sm:items-start ' >
        <h1 className='uppercase my-5 sm:text-left sm:w-[50%] 3xl:text-[34px] 3xl:leading-[46px] ' >ANY CONTRIBUTION WILL
        DIRECTLY GO TO THE SAHEL REGION
        FOR HUMANITARIAN PURPOSES
        </h1>

        <BlackHighlight name={"donate"} />
      </div>
    </div>
  )
}

export default DonateBanner