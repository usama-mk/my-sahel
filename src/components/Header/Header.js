import React, { useState } from "react";
import sahelLogo from "../../assets/images/MySahel-2x.png";
import unLogo from "../../assets/images/un-2x.png";
import { useMediaQuery } from "react-responsive";

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
      <div className="flex flex-col justify-between items-center p-3  w-full border-2 bg-gray-400 2xl:mr-10 rounded-2xl mt-3  ">
        <div className="border-4 border-red-500 bg-red-400 py-1 px-3 text-[white] rounded-full" onClick={() => setNavbarOpen(!navbarOpen)}>X</div>

        <div className="w-[80vw]">
          <h5 className=" m-3 2xl:m-5">HOME</h5>
          <h5 className="m-3 2xl:m-5">LATEST</h5>
          <h5 className="m-3 2xl:m-5">ABOUT THE EVENTS</h5>
          <h5 className="m-3 2xl:m-5">ARTISTS</h5>
          <h5 className="m-3 2xl:m-5">ART EXHIBITION</h5>
          <SponserButton/>
        </div>
      </div>
    );
  };

  const SponserButton=()=>{
      return(
        <h5 className=" p-2 border-black border-2 h-fit rounded-full text-center uppercase">
        BECOME A SPONSER
      </h5>
      )
  }
  return (
    <div className=" p-3 " >
      <div className="flex justify-between items-center">
        <img src={sahelLogo} className=" w-20 2xl:w-32" alt="" />
        <img src={unLogo} className=" w-20 2xl:w-32" alt="" />
        {isBigScreen ? (
          <div className="headerOptions 2xl:flex 2xl:justify-between 2xl:items-center 2xl:p-2  ">
            <div className="flex justify-between items-center 2xl:mr-10">
              <h5 className="2xl:m-5">HOME</h5>
              <h5 className="2xl:m-5">LATEST</h5>
              <h5 className="2xl:m-5">ABOUT THE EVENTS</h5>
              <h5 className="2xl:m-5">ARTISTS</h5>
              <h5 className="2xl:m-5">ART EXHIBITION</h5>
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
