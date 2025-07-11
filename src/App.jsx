import React, { useState } from "react";
import Header from "./components/header";
import Filter from "./components/Filter";
import Extensions from "./components/Extensions";

const App = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Filter />
      <Extensions />
    </div>
  );
};

export default App;
