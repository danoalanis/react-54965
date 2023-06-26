import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartButtons = ({customStyle}) => {
  const [count, setCount] = useContext(CartContext);
  const [state, setState] = useState(0);

  const handleMoreClick = () => {
    setCount(count + 1);
    setState(state + 1);
  };

  const handleLessClick = () => {
    setCount(count - 1);
    setState(state - 1);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <div style={{margin: "10px"}}>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleLessClick}
        >
          -
        </Button>
        <span style={{margin: "10px", fontSize: "18px"}}>{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleMoreClick}
        >
          +
        </Button>
      </div>
      <Button className="ml-2" variant={customStyle.backgroundColor}>
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
