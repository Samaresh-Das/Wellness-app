import React from "react";

const Button = ({ text, isFilter }) => {
  return (
    <div>
      <button className="bg-[#1b3252] text-white rounded-lg p-3">
        {text} {isFilter && "icon"}
      </button>
    </div>
  );
};

export default Button;
