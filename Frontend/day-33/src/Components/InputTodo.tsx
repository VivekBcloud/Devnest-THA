import React, { FC, useContext, useState } from "react";
import Todo from "./Todo";
import { ModeContext } from "../context/ModeContext";
export type item = {
  todoItem: string;
  done: boolean;
};
const InputTodo: FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todo, setTodo] = useState<item[]>([]);
  const { mode, setMode } = useContext<any>(ModeContext);

  const handleDel = (indx: number) => {
    setTodo((s) => s.filter((item, idx) => indx != idx));
  };
  const handleDone = (indx: number) => {
    setTodo((s) =>
      s.map((item, idx) => {
        if (idx === indx) return { ...item, done: !item.done };
        return item;
      })
    );
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={todoItem}
          onChange={(e) => {
            setTodoItem((s) => e.target.value);
          }}
        />
        <button
          onClick={() => {
            const item = { todoItem: todoItem, done: false };
            setTodo([...todo, item]);
            setTodoItem("");
          }}
        >
          Add
        </button>
        <button onClick={() => setMode((s: boolean) => !s)}>
          {mode ? "Light" : "Dark"}
        </button>
      </div>
      <Todo item={todo} handleDel={handleDel} handleDone={handleDone} />
    </>
  );
};

export default InputTodo;
