import React from 'react'

function TagButton({name}) {
  return (
    <div className='border-2 px-2 py-1 rounded-full m-1 flex items-center justify-center ' >
        <span className='text-[white] text-[0.5rem] ' >{name}</span>
    </div>
  )
}

export default TagButton