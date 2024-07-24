import React, { useEffect, useState } from "react";
import Button from "./Button";
import Cards from "./Cards";

const DataComp = () => {
  const [retreats, setRetreats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=3"
      );
      const data = await response.json();

      console.log(data);

      setRetreats(data);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row space-x-7">
          <Button text="Filter by date" isFilter={true} />
          <Button text="Filter by Type" isFilter={true} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search retreats by title"
            className="bg-[#1b3252] p-3 rounded-lg w-[300px] text-white"
          />
        </div>
      </div>

      <div className=" flex flex-row flex-wrap space-x-5">
        {retreats &&
          retreats.map((retreat) => (
            <Cards
              title={retreat.title}
              description={retreat.description}
              location={retreat.location}
              price={retreat.price}
              image={retreat.image}
            />
          ))}
      </div>

      <div className="flex flex-row justify-center space-x-2 my-5">
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  );
};

export default DataComp;
