import React from "react";
import video from "../asset/G63.mp4";
import Form from "./form";
import "../hero.css";

const Hero = () => {
  return (
    <React.Fragment>
      <main className="hero">
        <video className="position" src={video} autoPlay loop muted />
        <div className="welcom">
          <div className="welcomNote">
            <h1 className="hero1">Demelautos </h1>
            <div className="services">
              <a href="https://wa.link/p3l8rj">Buy /</a>
              <a href="https://wa.link/p3l8rj">Sell /</a>
              <a href="https://wa.link/p3l8rj">Swap</a>
            </div>

            <div className="services2">
              <h5>dealer on all kinds of Vehicles</h5>
              <a href="">Brand new</a>
              <a href="">Tokumbo (Foreign)</a>
              <a href="">Registered</a>
            </div>

            <div className="button">
              <button>
                {" "}
                <a href="https://wa.link/p3l8rj" style={{ color: "white" }}>
                  GET YOUR OWN TODAY
                </a>
              </button>
            </div>
          </div>

          <h1>
            {" "}
            <a
              className="iconn"
              href="https://instagram.com/joecardealer?igshid=ZGUzMzM3NWJiOQ=="
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </h1>
          <h3 className="instwats">instagram</h3>
          <h1>
            <a className="iconn" href="https://wa.link/p3l8rj">
              <i
                style={{ color: "green" }}
                className="fa-brands fa-whatsapp"
              ></i>
            </a>
          </h1>
          <h3 className="instwats">whatsapp</h3>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Hero;
