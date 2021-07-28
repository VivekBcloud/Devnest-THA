import { addTodo, delTodo, completeTodo } from "../actions/actionNames";

export const todoReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case addTodo:
      return [...state, action.payload];
    case delTodo:
      return state.filter((todo, indx) => indx !== action.payload);
    case completeTodo:
      return state.map((todo, indx) => {
        if (indx === action.payload) return { ...todo, done: !todo.done };
        return todo;
      });
    default:
      return state;
  }
};
