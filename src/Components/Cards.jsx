import React from "react";

const Cards = ({ title, description, location, price, image, date }) => {
  //making the date readable
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp * 1000);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const readableDate = formatDate(date);

  return (
    <div className="bg-[#e0d9cf] px-3 py-2 w-[500px] rounded-md">
      <div className="my-4">
        <img
          src={image}
          alt=""
          className="w-[300px] h-[200px] object-cover rounded-xl"
        />
      </div>
      <div className="text-gray-700 ">
        <h2 className="font-bold">{title}</h2>
        <p className="my-2">{description}</p>
        <p className="my-2">Date: {readableDate}</p>
        <p className="my-2">Location : {location}</p>
        <p className="my-2">Price: {price}</p>
      </div>
    </div>
  );
};

export default Cards;
