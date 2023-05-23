import React, { useState, useEffect } from "react";

const PracticaUseEffect = () => {
  //   const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const [countDos, setCountDos] = useState(10);
  const handleSumar = () => {
    setCount(count + 1);
  };

  const handlerSumarDos = () => {
    setCountDos(countDos + 1);
  };
  const handleRestar = () => {
    setCount(count - 1);
  };


  //No agregamos array de dependencias, se ejecutara la funcion cada vez que se re-renderize el componente (o el padre)
  //   useEffect(() => {
  //     console.log("Soy un useEffect");
  //   });

  // La unica vez que se va a ejecutar, es la primera vez que el componente se renderiza
  //   useEffect(() => {
  //     console.log("Soy un useEffect");
  //   }, []);

  useEffect(() => {
    console.log("Soy un useEffect");
  }, [countDos]);

  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <span>Uno: {count}</span>
      <span>Dos: {countDos}</span>
      <button onClick={handleSumar}>+</button>
      <button onClick={handlerSumarDos}>+ Dos</button>
    </div>
  );
};

export default PracticaUseEffect;
