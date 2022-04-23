import React from 'react'
import ArtExhibitionItem from '../../components/ArtExhibitionItem/ArtExhibitionItem'
import art1 from '../../assets/images/art1.png'
import art2 from '../../assets/images/art2.png'
import art3 from '../../assets/images/art3.png'

function ArtExhibitionSection() {
  return (
    <section className='flex flex-col ' >
        <ArtExhibitionItem tagNames={["ART EXHIBITION"]} 
        heading={"LIVE ART EXHIBITIONS"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        image={art1}
        />

<ArtExhibitionItem tagNames={["NFT", "eluv.io"]} 
        heading={"NFTs THROUGH ELUV.IO PLATFORM"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        image={art2}
        />

<ArtExhibitionItem tagNames={["ART EXHIBITION"]} 
        heading={"FEATURING SAHEL’S MOST TALENTED ARTISTS"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        image={art3}
        />
    </section>
  )
}

export default ArtExhibitionSection