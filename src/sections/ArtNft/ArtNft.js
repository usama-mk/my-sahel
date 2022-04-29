import React from 'react'
import FeaturedArtist from '../../components/FeaturedArtist/FeaturedArtist'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import art1 from '../../assets/images/art1.png'
import art2 from '../../assets/images/art2.png'
import art3 from '../../assets/images/art3.png'
import { landingPageContent } from '../../utilities/Template/Template'

function ArtNft() {
  return (
    <div id={landingPageContent.ArtNft.headerId} >
         <SectionHeader name={landingPageContent.ArtNft.headerName} address={landingPageContent.ArtNft.headerAddress} />
         <div className=" sm:flex mb-10 mr-0  ">
         <FeaturedArtist art={true} heading={landingPageContent.ArtNft.FeaturedArtistOne.heading}
         image={landingPageContent.ArtNft.FeaturedArtistOne.image} 
         tagNames={landingPageContent.ArtNft.FeaturedArtistOne.tagNames}
         />
          <FeaturedArtist art={true} heading={landingPageContent.ArtNft.FeaturedArtistTwo.heading}
         image={landingPageContent.ArtNft.FeaturedArtistTwo.image} 
         tagNames={landingPageContent.ArtNft.FeaturedArtistTwo.tagNames}
         />

        <FeaturedArtist art={true} heading={landingPageContent.ArtNft.FeaturedArtistThree.heading}
         image={landingPageContent.ArtNft.FeaturedArtistThree.image} 
         tagNames={landingPageContent.ArtNft.FeaturedArtistThree.tagNames}
         />
         
         </div>
    </div>
  )
}

export default ArtNft