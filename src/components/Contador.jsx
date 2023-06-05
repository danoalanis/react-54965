import React from "react";
import { useCount } from "../hooks/useCount";

const Contador = () => {
  const { count, increment, decrement, reset } = useCount(1, 0, 10);
  console.log(count);
  return (
    <div>
        <div>{count}</div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
};

export default Contador;
