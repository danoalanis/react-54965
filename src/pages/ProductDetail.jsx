import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
      setProductData(res.data);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="Cards container">
      <div key={productData.id} className="Card">
        <div className="Title">{productData.title}</div>
        <div className="Images">
          <img src={productData.images[0]} alt="productos-disponibles" />
        </div>
        <div className="Description">{productData.description}</div>
        <div className="Price">${productData.price}</div>
        <button className="Boton-Agregar">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;
