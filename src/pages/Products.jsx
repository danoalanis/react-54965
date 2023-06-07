import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <title>Producto 1</title>
        <label>Descripcion del producto 1</label>
        <label>ID: dasdadsasd</label>
        <Link to="/products/dasdadsasd">Ir al detalle</Link>
    </div>
  )
}

export default Products