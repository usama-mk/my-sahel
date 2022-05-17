import React from 'react'

function BlackHighlight({name}) {
  return (
    <div className='bg-black text-center pl-5 pr-5 py-3 text-white w-fit rounded-full uppercase font-medium 3xl:text-[32px] 3xl:pr-8 3xl:pl-8 ' >{name}</div>
  )
}

export default BlackHighlight