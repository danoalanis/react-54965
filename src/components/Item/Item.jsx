import React from "react";
import { Link } from "react-router-dom";
const Item = ({ productsData }) => {
  console.log(productsData);
  return (
    <div className="Cards container">
      {productsData.map((product, index) => {
        return (
          <div key={product.id} className="Card">
            <div className="Title">{product.title}</div>
            <div className="Images">
              <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} alt="productos-disponibles" />
              </Link>
            </div>
            <div className="Description">{product.description}</div>
            <div className="Price">${product.price}</div>
            <button className="Boton-Agregar">Agregar al Carrito</button>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
