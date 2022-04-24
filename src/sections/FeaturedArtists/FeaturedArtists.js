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

function FeaturedArtists() {
  const WhySahelHelp = () => {
    return (
      <div className="flex flex-col sm:flex-row   ">
        {/* why left */}
        <div className="sm:w-[50%] bg-[#009688] sm:bg-[#161616] text-white py-10 px-5 ">
          <SectionHeader
            name={"why the sahel region needs your help"}
            borderBottomWhite={"true"}
            address={"artists"}
          />

          <div className="2xl:m-4 3xl:m-8">
            <div className="flex justify-center sm:justify-start  py-3  ">
              <LatestTag event={true} tagName={"about"} />
              <LatestTag event={true} tagName={"history"} />
            </div>

            <h1 className="font-sans font-bold 2xl:text-[45px] text-[24px] text-left mt-5 ">
              The Sahel region in West Africa is marked by the quiet beauty of
              its landscapes, and the rich, varied cultures of its people.
            </h1>

            <h5 className="font-light text-[12px] my-10 text-left 2xl:text-[23px] ">
              It also faces one of the world’s fastest-growing humanitarian
              emergencies. Driven by conflict, insecurity, climate change and
              wide-spread poverty, around 30 million people need lifesaving aid
              — more than ever before. Some 5.5 million people have been
              uprooted and violent attacks are a daily reality. About half of
              the population is under 15 years old, and the surge in armed
              violence is having a devastating impact on children’s survival,
              safety, education and hopes for a better future. The idea for
              Sahel Song was sparked in 2020 when Vieux Farka Touré first joined
              forces with the UN to raise awareness and funds for humanitarian
              action in the Sahel. Other artists were quick to add their voices
              and talent, eager to help shift the prevailing narrative about the
              region from despair to hope. Almost a year in the making, the
              multi-lingual track tackles the most pressing issues at the heart
              of the crisis, including conflict, poverty and the climate
              emergency. But it also celebrates the resilience and hope that
              characterize people across the Sahel, offering a rallying cry for
              youth across the region.
            </h5>

            <h5 className="font-light text-[12px] text-left 2xl:text-[23px] ">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </h5>
          </div>
        </div>
        {/* why left end */}

        {/* why right */}
        <div className="sm:w-[50%]">
          <img className="h-[100%] object-cover" src={desertWalk} alt="" />
        </div>
        {/* why right end */}
      </div>
    );
  };
  return (
    <div id="artists">
      <SectionHeader name={"Featured Artists"} address={"artists"} />
      {/* row 1 */}
      <div className=" sm:flex mb-10 ">
        <FeaturedArtist
          heading={"vieus farka toure"}
          desc={
            "Malian singer and guitarist, Viex incorporates elements of rock and Latin music into the Saharan blues and traditional melodies of Mali in his songs, which reflect a deep connection to and reverence for family and country."
          }
          image={artistOne}
          tagNames={["genre", "instruments"]}
        />
        <FeaturedArtist
          heading={"Amadou & Mariam"}
          desc={
            "Amadou & Mariam are a musical husband-and-wife duo from Mali. They are both known for their songwriting and became famous for their thoughtful and provocative lyrics, alongside their blend of West African influences and Western R&B and funk."
          }
          image={artistTwo}
          tagNames={["genre", "instruments"]}
        />

        <FeaturedArtist
          heading={"Songhoy Blues"}
          desc={
            "Songhoy Blues is a blues music group from Mali made up of four talented, hungry, sharp and outward-looking young men from a part of the world that has had more than its share of pain and conflict in recent years."
          }
          image={artistThree}
          tagNames={["genre", "instruments"]}
        />
      </div>

      {/* row 2 */}
      <div className=" sm:flex mb-10 ">
        <FeaturedArtist
          heading={"Songhoy Blues"}
          desc={
            "OUMY Gueye (OMG) is a young Senegalese singer, rapper, and award-winning artist. Widely popular, her songs are inspired by world music and African beats. OMG is passionate about the youth rebuilding a stable Sahel region, specifically one of peace."
          }
          image={artistFour}
          tagNames={["genre", "instruments"]}
        />
        <FeaturedArtist
          heading={"Tal National"}
          desc={
            "Tal National is Niger’s most popular band. Composed of 13 singers and instrumentalists, its members represent the country’s variety of ethnic and cultural strains. The electric dance band is known for energetic and fiery performances. The band’s vision is for a peaceful and multi-ethnic Niger."
          }
          image={artistFive}
          tagNames={["genre", "instruments"]}
        />

        <FeaturedArtist
          heading={"Bassekou Kouyate"}
          desc={
            "Bassekou Kouyate is a true masters of ngoni, an ancient traditional lute found throughout West Africa. He is considered one of the world’s most visible African artists thanks to multiple awards and achievements including collaborations with notable artists such as U2 and Carlos Santana."
          }
          image={artistSix}
          tagNames={["genre", "instruments"]}
        />
      </div>
      {/* row 2 end */}

      {/* row 3 image text */}

      <WhySahelHelp />
    </div>
  );
}

export default FeaturedArtists;
