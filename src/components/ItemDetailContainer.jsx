import React from "react";
import ProductCard from "../components/ProductCard";
const ItemDetailContainer = ({ productsData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
      <div  style={{
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start"
      }}>
        <h2>Descripcion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          culpa amet quae maxime quasi aperiam quisquam nobis vero numquam quod
          expedita dolore quis quidem ipsa beatae ab qui ex veritatis.
        </p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
