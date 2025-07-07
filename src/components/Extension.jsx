import React from "react";
import devLensIcon from "../imgs/logo-devlens.svg";

const Extension = () => {
  return (
    <div className="extension-container">
      <div className="extension-info">
        <img src={devLensIcon} alt="" />
        <div>
          <h2>DevLens</h2>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
      <div className="extension-btns">
        <button className="remove-btn">Remove</button>
        <button className="toggle-btn">Toggle</button>
      </div>
    </div>
  );
};

export default Extension;
