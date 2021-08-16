import React, { FC, useContext, useState } from "react";
import Todo from "./Todo";
import { ModeContext } from "../context/modecontext";
const InputTodo: FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);
  const { mode, setMode } = useContext<any>(ModeContext);
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodo([...todo, todoItem]);
            setTodoItem("");
          }}
        >
          Add
        </button>
        <button onClick={() => setMode((s: boolean) => !s)}>
          {mode ? "Light" : "Dark"}
        </button>
      </div>
      <Todo item={todo} />
    </>
  );
};

export default InputTodo;
