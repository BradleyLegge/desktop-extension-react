import React from "react";
import data from "../data.json";
import Extension from "../components/Extension";

const Extensions = () => {
  return (
    <div className="extensions-container">
      {data.map((item, index) => (
        <Extension key={index} item={item} />
      ))}
    </div>
  );
};

export default Extensions;
