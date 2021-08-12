import React, { useEffect } from "react";
import CardComponent from "./CardComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="products">
        {loading ? (
          <h1 className="loading">Loading</h1>
        ) : (
          allProducts &&
          allProducts.length > 0 &&
          allProducts.slice(0, 20).map((item, indx) => {
            return <CardComponent item={item} key={indx} />;
          })
        )}
      </div>
    </>
  );
};

export default Products;
