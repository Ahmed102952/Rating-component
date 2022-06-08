import React from "react";

const Btn = ({setRatedHandler, btnDisabled}: {setRatedHandler: () => void, btnDisabled: boolean} ) => {
  return (
    <button
    onClick={setRatedHandler}
    disabled={btnDisabled}
      className="block w-full rounded-2xl bg-orange text-white text-sm font-bold hover:bg-white hover:text-orange h-11 mt-5"
    >
      Submit
    </button>
  );
};
export default Btn;
