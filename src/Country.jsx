import React, { useEffect, useState } from "react";
import { colors } from "./colors";

const Country = ({ inputValue, data }) => {
  const [clicked, setClicked] = useState(null);

  const clickCard = (index) => {
    setClicked((lastIndex) => lastIndex === index ? -1 : index);
  };

  const filteredData = data?.countries?.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    console.log(filteredData[9]);
    
    
  }, [filteredData]);

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
          <p>
            <b>Country:</b>
            {cont.name}
          </p>
          <p>
            <b>Capital:</b>
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
