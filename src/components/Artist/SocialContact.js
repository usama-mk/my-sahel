import React from 'react'

function SocialContact({socialImage, username, followers, spotify}) {
  return (
  
            <div className="flex items-center my-5 2xl:text-[23px] font-light " >
            <img className='w-[26px] h-[26px] ' src={socialImage} alt="" />
            <h5 className="ml-5" >{username}</h5>
            <h5 className="mx-3" >|</h5>
            <h5>{followers} {spotify?'listeners/month':'followers'}</h5>
            </div>
 
  )
}

export default SocialContact