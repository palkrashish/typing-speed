import React from "react";
import logo from "./../../assert/flash.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">Flash Typing</p>
        <div className="nav-right">
          <a
            target="_blank"
            className="nav-linkedin-link"
            href="https://www.linkedin.com/in/palkumarashish/"
            rel="moreferrer"
          >
            Ashish Kr Pal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
