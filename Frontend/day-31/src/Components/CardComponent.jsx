import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/itemSlice";
const CardComponent = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={item.image} className="product-img" />
      <Card.Body>
        <Card.Title className="product-title">{item.title}</Card.Title>
        <Card.Text>{item.description.slice(0, 60)}</Card.Text>
        <Card.Text style={{ fontSize: "1.2rem" }}>
          <strong>₹{item.price * 71}</strong>
        </Card.Text>
        <Button
          variant="danger"
          onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}
        >
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
