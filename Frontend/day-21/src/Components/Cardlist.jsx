import React from "react";
import "./cardlist.css";
const Cardlist = ({
  itemName,
  calorieAmount,
  deleteItem,
  index,
  editItem,
  edit,
  doneItem,
  handleEditItemName,
}) => {
  let editCalorieAmount;
  return (
    <div className="card">
      {edit ? (
        <input type="text" defaultValue={itemName} />
      ) : (
        <p className="item-name">{itemName}</p>
      )}
      {edit ? (
        <input
          type="number"
          name="editCalorieAmount"
          defaultValue={calorieAmount}
          onChange={(e) => {
            editCalorieAmount = e.target.value;
          }}
        />
      ) : (
        <p className="calorie-amount">
          you have consumed {calorieAmount} calorie.
        </p>
      )}
      <button
        className="btn"
        onClick={() => deleteItem(index, editCalorieAmount)}
      >
        Delete
      </button>
      <button
        className="btn"
        onClick={edit ? () => doneItem(index) : () => editItem(index)}
      >
        {edit ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default Cardlist;
