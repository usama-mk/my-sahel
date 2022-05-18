import React from "react";
import TagButton from "./TagButton";
import heroGirl from '../../assets/images/heroGirl.png'
import unOchaLogo from '../../assets/images/un-ocha.png'
import { landingPageContent } from "../../utilities/Template/Template";
import Modal from 'react-modal';
import axios from 'axios'

function LandingHero() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleNewsLetter=()=>{
      openModal()
  }

  const SponserButton = () => {
    return (
      <h5 onClick={handleNewsLetter} className=" px-2 py-1 border-white border-2 h-fit rounded-full text-center cursor-pointer uppercase bg-white my-7 text-[14px] 2xl:text-[30px] 2xl:px-8 2xl:my-10 2xl:py-2  3xl:text-[41px] 3xl:px-12 3xl:my-16 3xl:py-4 ">
        {landingPageContent.LandingHero.sponserButtonText}
      </h5>
    );
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const url='http://localhost:5000/subscribe'
    try {
      let data = {
       
        email,
      
      };
     
      const res = await axios.post(`${url}`, data);
      if (email.length === 0 ) {
        alert(res.data.msg)
      } else if (res.status === 200) {
        

        setEmail("");
        
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero Left */}
      <div className="bg-[#009688] sm:w-[50%] w-[100%] flex flex-col p-5 items-center justify-center sm:items-start 2xl:p-8 3xl:p-12  ">
        <div className="flex flex-wrap justify-center sm:flex-nowrap">
          <TagButton name={landingPageContent.LandingHero.tagOne} />
          <TagButton name={landingPageContent.LandingHero.tagTwo} />
        </div>

        <h1 className="text-[white] font-medium uppercase sm:text-left mt-2 2xl:text-[70px] 2xl:leading-[70px] 3xl:text-[100px] 3xl:leading-[100px] ">
          #My Sahel, <br />
          MY BEAUTIFUL Home
        </h1>
        <h5 className="text-[white] uppercase text-[10px] sm:text-left 2xl:text-[20px] 2xl:w-[65%] 3xl:text-[30px] 3xl:w-[65%] mt-5 ">
        Entertainment experience with a <span className="font-bold" >Humanitarian Purpose</span>

        <br />
       
        </h5>

        <span className="flex mt-5 text-center text-[white] uppercase text-[10px] sm:text-left 2xl:text-[20px] 2xl:w-[65%] 3xl:text-[30px] 3xl:w-[65%]  " >
       In Partnership with UN – OCHA 
       {/* <img src={unOchaLogo} className={`w-28 pl-6 object-contain `} alt="" /> */}
       </span>

        <div className="w-fit">
          <SponserButton />
        </div>

        <h6 className="uppercase text-[white] opacity-30 text-[10px] 2xl:text-[18px] 3xl:text-[24px]   " >
            <span>{landingPageContent.LandingHero.dateStart}</span>
            <span className="ml-5" >{landingPageContent.LandingHero.dateEnd}</span>
        </h6>
      </div>
      {/* hero right */}
      <div className="bg-[gray] sm:w-[50%] w-[100%] h-[100%] ">
        <div className=" relative text-[white]  h-[100%] ">
        <img src={heroGirl} className='opacity-[88%]  h-[100%] object-contain' alt="" />
         <div className=" img-overlay absolute bottom-0 text-left " >
         <h5 className=" text-left p-4 pb-0 2xl:text-[12px] 2xl:ml-8 3xl:text-[18px] 3xl:ml-12 " >{landingPageContent.LandingHero.imageContext}</h5>
          <h5 className="  font-bold p-4 pt-1 2xl:text-[12px] 2xl:ml-8 3xl:text-[18px] 3xl:ml-12 ">
          {landingPageContent.LandingHero.artistName}
          </h5>
         </div>
        </div>   
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="w-full" >
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
 
  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
      </Modal>

    </div>
  );
}

export default LandingHero;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    backgroundColor: '#19212C'
  },
};