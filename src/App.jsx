import React, { useState } from "react";
import Header from "./components/header";
import Extension from "./components/Extension";

const App = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <Header />
      <Extension />
    </div>
  );
};

export default App;
