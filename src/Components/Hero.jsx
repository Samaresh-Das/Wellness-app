import React from "react";

const Hero = () => {
  return (
    <div className="my-4 bg-[#e0d9cf] px-3 py-2 rounded-md">
      <div>
        <img
          src="./assets/hero.jpg"
          alt=""
          className="h-[200px] w-full object-cover rounded-md"
        />
      </div>

      <div className="my-5 text-gray-700">
        <h1 className="text-3xl font-bold">Discover Your Inner Peace</h1>
        <p className="text-[#1b3252] ">
          Join us for a series of wellness retreats designed to help you find
          tranquility and rejuvenation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
