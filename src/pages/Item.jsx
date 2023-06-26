import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { ProductsData } from "../json/Products";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";

const Item = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productCollection = doc(db, "products", itemId);
    getDoc(productCollection)
      .then((snapshot) => {
        setProductsData([{ id: snapshot.id, ...snapshot.data()}]);
      })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, [itemId]);

  return <ItemDetailContainer productsData={productsData} />;
};

export default Item;
