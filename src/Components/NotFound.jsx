import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <h1 className="leading-text">
          Page Not Found
        </h1>
        <p className="text-xs">
          It seems like you entered a wrong url. <br /> Pls{" "}
          <Link to="../" className="text-orange">
            click here
          </Link>{" "}
          to go home.
        </p>
      </div>
    </>
  );
};

export default NotFound;