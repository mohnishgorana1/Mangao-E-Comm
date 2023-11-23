import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function AmountButton({ increase, decrease, amount }) {
  return (
    <div className="flex items-center justify-center gap-x-4 mb-5">
      <button
        type="button"
        className="bg-transparent border-transparent hover:scale-125 cursor-pointer  w-8 h-4 flex items-center justify-center"
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="">{amount}</h2>
      <button
        type="button"
        className="bg-transparent border-transparent hover:scale-125 cursor-pointer  w-8 h-4 flex items-center justify-center"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default AmountButton;
