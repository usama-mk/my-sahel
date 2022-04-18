import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import artistOne from '../../assets/images/artistOne.png'
import artistTwo from '../../assets/images/artistTwo.png'
import artistThree from '../../assets/images/artistThree.png'

function ArtNft() {
  return (
    <div>
         <SectionHeader name={"art exhibition & nft"} />
         <div className=" sm:flex mb-10 ">
         <FeaturedArtist heading={"live art exhibitions"}
         image={artistOne} 
         tagNames={["art exhibition"]}
         />
          <FeaturedArtist heading={"nfts through eluv.io platform"}
         image={artistTwo} 
         tagNames={["nft", "eluv.io"]}
         />

        <FeaturedArtist heading={"featuring sahel's most talented artists"}
         image={artistThree} 
         tagNames={["artists"]}
         />
         </div>
    </div>
  )
}

export default ArtNft