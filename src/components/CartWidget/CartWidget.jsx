import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "35px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
