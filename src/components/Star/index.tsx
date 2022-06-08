import React from "react";
import star from "../../../images/icon-star.svg";

const Star = () => {
  return (
    <div className="w-[42px] h-[42px] rounded-full bg-mediumGray bg-opacity-25 grid place-items-center my-5">
      <img src={star} alt="Star" width="100%" height="100%"/>
    </div>
  );
};

export default Star;
