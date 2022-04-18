import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import artistOne from '../../assets/images/artistOne.png'
import artistTwo from '../../assets/images/artistTwo.png'
import artistThree from '../../assets/images/artistThree.png'
import artistFour from '../../assets/images/artistFour.png'
import artistFive from '../../assets/images/artistFive.png'
import artistSix from '../../assets/images/artistSix.png'

function FeaturedArtists() {
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
        
    </div>
  )
}

export default FeaturedArtists