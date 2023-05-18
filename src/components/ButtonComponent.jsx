import React from 'react'

const ButtonComponent = () => {
    const handleSaludo = () => {
        console.log("Hola soy un componente boton")
    }
  return (
    <button onClick={handleSaludo}>Componente boton</button>
  )
}

export default ButtonComponent