import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow-2x.png";
import { LatestTag } from "./LatestTag";
import { useNavigate } from "react-router-dom";


function LatestItem({ latestImage, latestText,first, tagName, address }) {
  let navigate = useNavigate();
  //   ${first?'w-[55%]':'w-[40%]'} 
// ${first?'w-[100%]':'3xl:w-[60%]  '}
  return (
    <div onClick={()=> navigate(`/${address}`)} className={`${first?'2xl:w-[80%] 3xl:w-[60%]  ':'2xl:flex 2xl:flex:grow 3xl:flex 3xl:flex:grow  '}  relative text-[white] cursor-pointer   `}  > 
    {/* remove this h for 100% actual */}
     <img src={latestImage} className={`opacity-[88%] object-cover ${first?'w-[100%]':'w-[100%]   3xl:text-[800px]  '}   `} alt="" />
      {/* remove text-[800px] */}
      <div className=" img-overlay absolute bottom-0 text-left 2xl:p-8 3xl:p-10  ">
        <div className="p-4">
          <LatestTag tagName={tagName} />
        </div>
        <h5 className=" text-left p-4 pt-1 uppercase overflow-hidden overflow-ellipsis max-w-[80%] 2xl:text-[40px] 2xl:max-w-[55%] 2xl:leading-[47px] 3xl:text-[52px] 3xl:max-w-[55%] 3xl:leading-[47px]  ">
          {latestText}
        </h5>
      </div>
      <img
        src={arrow}
        className={` absolute w-5 right-5 bottom-5 object-contain  `}
        alt=""
      />

    </div>
  );
}

export default LatestItem;


