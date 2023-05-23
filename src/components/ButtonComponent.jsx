import React from "react";
import "./Button.css";
const ButtonComponent = ({
  label = "Nombre por Defecto",
  handleClick,
  customClass = "boton-default",
}) => {
  return (
    <button className={customClass} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ButtonComponent;
