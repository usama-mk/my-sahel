import React from 'react'

function TagButton({name}) {
  return (
    <div className='border-2 px-2 py-1 rounded-full m-1 3xl:m-4 flex items-center justify-center  ' >
        <span className='text-[white] text-[0.5rem] 3xl:text-[27px] 3xl:px-4 uppercase ' >{name}</span>
    </div>
  )
}

export default TagButton