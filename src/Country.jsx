import React, { useEffect, useState } from "react";
import { colors } from "./colors";
import Flag from "react-world-flags";

const Country = ({ inputValue, data, selectedValue }) => {
  const [clicked, setClicked] = useState(null);

  const clickCard = (index) => {
    setClicked((lastIndex) => (lastIndex === index ? -1 : index));
  };

  const filteredData = data?.countries?.filter((country) => {
    if (selectedValue === "All") {
      return (
        country && country.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      return (
        country.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        country.continent.name
          .toLowerCase()
          .includes(selectedValue.toLowerCase())
      );
    }
  });

  useEffect(() => {
    if (filteredData.length >= 10) {
      setClicked(9);
    } else {
      setClicked(filteredData.length - 1);
    }
  }, [inputValue]);

  return (
    <div className="cardContainer">
      {filteredData?.map((cont, i) => (
        <div
          className={`card ${clicked === i ? "clicked" : ""}`}
          key={i}
          onClick={() => clickCard(i)}
          style={{
            backgroundColor:
              clicked === i
                ? colors[Math.floor(Math.random() * colors.length)]
                : "",
          }}
        >
          <Flag code={cont.code} className="flag" />

          <p>
            <b>Country: </b>
            {cont.name}
          </p>
          <p>
            <b>Capital: </b>
            {cont.capital}
          </p>
          <p>
            <b>Continent: </b>
            {cont.continent.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Country;
