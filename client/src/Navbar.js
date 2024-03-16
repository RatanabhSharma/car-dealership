import "./nav.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Img1 from "./asset/logo2.png";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {};
  };

  // const Light = (e) => {
  //   document.body.style.background = "#fff";
  //   document.body.style.color = "black";
  // };
  // const Dack = (e) => {
  //   document.body.style.background = "#000";
  //   document.body.style.color = "white";
  // };
  // const Blue = (e) => {
  //   document.body.style.background = "blue";
  // };
  // const Red = (e) => {
  //   document.body.style.background = "red";
  // };

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <main>
      {/* <div className="logoT">
        <img src={Img1} alt="image" />
        <h3 className="logo">
          Joelion <span>WebDev</span>
        </h3>
      </div> */}
      <nav>
        <div className="nav-center">
          <div className="navBrand">
            <NavLink to="/" style={navStyle}>
              <img src={Img1} alt="image" width="120vw" />
            </NavLink>

            <div className="nav-header">
              <button
                className="nav-toggle fixed positionFixed"
                onClick={toggleLinks}
              >
                <FaBars />
              </button>
            </div>
          </div>
          <div
            className="links-container positionFixed"
            ref={linksContainerRef}
          >
            <ul className="links" ref={linksRef}>
              <NavLink to="/" style={navStyle}>
                Home
              </NavLink>

              <NavLink to="Blogs" style={navStyle}>
                Blogs
              </NavLink>

              {/* <NavLink to="Login" style={navStyle}>
                Login
              </NavLink> */}

              {/* <button onClick={Dack} style={{ marginLeft: "2rem" }}>
              <div className="dot dot1"></div>
              </button>
            <button onClick={Light}>
              <div className="dot dot2"></div>
            </button>
            <button onClick={Red}>
              <div className="dot dot4"></div>
            </button>
            <button onClick={Blue}>
              <div className="dot dot3"></div>
            </button> */}
            </ul>
          </div>
          {/* <ul className="social-icons">
            <h3 className="socialLinkText">Social Links</h3>
            {social.map((socialIcon, index) => {
              const { id, url, icon } = socialIcon;

              return (
                <li key={id}>
                  <h3
                    className="bgred"
                    style={{
                      paddingLeft: ".5rem",
                      paddingTop: ".5rem",
                    }}
                  >
                    <a href={url}>{icon}</a>
                  </h3>
                </li>
              );
            })}
          </ul> */}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
// npm install react-router-dom
