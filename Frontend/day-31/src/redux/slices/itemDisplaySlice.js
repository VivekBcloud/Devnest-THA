import { createSlice } from "@reduxjs/toolkit";

export const itemDisplaySlice = createSlice({
  name: "itemDisplay",
  initialState: {},
  reducers: {
    itemDisplay: (state, action) => {
      return action.payload;
    },
  },
});

export const { itemDisplay } = itemDisplaySlice.actions;

export default itemDisplaySlice.reducer;
