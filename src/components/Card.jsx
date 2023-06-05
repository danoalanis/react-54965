import React, { useEffect, useState } from "react";
import axios from "axios";

// const Card = ({ categoria, subCategoria, title }) => {
const Card = (props) => {
  console.log(props)
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    // Llamada de tipo GET (vamos a usar el metodo/verb GET)
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setDataProducts(res.data.products);
    });
    // Llamada de tipo POST (vamos a usar el metodo/verb POST para crear un producto)
    axios
      .post(
        "https://dummyjson.com/products/add",
        //Body
        {
          title: "MacBook Pro M2",
        },
        //headers
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res));
  }, []);
  return (
    <div>
      Title: {props.title}
      {dataProducts.map((producto, index) => {
        return (
          <div key={producto.id} className={props.categoria + " " + props.subCategoria}>
            <div>{producto.brand}</div>
            <div>{producto.description}</div>
            <div>${producto.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
