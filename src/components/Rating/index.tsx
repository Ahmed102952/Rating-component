import React, { Dispatch, SetStateAction, useState } from "react";
import Btn from "../Btn";
import RatingCircle from "../RatingCircle";
import Star from "../Star";

const Rating = ({
  setRatingHandler,
  setRated,
}: {
  setRatingHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setRated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [index, setIndex] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true)
  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    setRatingHandler(e);
    setBtnDisabled(false)
    setIndex(e.currentTarget.value);
  }
  function setRatedHandler() {
    setRated(true)
  }
  
  return (
    <div className="flex flex-col items-start">
      <Star />
      <h1 className="text-2xl mb-6 text-white">How did we do?</h1>
      <p className="text-sm text-white opacity-80 mb-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between w-full">
        <RatingCircle
          num="1"
          index={index}
          clickHandler={clickHandler}
        />
        <RatingCircle
          num="2"
          index={index}
          clickHandler={clickHandler}
        />
        <RatingCircle
          num="3"
          index={index}
          clickHandler={clickHandler}
        />
        <RatingCircle
          num="4"
          index={index}
          clickHandler={clickHandler}
        />
        <RatingCircle
          num="5"
          index={index}
          clickHandler={clickHandler}
        />
      </div>
      <Btn setRatedHandler={setRatedHandler} btnDisabled={btnDisabled}/>
    </div>
  );
};

export default Rating;
