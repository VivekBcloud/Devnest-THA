import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";

const ItemPage = () => {
  const allProducts = useSelector((state) => state.allProducts.products);
  const ItemComponent = () => {
    const item = useSelector((state) => state.itemDisplay);
    return (
      <div className="display-item" key={item.id}>
        <img src={item.image} className="display-item-img" />
        <div className="display-item-texts">
          <div className="display-item-title">{item.title}</div>
          <div className="display-item-des">{item.description}</div>
          <div className="display-item-price">Price: ₹{item.price * 71}</div>
        </div>
      </div>
    );
  };
  return (
    <>
      {allProducts.slice(0, 20).map((item, idx) => {
        return (
          <Route path={`/${item.id}`} component={ItemComponent} key={idx} />
        );
      })}
    </>
  );
};

export default ItemPage;
