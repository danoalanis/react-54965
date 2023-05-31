import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const CardComponent = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProductsData(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return productsData.map((product) => {
    return (
      <Card style={{ width: "18rem", margin: 40 }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Button variant="primary">Hacer algo</Button>
        </Card.Body>
      </Card>
    );
  });
};

export default CardComponent;
