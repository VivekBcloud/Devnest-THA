import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "itemsSelected",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      let flag = false;
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          flag = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      if (flag) return state;
      return [...state, action.payload];
    },
    removeItem: (state, action) =>
      state.filter((thing) => thing.id !== action.payload.id),
    incQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return state;
    },
    decQuantity: (state, action) => {
      if (action.payload.quantity === 1) return state;
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return state;
    },
  },
});

export const { addItem, removeItem, incQuantity, decQuantity } =
  itemSlice.actions;

export default itemSlice.reducer;
