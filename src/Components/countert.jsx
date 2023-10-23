import React from "react";
import { useState } from "react";
import { useCount } from "./useCount";
import { Link } from "react-router-dom";
import Test from "./test"
import Contact from "./contact"



  const Countert = (props) => {
  // const navigate = useNavigate();

  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(+newCount);
    setNewCount("");
  }

  return (
    <div className="App">
      <h2 className="header">Counter App</h2>
      <h1 className="count">{count}</h1>
      <div className="button-container">
      <button className="btn btn1 plus" onClick={increment}>Increment</button>
      <button className="btn btn1 minus" onClick={decrement}>Decrement</button>
      </div>
      <div className="btn2">
      <button className="btn reset" onClick={reset}>Reset</button>
      <button className="btn set-count" onClick={handleOnClick}>Set count</button>
      </div>
      <input value={newCount} type="number" onChange={handleOnChange} />
      <Link to="/">
        {" "}
        <p>Back to Hompage</p>{" "}
      </Link>
      <div>
        <Test />
      </div>
    </div>
  );
}

export default Countert;