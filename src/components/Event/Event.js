import React from 'react'
import { LatestTag } from '../LatestItem/LatestTag'
import BuyTicket from './BuyTicket'

function Event({tagName, heading, concertType, privateEvents, date, seats, price, time, location, locationDetails, vipPrice}) {
  return (
    <div className='flex flex-col 2xl:flex-row   2xl:justify-start m-2 border-b-2 border-black 2xl:m-8 2xl:mt-16 3xl:m-8 3xl:mt-16' >
         {/* col one */}
         <div className='text-left 2xl:flex-grow 2xl:w-[60%] ' >
         <LatestTag event={true} fill={`black`} tagName={tagName}  />
         <h1 className='font-medium 3xl:text-[89px] 3xl:leading-[80px] my-10 uppercase 2xl:mr-16 '>
         {heading}
         </h1>

         <h5 className='font-bold 3xl:text-[30px] ' >
             {concertType}
         </h5>

         <h5  className=' 3xl:text-[30px] '>{privateEvents?'Private Events - Invite Only':''}</h5>
         </div>

         {/* col 2 */}
         <div className='2xl:w-[30%]' >
            

           {
               privateEvents?

               <>
               <div className='mb-10' >
            <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
            Date
            </h5>
            <h3 className='font-medium 3xl:text-[47px] text-left uppercase ' >{date}</h3>
            </div>
               <div className='mb-10 ' >
               <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
               Seats available
               </h5>
               <h3 className='font-medium 3xl:text-[47px] text-left ' >{seats}</h3>
               </div>
               </>

               :
               ''
           }

            <div className='mt-10 mb-10' >
            <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
            Ticket Price
            </h5>
            <h3 className='font-medium 3xl:text-[47px] text-left uppercase ' >{price}</h3>
            </div>
         </div>

         {/* col 3 */}
         <div className='2xl:w-[30%]' >
             {
                 privateEvents?
<>
<div className='mb-10' >

            <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
            Time
            </h5>
            <h3 className='font-medium 3xl:text-[47px] text-left uppercase ' >{time}</h3>
            </div>

            <div className='mb-10' >
            <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
            location
            </h5>
            <h3 className='font-medium 3xl:text-[47px] text-left uppercase ' >{location}</h3>
            <h3 className='font-medium 3xl:text-[25px] text-left uppercase' >{locationDetails}</h3>
            </div>

            <div className='mt-10 mb-10' >
            <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
             <BuyTicket/>
            </h5>
           
            </div>
</>
                 :
                 <div className='mt-10 mb-10' >
                 <h5 className='text-[#8D8D8D] 3xl:text-[23px] uppercase text-left  ' >
                 { privateEvents? 'Ticket Price':'vip tickets'}
                 </h5>
                 <h3 className='font-medium 3xl:text-[47px] text-left uppercase ' >{privateEvents?price:vipPrice}</h3>
                 </div>
             }
         
         </div>
    </div>
  )
}

export default Event