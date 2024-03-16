import React, { useState } from "react";
import useSpinner from "../pages/spinner/useSpinner";
// import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./request.css";

const Request = () => {
  const [spinner, showSpinner, hideSpinner] = useSpinner();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    showSpinner();
    const { name, email, description } = data;
    try {
      const data = await fetch("https://demelsbackend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      });
      if (data.status === 400) {
        navigate("/error");
        toast.error("something went wrong");
        hideSpinner();
      } else {
        if (data.status === 409) {
          toast.error("Email already exist");
          navigate("/error");
          hideSpinner();
        } else {
          if (data.status === 403) {
            toast.error("please state if they is any other specification");
          } else {
            setData({});
            toast.success("Login successful wellcome");
            navigate("/success");
            hideSpinner();
          }
        }
      }
    } catch (error) {
      console.log(data.error);
    }
  };
  return (
    <div className="form-title">
      <p>
        Do you have any specification?
        <a href="">check out this list</a>
      </p>

      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Car Name /model</label>
          <input
            type="text"
            placeholder="specify"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email or Phone number</label>
          <input
            type="text"
            placeholder="Email OR Phone Number"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="description">
            specification(including car name and model)
          </label>
          <textarea
            name="description"
            id="description"
            cols="20"
            rows="5"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {spinner}
      </form>
    </div>
  );
};

export default Request;
