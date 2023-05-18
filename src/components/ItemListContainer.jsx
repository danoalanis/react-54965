import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ fontSize: "2rem", color: "#0000ff", margin: "20px" }}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;
