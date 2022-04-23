import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import artistOne from '../../assets/images/artistOne.png'
import artistTwo from '../../assets/images/artistTwo.png'
import artistThree from '../../assets/images/artistThree.png'

function ArtNft() {
  return (
    <div id='artnfts' >
         <SectionHeader name={"art exhibition & nft"} />
         <div className=" sm:flex mb-10 mr-0  ">
         <FeaturedArtist art={true} heading={"live art exhibitions"}
         image={artistOne} 
         tagNames={["art exhibition"]}
         />
          <FeaturedArtist art={true} heading={"nfts through eluv.io platform"}
         image={artistTwo} 
         tagNames={["nft", "eluv.io"]}
         />

        <FeaturedArtist art={true} heading={"featuring sahel's most talented artists"}
         image={artistThree} 
         tagNames={["artists"]}
         />
         
         </div>
    </div>
  )
}

export default ArtNft