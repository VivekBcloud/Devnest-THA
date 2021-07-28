import { addTodo, delTodo, completeTodo } from "../actions/actionNames";
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case addTodo:
      const newState = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    case delTodo:
      const newState1 = state.filter((todo, indx) => indx !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState1));
      return newState1;
    case completeTodo:
      const newState2 = state.map((todo, indx) => {
        if (indx === action.payload) return { ...todo, done: !todo.done };
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newState2));
      return newState2;
    default:
      return state;
  }
};
