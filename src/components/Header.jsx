import React from "react";
import logo from "../imgs/logo.svg";
import sunIcon from "../imgs/icon-sun.svg";
import moonIcon from "../imgs/icon-moon.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Extensions logo" />
      <button className="light-mode-btn">
        <img src={moonIcon} alt="Light mode icon" />
      </button>
    </div>
  );
};

export default Header;
