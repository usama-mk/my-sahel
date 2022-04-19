import React from 'react'
import BlackHighlight from '../BlackHighlight/BlackHighlight'

function DonateBanner() {
  return (
    <div className='flex flex-col sm:flex-row  bg-[#06BCD3] p-3 ' >
      {/* left */}
      <div className='sm:w-[50%]' >
      <h1 className='uppercase text-black font-medium sm:text-[24px] sm:py-5 sm:w-[50%] sm:text-left ' >donate and make a difference</h1>
      </div>
{/* right */}
      <div className=' flex flex-col items-center  sm:w-[50%] sm:items-start ' >
        <h1 className='uppercase my-5 sm:text-left ' >ANY CONTRIBUTION WILL
        DIRECTLY GO TO THE SAHEL REGION
        FOR HUMANITARIAN PURPOSES
        </h1>

        <BlackHighlight name={"donate"} />
      </div>
    </div>
  )
}

export default DonateBanner