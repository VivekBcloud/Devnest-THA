import React from "react";
import "./box.css";
function Box({ bgColor }) {
  console.log(bgColor);
  return (
    <div
      className="box"
      style={{ backgroundColor: bgColor == 0 ? "white" : "black" }}
    ></div>
  );
}

export default Box;
