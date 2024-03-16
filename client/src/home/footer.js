import React from "react";
import { social } from "../data/data";
import logo from "../asset/logo2.png";

import "./footer.css";

const footer = () => {
  return (
    <div className="footerbg">
      <p>
        &copy; JoeTech <img src={logo} alt="" />
        Collaboration with Demelautos
      </p>

      <div className="socialLink">
        <ul className="Sico">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <h3
                  style={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                  }}
                >
                  <a style={{ color: "red" }} href={url}>
                    {icon}
                  </a>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default footer;
