import React from 'react'

function TagOption({name}) {
  return (
    <div className='m-3 px-6 py-2 border-2 border-black rounded-full w-fit uppercase font-medium ' >
        {name}
    </div>
  )
}

export default TagOption