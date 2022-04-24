import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import art1 from '../../assets/images/art1.png'
import art2 from '../../assets/images/art2.png'
import art3 from '../../assets/images/art3.png'

function ArtNft() {
  return (
    <div id='artnfts' >
         <SectionHeader name={"art exhibition & nft"} address={"art-exhibition"} />
         <div className=" sm:flex mb-10 mr-0  ">
         <FeaturedArtist art={true} heading={"live art exhibitions"}
         image={art1} 
         tagNames={["art exhibition"]}
         />
          <FeaturedArtist art={true} heading={"nfts through eluv.io platform"}
         image={art2} 
         tagNames={["nft", "eluv.io"]}
         />

        <FeaturedArtist art={true} heading={"featuring sahel's most talented artists"}
         image={art3} 
         tagNames={["artists"]}
         />
         
         </div>
    </div>
  )
}

export default ArtNft