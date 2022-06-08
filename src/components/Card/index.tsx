import React, { useState } from "react";
import Rating from "../Rating";
import ThanksCard from "../ThanksCard";

const Card = () => {
  const [Rated, setRated] = useState(false)
  const [rate, setRate] = useState('');
  const setRatingHandler = (e: React.MouseEvent<HTMLButtonElement>) :void => {
    setRate(e.currentTarget.value);
  };
  return (
    <section className="w-full max-w-md bg-darkBlue mx-auto rounded-3xl px-6 py-5">
      {Rated? <ThanksCard rate={rate}/> : <Rating setRatingHandler={setRatingHandler} setRated={setRated}/>}
    </section>
  )
};

export default Card;