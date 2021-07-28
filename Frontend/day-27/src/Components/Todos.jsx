import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/todoActions";
const Todos = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          if (todoItem !== "")
            dispatch(addToDo({ title: todoItem, done: false }));
          setTodoItem("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Todos;
