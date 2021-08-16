import React, { useState } from "react";
import "./App.css";
import InputTodo from "./Components/InputTodo";
import { ModeContext } from "./context/modecontext";
function App() {
  const [mode, setMode] = useState<boolean>(false);
  const theme = mode
    ? {
        foreground: "#000000",
        background: "#eeeeee",
      }
    : {
        foreground: "#ffffff",
        background: "#222222",
      };
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div
        style={{ background: theme.background, color: theme.foreground }}
        className="App"
      >
        <InputTodo />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
