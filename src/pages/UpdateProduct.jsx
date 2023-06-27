import React from "react";
import { Button } from "react-bootstrap";
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent";

const UpdateProduct = () => {
  const [category, setCategory] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [stock, setStock] = React.useState();
  const [title, setTitle] = React.useState();
  const [productData, setProductData] = React.useState();
  const [loading, setLoading] = React.useState();

  const { itemId } = useParams();

  React.useEffect(() => {
    const db = getFirestore();

    const productCollection = doc(db, "products", itemId);
    getDoc(productCollection)
      .then((snapshot) => {
        setProductData({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.log(error))
      .then(() => setLoading(false));
  }, [itemId]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    const newProduct = {
      category,
      description,
      image,
      stock,
      title,
    };

    const db = getFirestore();
    const updateProductCollection = doc(db, "products", itemId);
    updateDoc(updateProductCollection, newProduct)
  };


  return loading ? (
    <LoaderComponent />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "30px",
      }}
    >
      <input
        type="text"
        onChange={(e) => handleCategoryChange(e)}
        placeholder="Categoria"
        
      />
      <input
        type="text"
        onChange={(e) => handleDescriptionChange(e)}
        placeholder="Descripcion"
      />
      <input
        type="text"
        onChange={(e) => handleImageChange(e)}
        placeholder="Imagen"
      />
      <input
        type="text"
        onChange={(e) => handleStockChange(e)}
        placeholder="Stock"
      />
      <input
        type="text"
        onChange={(e) => handleTitleChange(e)}
        placeholder="Titulo"
      />
      <Button onClick={handleSubmit}> Modificar producto </Button>
    </div>
  );
};

export default UpdateProduct;
