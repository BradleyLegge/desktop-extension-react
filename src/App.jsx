import React, { useState } from "react";
import Header from "./components/header";
import Filter from "./components/Filter";
import Extensions from "./components/Extensions";
import Extension from "./components/Extension";

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
