import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { itemCount } = useContext(CartContext);
    console.log(itemCount)
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
