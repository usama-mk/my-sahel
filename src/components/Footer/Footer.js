import React from 'react'
import unLogo from "../../assets/images/un-2x.png";
import fb from "../../assets/images/fb@2x.png";
import insta from "../../assets/images/insta@2x.png";
import twitter from "../../assets/images/twitter@2x.png";
import youtube from "../../assets/images/youtube@2x.png";


function Footer() {
  return (
    <div>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between sm:items-start pt-10 px-5 ' >
        <div className='flex flex-col items-center sm:flex-row sm:justify-between w-[30%] '>
        <h1 className='m-5 sm:m-0' >
            My<span className='font-bold ' >Sahel</span>
        </h1>

        <img className=" w-20 2xl:w-32 m-5 mb-10 sm:m-0" src={unLogo} alt="" />
        </div> 

        <div className='mb-5' >
              <h5 className="mb-3 2xl:m-5 2xl:mt-0 ">ABOUT THE EVENTS</h5>
              <h5 className="mb-3 2xl:m-5">ELUV.IO</h5>
            <h5 className="mb-3 2xl:m-5">EVENT DETAILS</h5>


              <h5 className="mb-3 2xl:m-5">ARTISTS</h5>
              <h5 className="mb-3 2xl:m-5">EXHIBIT</h5>
        </div>

        <div className='flex' >
            <img className='w-5 mr-4 '  src={fb} alt="" />
            <img className='w-5 mr-4'  src={twitter} alt="" />
            <img className='w-5 mr-4'  src={youtube} alt="" />
            <img className='w-5 mr-4'  src={insta} alt="" />
        </div>     
    </div>

    <div className='border-t-2 border-black m-5 flex flex-col sm:flex-row sm:justify-between  ' >
<h5 className='uppercase mt-5 sm:mt-2 ' >MYSAHEL2022</h5>
<h5 className='font-bold mt-5 sm:mt-2' >Cooking Settings</h5>
<h5 className='font-bold mt-5 sm:mt-2' >Don’t Sell My Information</h5>

</div>
    </div>
  )
}

export default Footer