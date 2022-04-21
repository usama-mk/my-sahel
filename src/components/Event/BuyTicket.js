import React from 'react'
import btArrow from '../../assets/images/buyTicketArrow.png'

function BuyTicket() {
  return (
    <div className='bg-[black] text-white w-fit p-5 flex items-center rounded-full  ' >
        <h1 className='uppercase' >
            Buy ticket
            </h1>

            <img src={btArrow} className='object-contain ml-5 2xl:ml-10 2xl:mr-5 ' alt="" />        
    
    </div>
  )
}

export default BuyTicket