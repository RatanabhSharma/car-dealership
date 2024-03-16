import React from "react";
import "./success.css";
import { NavLink } from "react-router-dom";

const error = () => {
  return (
    <div className="success">
      <h1>Data received successfully</h1>
      <h3>
        thank you <i className="fa-solid fa-thumbs-up"></i>
      </h3>
      <NavLink to="/">Go back home</NavLink>
    </div>
  );
};

export default error;
