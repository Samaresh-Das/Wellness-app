import React, { useEffect, useState } from "react";
import Button from "./Button";
import Cards from "./Cards";
import Dropdown from "./Dropdown";

const DataComp = () => {
  const [retreats, setRetreats] = useState([]);
  const [originalRetreats, setOriginalRetreats] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [baseUrl, setBaseUrl] = useState(
    "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=3"
  );

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();

      setOriginalRetreats(data);
      setRetreats(data);
    };

    getData();
  }, [baseUrl]);

  const filterByType = (value) => {
    if (value === "Standalone" || value === "Signature") {
      const filteredData = originalRetreats.filter(
        (retreat) => retreat.type === value
      );
      setRetreats(filteredData);
    } else {
      setRetreats(originalRetreats);
    }
  };

  console.log(searchValue);

  const onSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const timeoutId = setTimeout(() => {
      setBaseUrl(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=3&search=${value}`
      );
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  const resetFilters = () => {
    setRetreats(originalRetreats);
    setSearchValue("");
    setBaseUrl(
      "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=3"
    );
  };

  return (
    <div>
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row space-x-7">
          <Dropdown text="Filter by date" options={["August", "September"]} />
          <Dropdown
            text="Filter by Type"
            options={["Signature", "Standalone"]}
            getFilter={filterByType}
          />
          <Button text="Reset" onClick={resetFilters} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search retreats by title"
            className="bg-[#1b3252] p-3 rounded-lg w-[300px] text-white"
            onChange={(e) => onSearch(e)}
          />
        </div>
      </div>

      <div className=" flex flex-row flex-wrap space-x-5">
        {retreats &&
          retreats.map((retreat) => (
            <Cards
              key={retreat.id}
              title={retreat.title}
              description={retreat.description}
              location={retreat.location}
              price={retreat.price}
              image={retreat.image}
              date={retreat.date}
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
