import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = () => {
  return (
    <div className='amount-buttons'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
