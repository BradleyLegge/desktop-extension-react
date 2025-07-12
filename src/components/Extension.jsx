import React, { useState } from "react";
import data from "../data.json";

const Extension = () => {
  const [active, setActive] = useState(data);

  const handleToggle = (id) => {
    console.log(id);
    console.log(active.id);
    setActive(
      active.map((i) => (i.id === id ? { ...i, isActive: !i.isActive } : i))
    );
  };

  return (
    <div className="extensions-container">
      {data.map((item) => (
        <div key={item.id}>
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
              className={`toggle-btn ${item.isActive ? "toggled" : ""}`}
              onClick={() => handleToggle(item.id)}
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

// onClick={() => setToggled(!toggled)}
// className={`toggle-btn ${toggled ? "toggled" : ""}`}
