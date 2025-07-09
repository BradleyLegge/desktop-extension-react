import React, { useState } from "react";
import devLensIcon from "../imgs/logo-devlens.svg";

const Extension = () => {
  const [toggled, setToggled] = useState(false);

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
        <button
          onClick={() => setToggled(!toggled)}
          className={`toggle-btn ${toggled ? "toggled" : ""}`}
        >
          <div className="slide"></div>
        </button>
      </div>
    </div>
  );
};

export default Extension;
