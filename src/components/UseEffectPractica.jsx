import React, {useEffect, useState} from 'react'

const UseEffectPractica = () => {
    const [count, setCount] = useState(9);
    const [countDos, setCountDos] = useState(9);

    //1. useEffect => 2 atributos: 1er atributo: funcion --- 2do atributo: sin array de dependencias

    // useEffect(() => {
    //     console.log("Soy un useEffect sin dependencias");
    // });

    
    //2. useEffect => 2 atributos: 1er atributo: funcion --- 2do atributo: array de dependencias vacio

    // useEffect(() => {
    //     console.log("Soy un useEffect con array dependencias vacio");
    // }, []);

    //3. useEffect => 2 atributos: 1er atributo: funcion --- 2do atributo: array de dependencias con valor

    useEffect(() => {
        console.log("Soy un useEffect con array dependencias con valor");
    }, [count]);

    const handleClick = () => {
        setCount(count + 10)
    }


    const handleSuma = () => {
        setCountDos(count + 1)
    }

  return (
    <div>
        {count}
        <button onClick={handleClick}>Click me!</button>

        {countDos}
        <button onClick={handleSuma}>Sumar</button>
    </div>
    
  )
}

export default UseEffectPractica