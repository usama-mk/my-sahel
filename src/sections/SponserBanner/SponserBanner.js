import React from "react";
import BlackHighlight from "../../components/BlackHighlight/BlackHighlight";
import { LatestTag } from "../../components/LatestItem/LatestTag";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { landingPageContent } from "../../utilities/Template/Template";
import Modal from 'react-modal';
import axios from 'axios'


function SponserBanner() {
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phNumber, setPhNumber] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [form, setForm] = React.useState({});


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


  const onContactClick=()=>{
    openModal()

  }

  const onFormChange=(e)=>{
    // setForm({...form, [e.target.name]: e.target.value})
    // if(e.target.name==="email"){
    //   setEmail(e.target.value)
    // }
    // else if(e.target.name==="country"){
    //   setCountry(e.target.value)
    // }
    // else if(e.target.name==="title"){
    //   setTitle(e.target.value)
    // }
    // else if(e.target.name==="firstName"){
    //   setFirstName(e.target.value)
    // }
    // else if(e.target.name==="lastName"){
    //   setLastName(e.target.value)
    // }
    // else if(e.target.name==="phNumber"){
    //   setPhNumber(e.target.value)
    // }
    // else if(e.target.name==="company"){
    //   setCompany(e.target.value)
    // }
  }

  const submitContact=async (e)=>{
    e.preventDefault()

    const url='http://localhost:5000/contact'
    try {
      let data = {
        email,
        title,
        company,
        country,
        phNumber,
        firstName,
        lastName
      }
     
      const res = await axios.post(`${url}`, data);
      if (false ) {
        alert(res.data.msg)
      } else if (res.status === 200) {
        

        setEmail("")
        setCompany("")
        setCountry("")
        setTitle("")
        setFirstName("")
        setLastName("")
        setPhNumber("")
        setForm({})
        
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div id={landingPageContent.SponserBanner.headerId} className="bg-[#FEBF10] p-10">
      <SectionHeader name={landingPageContent.SponserBanner.headerName} />
      <div className="m-8 " >
      {/* <div className="flex justify-evenly sm:justify-start  py-3  ">
        {
          landingPageContent.SponserBanner.tagNames.map((tagName, key)=>
        <LatestTag key={key} event={true} fill={"black"} tagName={tagName} />
          
          )
        }
      </div> */}
     <div className="flex justify-center 2xl:justify-start " >
     <h1 className=" text-[20px] sm:text-[40px] font-medium text-left 2xl:text-left w-[65%] 2xl:w-[60%] uppercase font-sans 3xl:text-[112px] 3xl:leading-[104px] 3xl:w-[70%] 3xl:my-4 " >
          {landingPageContent.SponserBanner.heading}
      </h1>
     </div>

      <div className="flex justify-center sm:justify-between items-center w-[95%] my-10 flex-wrap     " >
          <BlackHighlight func={onContactClick} name={landingPageContent.SponserBanner.buttonName} />
          {/* <div className="mt-5 sm:mt-0 3xl:text-[34px] " >
          <span className="uppercase " >IN COLLABORATION to </span> 
          <span className="uppercase font-bold" >
          {landingPageContent.SponserBanner.collabTo}
          </span>
          </div> */}
      </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={submitContact} >
  <div class="relative z-0 w-full mb-6 group">
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input onChange={(e)=>setCountry(e.target.value)} value={country} type="text" name="country" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="title" id="floating_repeat_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>
  <div class="grid xl:grid-cols-2 xl:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" name="firstName" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" name="lastName" id="lastName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid xl:grid-cols-2 xl:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e)=>setPhNumber(e.target.value)} value={phNumber} type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phNumber" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e)=>setCompany(e.target.value)} value={company} type="text" name="company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
      </Modal>
    </div>
  );
}

export default SponserBanner;

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