import React from "react";
import data from "../data.json";
import Extension from "./Extension";

const Extensions = () => {
  return (
    <div className="extensions-container">
      {data.map((item) => (
        <Extension item={item} />
      ))}
    </div>
  );
};

export default Extensions;
