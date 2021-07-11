import React from "react";
import "./cardlist.css";
const Cardlist = ({ itemName, calorieAmount, deleteItem, index, editItem }) => {
  return (
    <div className="card">
      <p className="item-name">{itemName}</p>
      <p className="calorie-amount">
        you have consumed {calorieAmount} calorie.
      </p>
      <button className="btn" onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button className="btn" onClick={() => editItem(index)}>
        Edit
      </button>
    </div>
  );
};

export default Cardlist;
