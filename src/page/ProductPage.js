import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div>
      <NavBar />
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>Prix : {product.prix} €</span>
    </div>
  );
};

export default ProductPage;
