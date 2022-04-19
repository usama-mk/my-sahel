import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import artistOne from '../../assets/images/artistOne.png'
import artistTwo from '../../assets/images/artistTwo.png'
import artistThree from '../../assets/images/artistThree.png'
import artistFour from '../../assets/images/artistFour.png'
import artistFive from '../../assets/images/artistFive.png'
import artistSix from '../../assets/images/artistSix.png'
import desertWalk from '../../assets/images/desert-walk@2x.png'
import { LatestTag } from '../../components/LatestItem/LatestTag'

function FeaturedArtists() {

    const WhySahelHelp=()=>{
        return(
            <div className='flex flex-col sm:flex-row   ' >
                {/* why left */}
                <div className='sm:w-[50%] bg-[#161616] text-white py-10 px-5 ' >

                    <SectionHeader name={"why the sahel region needs your help"} borderBottomWhite={"true"} />
                    
                    <div className='3xl:m-8' >
                    <div className="flex justify-evenly sm:justify-start  py-3  ">
                    <LatestTag event={true} tagName={"about"}/> 
                    <LatestTag event={true} tagName={"history"}/> 
                     </div>

                     <h1 className='font-sans font-bold 2xl:text-[45px] text-[24px] text-left mt-5 ' >The standard Lorem Ipsum passage, used since the 1500s. Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC</h1>

                     <h5 className='font-light text-[12px] my-10 text-left 2xl:text-[23px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h5>

                    <h5 className='font-light text-[12px] text-left 2xl:text-[23px] ' >
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                    </h5>




                </div>
                    </div>
                {/* why left end */}

                 {/* why right */}
                 <div className='sm:w-[50%]' >
                    <img className='h-[100%] object-cover'  src={desertWalk} alt="" />
                </div>
                {/* why right end */}

                

            </div>
        )
    }
  return (
    <div>
         <SectionHeader name={"Featured Artists"} />
         {/* row 1 */}
         <div className=" sm:flex mb-10 ">
         <FeaturedArtist heading={"vieus farka toure"}
         desc={"Malian singer and guitarist, Viex incorporates elements of rock and Latin music into the Saharan blues and traditional melodies of Mali in his songs, which reflect a deep connection to and reverence for family and country."}  image={artistOne} 
         tagNames={["genre", "instruments"]}
         />
          <FeaturedArtist heading={"Amadou & Mariam"}
         desc={"Amadou & Mariam are a musical husband-and-wife duo from Mali. They are both known for their songwriting and became famous for their thoughtful and provocative lyrics, alongside their blend of West African influences and Western R&B and funk."}  image={artistTwo} 
         tagNames={["genre", "instruments"]}
         />

        <FeaturedArtist heading={"Songhoy Blues"}
         desc={"Songhoy Blues is a blues music group from Mali made up of four talented, hungry, sharp and outward-looking young men from a part of the world that has had more than its share of pain and conflict in recent years."}  image={artistThree} 
         tagNames={["genre", "instruments"]}
         />
         </div>

         {/* row 2 */}
         <div className=" sm:flex mb-10 ">
         <FeaturedArtist heading={"Songhoy Blues"}
         desc={"OUMY Gueye (OMG) is a young Senegalese singer, rapper, and award-winning artist. Widely popular, her songs are inspired by world music and African beats. OMG is passionate about the youth rebuilding a stable Sahel region, specifically one of peace."}  image={artistFour} 
         tagNames={["genre", "instruments"]}
         />
          <FeaturedArtist heading={"Tal National"}
         desc={"Tal National is Niger’s most popular band. Composed of 13 singers and instrumentalists, its members represent the country’s variety of ethnic and cultural strains. The electric dance band is known for energetic and fiery performances. The band’s vision is for a peaceful and multi-ethnic Niger."}  image={artistFive} 
         tagNames={["genre", "instruments"]}
         />

        <FeaturedArtist heading={"Bassekou Kouyate"}
         desc={"Bassekou Kouyate is a true masters of ngoni, an ancient traditional lute found throughout West Africa. He is considered one of the world’s most visible African artists thanks to multiple awards and achievements including collaborations with notable artists such as U2 and Carlos Santana."}  image={artistSix} 
         tagNames={["genre", "instruments"]}
         />
         </div>
         {/* row 2 end */}

         {/* row 3 image text */}

         <WhySahelHelp/>

        
    </div>
  )
}

export default FeaturedArtists