import React, { SetStateAction } from "react";

const RatingCircle = ({
  num,
  index,
  clickHandler,
}: {
  num: string;
  index: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  
  return (
    <button
      className={
        "block w-[44] h-[44] text-sm font-bold text-white rounded-full hover:bg-lightGray sm:w-[54px] sm:h-[54px] " +
        (index == num ? "bg-orange" : "bg-mediumGray bg-opacity-25")
      }
      onClick={clickHandler}
      value={num}
    >
      {num}
    </button>
  );
};

export default RatingCircle;
