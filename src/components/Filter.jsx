import React from "react";

const Filter = () => {
  return (
    <div className="filter-container">
      <h1>Extensions List</h1>
      <div className="button-list">
        <button className="all-btn">All</button>
        <button className="active-btn">Active</button>
        <button className="inactive-btn">Inactive</button>
      </div>
    </div>
  );
};

export default Filter;
