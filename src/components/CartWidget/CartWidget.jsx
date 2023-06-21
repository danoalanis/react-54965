import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const [count] = useContext(CartContext);
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
      <span>{count}</span>
    </div>
  );
};

export default CartWidget;
