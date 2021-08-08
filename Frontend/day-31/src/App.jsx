import React from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Switch>
          <Route path="/" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
