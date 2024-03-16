import React from "react";
import "./error.css";

const error = () => {
  return (
    <div className="error">
      <h2>An error occurred.</h2>
      <h4>Reasons why error occurs</h4>
      <ul>
        <li>..If all the data are not provided before submission. </li>
        <li>
          ..If your data already exist, this may be due to double pressing of
          the submit button{" "}
        </li>
      </ul>
    </div>
  );
};

export default error;
