import React, { useState } from "react";

const Extension = ({ item }) => {
  const [toggled, setToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {};

  return (
    <div className="extension-container">
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
  );
};

export default Extension;
