import React from 'react'
import { useNavigate } from 'react-router-dom'
import TagOption from '../../components/TagOption/TagOption'
import { scrollInto } from '../../utilities/scroll'
import { landingPageContent } from '../../utilities/Template/Template'

function TagOptions() {

  const navigate= useNavigate()

  const handleTagClick=(name, address)=>{
    if(name==="sponser"|| name==="donate"){
      scrollInto(address)
      
    }

   else{
    navigate(`/${address}`)
   }

  }

  return (
    <div className='p-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-start items-center 3xl:my-10 ' >
       {
       landingPageContent.TagOptions.map((tagOption, key)=>
       <div key={key} onClick={()=> handleTagClick(tagOption.name, tagOption.address)} >
         <TagOption  name={tagOption.name} />
         
       </div>
       )
       }
    </div>
  )
}

export default TagOptions