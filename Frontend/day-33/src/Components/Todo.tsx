import React, { FC } from "react";
import { item } from "./InputTodo";

interface TodoProps {
  item: item[];
  handleDel: (indx: number) => void;
  handleDone: (indx: number) => void;
}
const Todo: FC<TodoProps> = ({ item, handleDel, handleDone }) => {
  return (
    <ul>
      {item.map((ii, indx) => {
        return (
          <li
            key={indx}
            style={
              ii.done
                ? {
                    textDecoration: "line-through",
                    userSelect: "none",
                  }
                : {
                    textDecoration: "none",
                    userSelect: "none",
                  }
            }
            onClick={() => {
              handleDone(indx);
            }}
          >
            {ii.todoItem}{" "}
            <button
              onClick={() => {
                handleDel(indx);
              }}
            >
              del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
