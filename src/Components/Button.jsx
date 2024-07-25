import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        className="bg-[#1b3252] text-white rounded-lg p-3"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
