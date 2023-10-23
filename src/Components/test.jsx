import { useNavigate } from "react-router-dom";

import React from "react";
  

const Test = () => {
  const navigate = useNavigate();

  
  // const handleClick = () => {
    
  //   // throw new Error('Something went wrong, please try again later.')
  // }
  return (
    <div>
      <button className="btn3" onClick={() => navigate("/contact")}>Test</button>
    </div>
  )
}

export default Test;