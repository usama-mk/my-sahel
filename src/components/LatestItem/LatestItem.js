import React from "react";
import arrow from "../../assets/images/arrow-2x.png";

function LatestItem({ latestImage, latestText,first }) {


  const LatestTag = ({ tagName }) => {
    return (
      <div className="px-2 py-1 text-white uppercase border-2 border-white rounded-full w-fit text-[10px] ">
        {tagName}
      </div>
    );
  };

//   ${first?'w-[55%]':'w-[40%]'} 
  return (
    <div className={`  relative text-[white] `}>
      <img src={latestImage} className={`opacity-[88%] object-cover ${first?'w-[100%]':'w-[100%]'}   `} alt="" />
      <div className=" img-overlay absolute bottom-0 text-left ">
        <div className="p-4">
          <LatestTag tagName={"purpose"} />
        </div>
        <h5 className=" text-left p-4 pt-1 uppercase overflow-hidden overflow-ellipsis max-w-[80%] ">
          {latestText}
        </h5>
      </div>
      <img
        src={arrow}
        className=" absolute w-5 right-5 bottom-5 object-contain "
        alt=""
      />
    </div>
  );
}

export default LatestItem;
