import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ text, options, getFilter }) => {
  const [showDropDown, setShowDropdown] = useState(false);

  const OnSelect = (value) => {
    getFilter(value);
  };

  return (
    <div>
      <button
        className="bg-[#1b3252] text-white rounded-lg p-3 w-full md:w-auto"
        onClick={() => setShowDropdown(!showDropDown)}
      >
        {text}{" "}
        <span>
          <RiArrowDropDownLine className="inline-block text-2xl" />
        </span>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          showDropDown ? "block" : "hidden"
        }  bg-[#1b3252] rounded-lg my-1`}
      >
        <ul
          className="py-2 text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option) => (
            <li key={option}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[#223f68]"
                onClick={() => OnSelect(option)}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
