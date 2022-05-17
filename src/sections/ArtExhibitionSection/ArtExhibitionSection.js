import React from 'react'
import insta from "../../assets/images/insta-white.png";
import featuredImage from '../../assets/images/featuredImage.jpeg'
import SocialContact from '../../components/Artist/SocialContact'

import ArtExhibitionItem from '../../components/ArtExhibitionItem/ArtExhibitionItem'
import art1 from '../../assets/images/art1.png'
import art2 from '../../assets/images/art2.png'
import art3 from '../../assets/images/art3.png'
import { Link } from 'react-router-dom';


function ArtExhibitionSection() {
  return (
   
    <section className='flex flex-col 2xl:flex-row bg-[#43A047] py-20 pl-5 pr-5 2xl:pr-0 2xl:pl-14 2xl:pt-28 ' >
        <div className="featured 2xl:mt-12 ">
          <h1  className=' text-white text-bold text-4xl 2xl:text-left 2xl:w-[300px] ' >
          FEATURED ARTIST JAMEL ROBINSON
          <hr />
          </h1>

          <div className="featuredPara text-white text-left 2xl:text-[18px] ">
          <p className='mt-10 mb-10 ' >
          Jamel has most recently been celebrated by the New York Times and CBS
News for his "Beauty from Ashes", solo exhibition and teaching artist
residency at the Hudson River Museum in New York.
          </p>

          <p className='mt-10 mb-20 ' >
          The body of work was curated in response to "African American Art in the
20th Century", the Smithsonian American Art Museum's traveling
exhibition of select permanent works opened at the Hudson River
Museum at the start of Robinson's residency in the fall of 2021.
Robinson lives and works in Harlem, New York City where he was born
and raised.
          </p>
          </div>

         
          <div className="text-white border-2 border-white rounded-full p-2 w-fit flex items-center my-5 2xl:text-[23px] font-light 2xl:pl-4 2xl:pr-28 " >
            <img className='w-[26px] h-[26px]  ' src={insta} alt="" />
            <h5 className="ml-5" >@iamjamelrobinson</h5>
            <h5 className="mx-3" >|</h5>
            <h5>{5128} {'FOLLOWERS'}</h5>
            </div>
        
        </div>

        <div className='flex justify-center 2xl:ml-10 ' >
        <img src={featuredImage} className='rounded-l-2xl w-64 2xl:w-[1400px] object-contain ' alt="" />
        </div>
    </section>
  )
}

export default ArtExhibitionSection