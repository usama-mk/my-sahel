import React from "react";
import FeaturedArtist from "../../components/FeaturedArtist/FeaturedArtist";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import artistOne from "../../assets/images/artistOne.png";
import artistTwo from "../../assets/images/artistTwo.png";
import artistThree from "../../assets/images/artistThree.png";
import artistFour from "../../assets/images/artistFour.png";
import artistFive from "../../assets/images/artistFive.png";
import artistSix from "../../assets/images/artistSix.png";
import desertWalk from "../../assets/images/desert-walk@2x.png";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import { landingPageContent } from "../../utilities/Template/Template";

function FeaturedArtists() {
  const WhySahelHelp = () => {
    return (
      <div className="flex flex-col sm:flex-row   ">
        {/* why left */}
        <div className="sm:w-[50%] bg-[#009688] sm:bg-[#161616] text-white py-10 px-5 ">
          <SectionHeader
            name={landingPageContent.whyHelp.headerName}
            borderBottomWhite={landingPageContent.whyHelp.borderBottomWhite}
            address={landingPageContent.whyHelp.address}
          />

          <div className="2xl:m-4 3xl:m-8">
            <div className="flex justify-center sm:justify-start  py-3  ">
                {
                    landingPageContent.whyHelp.tagNames.map((tagName, key)=>
              <LatestTag key={key} event={true} tagName={tagName} />
                    
                    )
                }
              
            </div>

            <h1 className="font-sans font-bold 2xl:text-[45px] text-[24px] text-left mt-5 ">
              {landingPageContent.whyHelp.HeadingOne}
            </h1>

            <h5 className="font-light text-[12px] my-10 text-left 2xl:text-[23px] ">
              {landingPageContent.whyHelp.paraOne}
            </h5>

            <h5 className="font-light text-[12px] text-left 2xl:text-[23px] ">
              {landingPageContent.whyHelp.paraTwo}
            </h5>
          </div>
        </div>
        {/* why left end */}

        {/* why right */}
        <div className="sm:w-[50%]">
          <img className="h-[100%] object-cover" src={landingPageContent.whyHelp.image} alt="" />
        </div>
        {/* why right end */}
      </div>
    );
  };
  return (
    <div id={landingPageContent.FeaturedArtists.headerId}>
      <SectionHeader name={landingPageContent.FeaturedArtists.headerName} address={landingPageContent.FeaturedArtists.headerAddress} />
      {/* row 1 */}
      <div className=" sm:flex mb-10 ">
        <FeaturedArtist
        heading={landingPageContent.FeaturedArtists.FeaturedArtistOne.heading}
        desc={
          landingPageContent.FeaturedArtists.FeaturedArtistOne.desc
        }
        image={landingPageContent.FeaturedArtists.FeaturedArtistOne.image}
        tagNames={landingPageContent.FeaturedArtists.FeaturedArtistOne.tagNames}
         
        />
        <FeaturedArtist
        heading={landingPageContent.FeaturedArtists.FeaturedArtistTwo.heading}
        desc={
          landingPageContent.FeaturedArtists.FeaturedArtistTwo.desc
        }
        image={landingPageContent.FeaturedArtists.FeaturedArtistTwo.image}
        tagNames={landingPageContent.FeaturedArtists.FeaturedArtistTwo.tagNames}
        />

        <FeaturedArtist
        heading={landingPageContent.FeaturedArtists.FeaturedArtistThree.heading}
        desc={
          landingPageContent.FeaturedArtists.FeaturedArtistThree.desc
        }
        image={landingPageContent.FeaturedArtists.FeaturedArtistThree.image}
        tagNames={landingPageContent.FeaturedArtists.FeaturedArtistThree.tagNames}
        />
      </div>

      {/* row 2 */}
      <div className=" sm:flex mb-10 ">
        <FeaturedArtist
          heading={landingPageContent.FeaturedArtists.FeaturedArtistFour.heading}
          desc={
            landingPageContent.FeaturedArtists.FeaturedArtistFour.desc
          }
          image={landingPageContent.FeaturedArtists.FeaturedArtistFour.image}
          tagNames={landingPageContent.FeaturedArtists.FeaturedArtistFour.tagNames}
        />
        <FeaturedArtist
        heading={landingPageContent.FeaturedArtists.FeaturedArtistFive.heading}
        desc={
          landingPageContent.FeaturedArtists.FeaturedArtistFive.desc
        }
        image={landingPageContent.FeaturedArtists.FeaturedArtistFive.image}
        tagNames={landingPageContent.FeaturedArtists.FeaturedArtistFive.tagNames}
        />

        <FeaturedArtist
        heading={landingPageContent.FeaturedArtists.FeaturedArtistSix.heading}
        desc={
          landingPageContent.FeaturedArtists.FeaturedArtistSix.desc
        }
        image={landingPageContent.FeaturedArtists.FeaturedArtistSix.image}
        tagNames={landingPageContent.FeaturedArtists.FeaturedArtistSix.tagNames}
        />
      </div>
      {/* row 2 end */}

      {/* row 3 image text */}

      <WhySahelHelp />
    </div>
  );
}

export default FeaturedArtists;
