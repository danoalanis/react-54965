import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
// import { ProductsData } from "../json/Products";
import axios from "axios";
import LoaderComponent from "../components/LoaderComponent";

const homeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/prducts")
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((err) => {
        if(err.response.status === 404)
          {
            setError(true)
            setTypeError("404")
          }
        setError(true)})
      .then(() => setLoading(false));
  }, []);

  return (
    <div style={homeStyles}>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Error </div>
      ) : (
        <ItemListContainer productsData={productsData} />
      )}
    </div>
  );
};

export default Home;
