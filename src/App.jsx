import { useState } from "react";
import "./app.scss"
import Countries from "./Countries";

function App() {

  const [inputValue,setInputValue] = useState("")
  const inputChange = (e) =>{
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className="filter">
        <input type="text" placeholder="Search Country"  className="input" onChange={inputChange}/>
      </div>
      <Countries inputValue={inputValue}/>
    </>
  );
}

export default App;
