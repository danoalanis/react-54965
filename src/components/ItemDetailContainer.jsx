import React from "react";
import ProductCard from "../components/ProductCard";
const ItemDetailContainer = ({ productsData }) => {
  return (
    <div>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
