import { addTodo, delTodo, completeTodo } from "./actionNames";
export const addToDo = (todo) => {
  return {
    type: addTodo,
    payload: todo,
  };
};
export const delToDo = (delIndx) => {
  return {
    type: delTodo,
    payload: delIndx,
  };
};
export const completeToDo = (Indx) => {
  return {
    type: completeTodo,
    payload: Indx,
  };
};
