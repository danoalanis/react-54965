import React from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = ({ productData }) => {
  const customStyleNoStock = {
    backgroundColor: "danger",
    buttonState: "disabled",
  };
  const customStyleStock = {
    backgroundColor: "primary",
    buttonState: "",
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.images[0]} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        {/* {productData.stock < 100 ? <div>Sin stock</div> : <CartButtons />} */}
        <div>{productData.stock < 100 ? "Ultimos Productos" : ""} </div>
        {productData.stock < 100 ? (
          <CartButtons customStyle={customStyleNoStock} />
        ) : (
          <CartButtons customStyle={customStyleStock} />
        )}

        <Link to={`/item/${productData.id}`}>Ir a detalle</Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
