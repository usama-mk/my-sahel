import React from 'react'

function BlackHighlight({name}) {
  return (
    <div className='bg-black pl-5 pr-10 py-3 text-white w-fit rounded-full uppercase font-medium 3xl:text-[32px] 3xl:pr-16 3xl:pl-8 ' >{name}</div>
  )
}

export default BlackHighlight