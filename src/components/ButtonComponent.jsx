import React, { useState } from "react";
import "./ButtonComponent.css";
//CSS Modules
import styles from "./ButtonComponent.module.css";

// import { ButtonStyles } from "../utils/styles";
const ButtonStyles = {
  color: "black",
  fontWeight: "bold",
  backgroundColor: "red",
};

const ButtonComponent = ({ myFunction }) => {
    const [changeColor, setChangeColor] = useState(false)

    const handleChangeColor = () => {
        setChangeColor(true)
    }
  return (
    <button className={changeColor ? styles.botonPrincipalGreen : styles.botonPrincipal} onClick={handleChangeColor}>
      Hola Mundo
    </button>
  );
};

export default ButtonComponent;
