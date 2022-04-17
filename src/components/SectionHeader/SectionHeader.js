import React from 'react'

function SectionHeader({name}) {
  return (
    <div className=' text-left m-2 border-b-2 border-black uppercase ' >
        <h1>{name}</h1>
    </div>
  )
}

export default SectionHeader