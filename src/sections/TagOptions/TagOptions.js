import React from 'react'
import TagOption from '../../components/TagOption/TagOption'

function TagOptions() {
  return (
    <div className='p-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-start items-center 3xl:my-10 ' >
        <TagOption name={"why sahel need you"} />
        <TagOption name={"events"} />
        <TagOption name={"nft"} />
        <TagOption name={"artists"} />
        <TagOption name={"featured musicians"} />
        <TagOption name={"sponser"} />
        <TagOption name={"donate"} />
    </div>
  )
}

export default TagOptions