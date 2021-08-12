import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./redux/slices/productSlice";
import itemSelectedReducer from "./redux/slices/itemSlice";
import itemDisplayReducer from "./redux/slices/itemDisplaySlice";
const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    itemSelected: itemSelectedReducer,
    itemDisplay: itemDisplayReducer,
  },
});

export default store;
