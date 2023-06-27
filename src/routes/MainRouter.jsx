import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Item from "../pages/Item";
import NavBar from "../components/NavBar";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProduct";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:itemId" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
