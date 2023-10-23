import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <>

      <h2 clasName="error">Error page!</h2>
      <br />
      <h6>OOps! Something went wrong...pls return back.</h6>
      <div  className="btn-container">
         <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
         <button className="btn" onClick={() => navigate("/countert")}>Home</button>
      </div>
    </>
  );
};

export default Contact;