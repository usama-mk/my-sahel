import React from 'react'
import TagOption from '../../components/TagOption/TagOption'
import { landingPageContent } from '../../utilities/Template/Template'

function TagOptions() {
  return (
    <div className='p-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-start items-center 3xl:my-10 ' >
       {
       landingPageContent.TagOptions.map((tagOptionName)=>
       <TagOption name={tagOptionName} />
       )
       }
    </div>
  )
}

export default TagOptions