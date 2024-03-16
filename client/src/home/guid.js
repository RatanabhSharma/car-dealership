import React from "react";
import img from "../asset/bg2.jpg";

const Guid = () => {
  return (
    <main className="guidBg">
      <div className="guidLines">
        <img className="image" src={img} alt="img" />
        <div className="guideInfo ">
          <h3 className="g">Joelion</h3>
          <h1 className="g">guide on how to purchase</h1>
          <p className="p1 g">
            This guide will help you in all the steps neccesary for you to get
            your own car.
          </p>
          <p className="p2 g">
            this guide is provided in other to avoide beening scamed of anyone.
          </p>
        </div>
      </div>
      <div className="guidBtn">
        <button>get guide</button>
      </div>
    </main>
  );
};

export default Guid;
