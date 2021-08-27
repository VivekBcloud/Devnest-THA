import React, { useState } from "react";

import "./App.scss";
import Navigation from "./components/navigation";
import LeftSection from "./components/LeftSection";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
}

export default App;
