import React from "react";
import "./App.css";
import { firstNameInput, lastNameInput } from "./actions/userInputAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <input
          type="text"
          onChange={(e) => {
            dispatch(firstNameInput(e.target.value));
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            dispatch(lastNameInput(e.target.value));
          }}
        />
      </div>
      <div className="show-names">
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </>
  );
}

export default App;
