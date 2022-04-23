import React from "react";
import { LatestTag } from "../LatestItem/LatestTag";
import SocialContact from "./SocialContact";
import fb from "../../assets/images/fb@2x.png";
import insta from "../../assets/images/insta@2x.png";
import twitter from "../../assets/images/twitter@2x.png";
import spotify from "../../assets/images/spotify@2x.png";


function Artist({
  first,
  tagNames,
  heading,
  subHeading,
  quote,
  instaUser,
  instaFollowers,
  fbUser,
  fbFollowers,
  twitterUser,
  twitterFollowers,
  spotifyUser,
  spotifyListeners,
  image
}) {

  return (
    <div className="flex flex-col 2xl:flex-row ">
      <img className=" h-[365px] 2xl:h-full 2xl:min-h-[700px] object-cover " src={image} alt="" />
      <div className={`p-10 flex-col ${first ? "bg-[#F2F2F2]" : ""} w-full `}>
        <div className="flex text-left 2xl:flex-grow 2xl:w-[60%] ">
          {tagNames.map((tagName) => (
            <LatestTag event={true} fill={`black`} tagName={tagName} />
          ))}
        </div>
        <h1 className=" font-medium text-left my-5 2xl:text-[60px] 2xl:leading-[55px]  " >
            {heading}
        </h1>

        <h3 className="text-left font-light 2xl:text-[23px] mt-10 max-w-4xl " >
            {subHeading}
        </h3>
        <h2 className=" font-medium text-[35px] text-left mt-5 mb-5 " >
            {quote}
        </h2>
        <div className="" >
            <SocialContact username={instaUser} followers={instaFollowers} socialImage={insta}  />
            <SocialContact username={fbUser} followers={fbFollowers} socialImage={fb}  />
            <SocialContact username={twitterUser} followers={twitterFollowers} socialImage={twitter}  />
            <SocialContact spotify={true} username={spotifyUser} followers={spotifyListeners} socialImage={spotify}  />
        </div>
      </div>
    </div>
  );
}

export default Artist;
