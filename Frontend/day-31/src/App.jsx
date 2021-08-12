import React from "react";
import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Products from "./Components/Products";
import CartPage from "./Components/CartPage";
import ItemPage from "./Components/ItemPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={CartPage} />
          <ItemPage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
