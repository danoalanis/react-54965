import React, { memo } from "react";

const Factorial = memo(({ number }) => {
  let result = 1;
  for (let i = 0; i <= number; i++) {
    result *= i;
  }
  console.log("Se renderiza de nuevo");
  return <span>{result}</span>;
});

export default Factorial;