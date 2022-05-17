import React from 'react'
import Artist from '../../components/Artist/Artist'
import artist1 from "../../assets/images/artist1.png";
import artist2 from "../../assets/images/artist2.png";
import artist3 from "../../assets/images/artist3.png";
import artist4 from "../../assets/images/artist4.png";
import artist5 from "../../assets/images/artist5.png";
import artist6 from "../../assets/images/artist6.png";


function ArtistsSection() {
  return (
    <div className='flex flex-col' >
        <Artist first={true} tagNames={["genre", "instruments"]} heading={"Vieux Farka TouRE"}
        subHeading={"Malian singer and guitarist, Viex incorporates elements of rock and Latin music into the Saharan blues and traditional melodies of Mali in his songs, which reflect a deep connection to and reverence for family and country."}
        quote={`“It is only by having peace between us that we will have it tomorrow for our children”`}
        instaUser={`@VIEUXFARKATOURÉ`}
        instaFollowers={`1,924`}
        fbUser={`@VIEUXFARKATOURÉ`}
        fbFollowers={`47k`}
        twitterUser={`@VIEUXFARKATOURÉ`}
        twitterFollowers={`5686`}
        spotifyUser={`VIEUX FARKA TOURÉ`}
        spotifyListeners={`67,729`}
        image={artist1}
       
        />

<Artist tagNames={["genre", "instruments"]} heading={"MADOU & MARIAM"}
        subHeading={`Amadou & Mariam are a musical husband-and-wife duo from Mali. They are both known for
        their songwriting and became famous for their thoughtful and provocative lyrics, alongside their blend of West African influences and Western R&B and funk.`}
        quote={`“WE WANTED TO TELL PEOPLE
        THAT WE MUST STAND UP AND
        JOIN HANDS SO THAT THE
        SAHEL CAN MOVE FORWARD
        AND CHANGE THINGS”`}
        instaUser={`@AMADOUETMARIAM`}
        instaFollowers={`13.1K`}
        fbUser={`@AMADOUMARIAM`}
        fbFollowers={`497,849`}
        twitterUser={`@AMADOUETMARIAM`}
        twitterFollowers={`12.8K`}
        spotifyUser={`AMADOU & MARIAM`}
        spotifyListeners={`793,381`}
        image={artist2}
       
        />

<Artist first={true} tagNames={["genre", "instruments"]} heading={"SONGHOY BLUES"}
        subHeading={`Songhoy Blues is a blues music group from Mali
        made up of four talented, hungry, sharp and
        outward-looking young men from a part of the
        world that has had more than its share of pain
        and conflict in recent years.`}
        quote={`“LET’S JOIN HANDS TO END THE
        WAR THAT IS TEARING OUR
        REGION APART”`}
        instaUser={`@AMADOUETMARIAM`}
        instaFollowers={`13.1K`}
        fbUser={`@AMADOUMARIAM`}
        fbFollowers={`497,849`}
        twitterUser={`@AMADOUETMARIAM`}
        twitterFollowers={`12.8K`}
        spotifyUser={`AMADOU & MARIAM`}
        spotifyListeners={`793,381`}
        image={artist3}
       
        />

<Artist tagNames={["genre", "instruments"]} heading={"OUMY GUEYE (OMG)"}
        subHeading={`OUMY Gueye (OMG) is a young Senegalese
        singer, rapper, and award-winning artist. Widely
        popular, her songs are inspired by world music
        and African beats. OMG is passionate about the
        youth rebuilding a stable Sahel region,
        specifically one of peace.`}
        quote={`“WE SHOULD REFOCUS ON
        OURSELVES, OUR CULTURE AND
        OUR VALUES IN ORDER TO
        BUILD A MORE STABLE SAHEL
        WHERE EVERYONE FEELS AT
        HOME”`}
        instaUser={`@OMG_OUMY_GUEYE`}
        instaFollowers={`615K`}
        fbUser={`@OMGOUMYGUEYE`}
        fbFollowers={`288K`}
        twitterUser={`@AMADOUETMARIAM`}
        twitterFollowers={`1.7K`}
        spotifyUser={`OMG OUMY GUEYE`}
        spotifyListeners={`3,736`}
        image={artist4}
       
        />

<Artist first={true} tagNames={["genre", "instruments"]} heading={"TAL NATIONAL"}
        subHeading={`Tal National is Niger’s most popular band.
        Composed of 13 singers and instrumentalists, its
        members represent the country’s variety of
        ethnic and cultural strains. The electric dance
        band is known for energetic and fiery
        performances. The band’s vision is for a peaceful
        and multi-ethnic Niger.`}
        quote={`“NOTHING REMAINS BUT TO
        MAKE PEACE BETWEEN US”`}
        instaUser={`@TALNATIONAL`}
        instaFollowers={`911`}
        fbUser={`@TALNATIONAL`}
        fbFollowers={`10,635`}
        // twitterUser={`@vieuxfarkatoure`}
        // twitterFollowers={`5686`}
        spotifyUser={`TAL NATIONAL`}
        spotifyListeners={`1,850`}
        image={artist5}
       
        />

<Artist tagNames={["genre", "instruments"]} heading={"BASSEKOU KOUYATE"}
        subHeading={`Bassekou Kouyate is a true master of ngoni, an
        ancient traditional lute found throughout West
        Africa. He is considered one of the world’s most
        visible African artists thanks to multiple awards
        and achievements including collaborations with
        notable artists such as U2 and Carlos Santana.`}
        // quote={``}
        instaUser={`@BASSEKOUKOUYATE`}
        instaFollowers={`1,570`}
        fbUser={`@NGONI.BA`}
        fbFollowers={`16,878`}
        twitterUser={`@BASSEKOU`}
        twitterFollowers={`2,315`}
        spotifyUser={`BASSEKOU KOUYATTE`}
        spotifyListeners={`57,219`}
        image={artist6}
       
        />
    </div>
  )
}

export default ArtistsSection