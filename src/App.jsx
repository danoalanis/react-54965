import { useState } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

const botonSumar = {
  backgroundColor: "red",
};

const botonRestar = {
  backgroundColor: "blue",
};
const botonMultiplicar = {
  backgroundColor: "orange",
};
const botonDividir = {
  backgroundColor: "grey",
};

const object = {
  label: "Sumar",
};

const App = () => {
  // El count es el estado inicial y el setCount es la funcion que se usa para actualizar ese estado
  const [contador, setContador] = useState(1);
  const [userValue, setUserValue] = useState(0);

  //Funciones que suma/resta/multiplica/divida el valor de contador y el valor que ingresa el usuario
  const handleSumar = () => {
    setContador(contador + parseInt(userValue));
  };
  const handleRestar = () => {
    setContador(contador - parseInt(userValue));
  };
  const handleMultiplicar = () => {
    setContador(contador * parseInt(userValue));
  };
  const handleDividir = () => {
    if (parseInt(userValue) === 0) return;
    setContador(contador / parseInt(userValue));
  };

  //Funcion para manejar el evento onChange (cuando el usuario ingresa valores en el input)
  const handleChange = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <input type="number" onChange={(e) => handleChange(e)} />
        <span>{contador}</span>
        <ButtonComponent
          // object={object}
          customStyles={botonSumar}
          handleClick={handleSumar}
          label="Sumar"
        />
        <ButtonComponent
          // object={object}
          customStyles={botonRestar}
          handleClick={handleRestar}
          label="Restar"
        />
        <ButtonComponent
          // object={object}
          customStyles={botonMultiplicar}
          handleClick={handleMultiplicar}
          label="Multiplicar"
        />
        <ButtonComponent
          // object={object}
          customStyles={botonDividir}
          handleClick={handleDividir}
          label="Dividir"
        />
      </div>
    </div>
  );
};

export default App;
