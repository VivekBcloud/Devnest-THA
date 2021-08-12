import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./redux/slices/productSlice";
import itemSelectedReducer from "./redux/slices/itemSlice";
const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    itemSelected: itemSelectedReducer,
  },
});

export default store;
