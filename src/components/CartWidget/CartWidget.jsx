import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const { count } = useContext(CartContext);
  useEffect(() => {
    setQty(count.products.reduce((total, product) => total + product.qty, 0));
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/cart"
        style={{
          display: "flex",
          width: "35px",
          justifyContent: "space-between",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{qty}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
