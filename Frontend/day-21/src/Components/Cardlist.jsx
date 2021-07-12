import React, { useState } from "react";
import "./cardlist.css";
const Cardlist = ({
  itemName,
  calorieAmount,
  deleteItem,
  index,
  editItem,
  edit,
  doneItem,
}) => {
  const [editCalorieAmount, setEditCalorieAmount] = useState(calorieAmount);
  const [editItemName, setEditItemName] = useState(itemName);
  return (
    <div className="card">
      {edit ? (
        <input
          type="text"
          defaultValue={itemName}
          onChange={(e) => {
            setEditItemName(e.target.value);
          }}
        />
      ) : (
        <p className="item-name">{itemName}</p>
      )}
      {edit ? (
        <input
          type="number"
          name="edit-Calorie-Amount"
          defaultValue={calorieAmount}
          onChange={(e) => {
            setEditCalorieAmount(e.target.value);
            console.log(editCalorieAmount);
          }}
        />
      ) : (
        <p className="calorie-amount">
          you have consumed {calorieAmount} calorie.
        </p>
      )}
      <button className="btn" onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button
        className="btn"
        onClick={
          edit
            ? () => doneItem(index, editCalorieAmount, editItemName)
            : () => editItem(index)
        }
      >
        {edit ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default Cardlist;
