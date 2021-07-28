import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delToDo, completeToDo } from "../actions/todoActions";
const TodoItem = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, indx) => {
        return (
          <div key={indx} className="todo">
            <div
              className="title"
              style={
                todo.done
                  ? {
                      textDecoration: "line-through",
                      display: "inline-block",
                      userSelect: "none",
                    }
                  : {
                      textDecoration: "none",
                      display: "inline-block",
                      userSelect: "none",
                    }
              }
              onClick={() => {
                dispatch(completeToDo(indx));
              }}
            >
              {todo.title}
            </div>
            <button
              onClick={() => {
                dispatch(delToDo(indx));
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
