import React, { useEffect, useState } from "react";
import axios from "axios";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Esta es la descripción del producto 1",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Esta es la descripción del producto 2",
    precio: 200,
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Esta es la descripción del producto 3",
    precio: 300,
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Esta es la descripción del producto 5",
    precio: 400,
  },
];

const Card = ({ categoria, subCategoria }) => {
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
      {dataProducts.map((producto, index) => {
        return (
          <div key={producto.id} className={categoria + " " + subCategoria}>
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
