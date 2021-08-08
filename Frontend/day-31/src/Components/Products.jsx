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
          <h1 className="loading">LOADing</h1>
        ) : (
          allProducts &&
          allProducts.length > 0 &&
          allProducts.map((item) => {
            return <CardComponent item={item} key={item.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Products;
