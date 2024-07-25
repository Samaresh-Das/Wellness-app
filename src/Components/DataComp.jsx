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
  const [currentPage, setCurrentPage] = useState(1); //The current page we are on

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();

      setOriginalRetreats(data);
      setRetreats(data);
    };

    getData();
  }, [baseUrl]);

  //function to filter by type
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

  //function to handle search
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

  //function to handle previous page click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const next = prevPage + 1;
      setBaseUrl(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${next}&limit=3&search=${searchValue}`
      );
      return next;
    });
  };

  //function to handle next page.
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const previous = Math.max(prevPage - 1, 1);
      setBaseUrl(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${previous}&limit=3&search=${searchValue}`
      );
      return previous;
    });
  };

  //function to handle reset button
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
            value={searchValue}
            onChange={(e) => onSearch(e)}
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap space-x-5">
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
        <Button
          text="Previous"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        />
        <Button
          text="Next"
          onClick={handleNextPage}
          disabled={currentPage === 7 || retreats.length < 3}
        />
      </div>
    </div>
  );
};

export default DataComp;
