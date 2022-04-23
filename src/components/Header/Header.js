import React, { useState } from "react";
import unLogo from "../../assets/images/un-2x.png";
import closeWhite from "../../assets/images/close-white.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { scrollInto } from "../../utilities/scroll";


function Header() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 900px)" });
  const [navbarOpen, setNavbarOpen] = useState(false);

  const BurgerButton = () => {
    return (
      <div onClick={() => setNavbarOpen(!navbarOpen)} className={` ${navbarOpen?'invisible':'visible'} space-y-2`}>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-5 h-0.5 bg-gray-600"></span>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="flex flex-col justify-between items-center p-3  w-full border-2 bg-[#009688] 2xl:mr-8 3xl:mr-10 rounded-2xl mt-3  ">

        <div className="flex justify-end w-full" >
        <div className=" py-1 px-3   text-[white] rounded-full" onClick={() => setNavbarOpen(!navbarOpen)}>
        
        <img className="w-5" src={closeWhite} alt="" />
        </div>
        </div>
       

        <div className="w-[80vw] text-white">
          <h5 className=" m-3 2xl:m-3 3xl:m-5">
          <Link to="/">HOME</Link>
          </h5>
          <h5 onClick={()=>scrollInto("latest")} className="m-3 2xl:m-3 3xl:m-5">
            LATEST</h5>
          <h5 onClick={()=>scrollInto("events")} className="m-3 2xl:m-3 3xl:m-5"> 
          <Link to="/about-events">ABOUT THE EVENTS</Link>
            </h5>
          <h5 onClick={()=>scrollInto("artists")} className="m-3 2xl:m-3 3xl:m-5">ARTISTS</h5>
          <h5 onClick={()=>scrollInto("artnfts")} className="m-3 2xl:m-3 3xl:m-5">ART EXHIBITION</h5>
          <SponserButton/>
        </div>
      </div>
    );
  };

  const SponserButton=()=>{
      return(
        <h5 onClick={()=>scrollInto("sponser")} className=" p-2 border-black border-2 h-fit rounded-full text-center uppercase cursor-pointer 2xl:text-[18px] 2xl:px-3 3xl:text-[27px] 3xl:px-5 py-2 ">
        BECOME A SPONSER
      </h5>
      )
  }
  return (
    <div className=" p-3 " >
      <div className="flex justify-between items-center">
         <h1 className='m-5 2xl:text-[40px] 3xl:text-[60px]  sm:m-0' >
            My<span className='font-bold ' >Sahel</span>
        </h1>
        <img src={unLogo} className=" w-20 2xl:h-fit  3xl:w-[213px] 3xl:h-fit object-contain 2xl:w-32" alt="" />
        {isBigScreen ? (
          <div className="headerOptions 2xl:flex 2xl:justify-between 2xl:items-center 2xl:p-2  ">
            <div className="flex justify-between items-center 2xl:text-[14px] 3xl:text-[21px] 2xl:mr-10">
              <h5 className=" cursor-pointer 2xl:m-5">
              <Link to="/">HOME</Link>
              </h5>
              <h5 onClick={()=>scrollInto("latest")} className=" cursor-pointer 2xl:m-5">LATEST</h5>
              <h5 onClick={()=>scrollInto("events")} className=" cursor-pointer 2xl:m-5">
              ABOUT THE EVENTS
                </h5>
              <h5 onClick={()=>scrollInto("artists")} className=" cursor-pointer 2xl:m-5">ARTISTS</h5>
              <h5 onClick={()=>scrollInto("artnfts")} className=" cursor-pointer 2xl:m-5">ART EXHIBITION</h5>
            </div>

           <SponserButton/>
          </div>
        ) : (
          <div>{ <BurgerButton />}</div>
        )}
      </div>
      {navbarOpen && <MobileMenu />}
    </div>
  );
}

export default Header;
