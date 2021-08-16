import React, { FC } from "react";

interface TodoProps {
  item: string[];
}
const Todo: FC<TodoProps> = ({ item }) => {
  return (
    <ul>
      {item.map((ii, indx) => {
        return <li key={indx}>{ii}</li>;
      })}
    </ul>
  );
};

export default Todo;
