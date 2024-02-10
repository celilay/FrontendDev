import { useState } from "react";
import "./app.scss";
import Countries from "./Countries";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const selectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className="inputContainer">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Search Country"
            name="name"
            id="name"
            onChange={inputChange}
          />
          <label htmlFor="name" className="form__label">
            Search Country
          </label>
        </div>
        <div className="option">
          <select className="continents" onChange={selectChange}>
            <option className="option" value="All">Choose a Continent</option>
            <option className="option" value="All">All</option>
            <option className="option" value="North America">North America</option>
            <option className="option" value="South America">South America</option>
            <option className="option" value="Asia">Asia</option>
            <option className="option" value="Africa">Africa</option>
            <option className="option" value="Europe">Europe</option>
            <option className="option" value="Oceania">Oceania</option>
            <option className="option" value="Antarctica">Antarctica</option>
          </select>
        </div>
      </div>
      <Countries inputValue={inputValue} selectedValue={selectedValue} />
    </>
  );
}

export default App;
