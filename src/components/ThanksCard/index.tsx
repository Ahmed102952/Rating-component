import React from "react";
import img from "../../../images/illustration-thank-you.svg";
const ThanksCard = ({ rate }: { rate: string }) => {
  return (
    <div className="flex flex-col items-center w-full py-4">
      <img src={img} alt="Thank you" width={150} height={100} />
      <div className="bg-mediumGray bg-opacity-25 rounded-full p-2 mt-6 mb-8">
        <h2 className="text-xs text-orange">You selected {rate} out of 5</h2>
      </div>
      <h1 className="text-white text-2xl mb-2">Thank you!</h1>
      <p className="text-sm text-white opacity-80 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
export default ThanksCard;
