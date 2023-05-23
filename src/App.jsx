import React, { useState, useRef } from "react";
import "./App.css";
import LabelComponent from "./components/LabelComponent";
import ButtonComponent from "./components/ButtonComponent";
import MainLayout from "./layouts/MainLayout";
import PracticaUseEffect from "./components/PracticaUseEffect";

const App = () => {
  // El count es el estado inicial y el setCount es la funcion que se usa para actualizar ese estado
  const [count, setCount] = useState(0);

  const [contador, setContador] = useState(0);
  const customRef = useRef(0);
  customRef.current++;

  const handleSumar = () => {
    setCount(count + 1);
  };

  const handleRestar = () => {
    setCount(count - 1);
  };

  const handleSaludo = () => {
    console.log("Hola soy un componente boton");
  };

  const handeRefSum = () => {
    setContador(contador + 1);
  };
  return (
    // <div className="App">
    //   {/* <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       width: "100vw",
    //       height: "100vh",
    //     }}
    //   > */}

    <MainLayout label="MainLayout">
      <button onClick={handleRestar}>-</button>
      <span>{count}</span>
      <button onClick={handleSumar}>+</button>
      <ButtonComponent
        label="Boton 1"
        customStyles={{
          backgroundColor: "red",
        }}
      />

      <ButtonComponent
        label="Boton 2"
        customStyles={{
          backgroundColor: "blue",
        }}
        customSaludo={handleSaludo}
      />

      <ButtonComponent
        label="Boton 3"
        customStyles={{
          backgroundColor: "orange",
        }}
      />

      <ButtonComponent
        label="Boton 4"
        customStyles={{
          backgroundColor: "green",
        }}
      />

      {/* <LabelComponent
        label="Boton 5"
        customStyles={{
          backgroundColor: "grey",
        }}
      /> */}
      <br />
      <p>{contador} </p>
      <br />
      <p>{customRef.current}</p>
      <button onClick={handeRefSum}>Sumar Ref</button>
      <PracticaUseEffect />
    </MainLayout>

    //   {/* </div> */}
    // </div>
  );
};

export default App;
