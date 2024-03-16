import React from "react";
import "./success.css";
import { NavLink } from "react-router-dom";

const error = () => {
  return (
    <div className="success">
      <h1>
        Data received successfully <i className="fa-solid fa-thumbs-up"></i>
      </h1>
      <h3>You will get your feedback within 24 hours</h3>
      <NavLink to="/">Go back home</NavLink>
    </div>
  );
};

export default error;
