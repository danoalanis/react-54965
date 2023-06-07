import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {productId} = useParams();
    console.log(productId);

  return (
    <div>Id del producto: {productId}</div>
  )
}

export default ProductDetail