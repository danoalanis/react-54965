import React, { createContext, useState } from "react";

//Creamos el contexto para el carrito de compras

export const CartContext = createContext();

// Creamos el provider de nuestro context como un componente HOC el cual recibirá un children

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState({ qtyItems: 0, products: [] });
  console.log(count.products)

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};