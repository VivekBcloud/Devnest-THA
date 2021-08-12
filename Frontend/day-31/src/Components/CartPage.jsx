import React from "react";
import { useDispatch, useSelector } from "react-redux";
import delicon from "../assets/del.svg";
import {
  removeItem,
  incQuantity,
  decQuantity,
} from "../redux/slices/itemSlice";
const CartPage = () => {
  const itemSelected = useSelector((state) => state.itemSelected);
  const dispatch = useDispatch();
  const CartCard = () => {
    return (
      <div className="cart-container">
        {itemSelected.map((item, idx) => {
          return (
            <div key={idx} className="cart-item-container">
              <img src={item.image} className="cart-item-img" />
              <div className="cart-item-title">
                {item.title}
                <div>Rs {(item.price * 71 * item.quantity).toFixed(2)}</div>
              </div>
              <div className="cart-item-quantity">
                Quantity
                <div className="quantity-btn-container">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(incQuantity(item));
                    }}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(decQuantity(item));
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <img
                src={delicon}
                className="cart-item-del"
                onClick={() => {
                  dispatch(removeItem(item));
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {itemSelected.length > 0 ? (
        <CartCard />
      ) : (
        <h1 style={{ textAlign: "center" }}>Nothing here</h1>
      )}
    </div>
  );
};

export default CartPage;
