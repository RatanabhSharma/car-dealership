import "./form.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSpinner from "../pages/spinner/useSpinner";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [spinner, showSpinner, hideSpinner] = useSpinner();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const setdata = (e) => {
    const { name, value } = e.target;

    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    showSpinner();
    const { email } = inputValue;
    const res = await fetch("https://demelsbackend.onrender.com/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      navigate("/error");
      hideSpinner();
    } else {
      if (res.status === 409) {
        navigate("./error");
        hideSpinner();
      } else {
        navigate("/success");
        hideSpinner();
      }
    }
  };
  return (
    <main className="formBody">
      <h2>notify me of new updates</h2>
      <div className="form">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={inputValue.email}
          onChange={setdata}
          name="email"
          className="input"
          id="email"
        />

        <button type="submit" onClick={addData} className="btn btn-primary">
          Notify Me
        </button>

        {spinner}
      </div>
    </main>
  );
};
export default Form;
