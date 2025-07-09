import React, { useState } from "react";
import data from "../data.json";

const Extension = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="extension-container">
      {data.map((item, index) => (
        <div key={index}>
          <div className="extension-info">
            <img src={item.logo} alt="" />
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
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
      ))}
    </div>
  );
};

export default Extension;
