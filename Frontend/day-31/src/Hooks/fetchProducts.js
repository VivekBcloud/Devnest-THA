import { useState, useEffect } from "react";
import axios from "axios";
const fetchProducts = async () => {
  console.log("called isefetchproducts");
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const { data } = res;
    return data;
  } catch (e) {
    console.log(e);
  }
};
export default fetchProducts;
