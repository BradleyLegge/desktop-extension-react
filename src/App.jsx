import React, { useState } from "react";
import Header from "./components/header";
import Extension from "./components/Extension";
import Filter from "./components/Filter";

const App = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Filter />
      <Extension />
    </div>
  );
};

export default App;
