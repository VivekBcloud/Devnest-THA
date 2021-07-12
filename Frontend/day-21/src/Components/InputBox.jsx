import React, { useState } from "react";
import Cardlist from "./Cardlist";

const InputBox = () => {
  const [itemName, setItemName] = useState("");
  const [calorieAmount, setCalorieAmount] = useState("");
  const [itemList, setItemList] = useState([]);
  const item = () => {
    return (
      <div className="card">
        <div className="item-name">{itemName}</div>
        <div className="calorie-amount">{calorieAmount}</div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    );
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    let edit = false;
    setItemList([...itemList, { itemName, calorieAmount, edit }]);
  };
  const handleDeleteItem = (index) => {
    const newItemList = itemList.filter((item, idx) => idx != index);
    setItemList(newItemList);
  };
  const handleEditItem = (index) => {
    console.log(index);
    console.log(itemList);
    setItemList(
      itemList.map((item, idx) => {
        if (idx === index) {
          item.edit = true;
        }
        return item;
      })
    );
  };
  const handleDone = (index) => {
    setItemList(
      itemList.map((item, idx) => {
        if (idx === index) {
          item.edit = false;
          // item.itemName =
        }
        return item;
      })
    );
  };
  const handleEditItemName = (e) => {
    setCalorieAmount(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Calorie amount"
          value={calorieAmount}
          onChange={(e) => {
            setCalorieAmount(e.target.value);
          }}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </form>
      <button
        onClick={() => {
          console.log(itemList);
        }}
      >
        SHOW
      </button>
      {itemList.map((item, index) => (
        <Cardlist
          itemName={item.itemName}
          calorieAmount={item.calorieAmount}
          edit={item.edit}
          deleteItem={handleDeleteItem}
          editItem={handleEditItem}
          key={index}
          index={index}
          doneItem={handleDone}
          handleEditItemName={handleEditItemName}
        />
      ))}
    </>
  );
};

export default InputBox;
