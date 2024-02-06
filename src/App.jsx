import { useState } from "react";
import Country from "./Country";
import "./app.scss"

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
      <Country inputValue={inputValue}/>
    </>
  );
}

export default App;
