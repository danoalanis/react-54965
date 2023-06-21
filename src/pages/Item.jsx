import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { ProductsData } from "../json/Products";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();
  const productsFilteredById = ProductsData.filter(
    (products) => products.id === parseInt(itemId)
  );


  
  return <ItemDetailContainer productsData={productsFilteredById} />;
};

export default Item;
