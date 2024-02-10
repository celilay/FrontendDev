import { useState } from "react";
import "./app.scss";
import Countries from "./Countries";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    setInputValue(e.target.value);
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
      </div>
      <Countries inputValue={inputValue} />
    </>
  );
}

export default App;
