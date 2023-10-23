import React from "react";
import { useNavigate } from "react-router-dom";


const Counter = () => {
  const navigate = useNavigate();

  

  return (
    <>
    <div className="App">
      <h1 className="home">Home Page</h1>
      <h3>Click Button Below to Visit Counter App</h3>
      <div className="cont">
      <button className="first-btn" onClick={() => navigate("/countert")}>Next</button>
      </div>
      </div>
    </>
  );
};

export default Counter;