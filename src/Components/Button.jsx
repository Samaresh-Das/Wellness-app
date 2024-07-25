import React from "react";

const Button = ({ text, onClick, disabled }) => {
  return (
    <div>
      <button
        className={`${
          disabled ? "bg-gray-300 text-[#1b3252]" : "bg-[#1b3252] text-white"
        }  rounded-lg p-3`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
