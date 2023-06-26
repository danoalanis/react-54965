import React from "react";
import ProductCard from "../components/ProductCard";
const ItemListContainer = ({ productsData }) => {
  console.log(productsData)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "90vw",
        height: "100%",
        justifyContent: "space-around",
      }}
    >
      
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
