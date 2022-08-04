import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div className="productpage">
      <NavBar />
      <div>
        <img src={product.image} alt="" />
        <div className="title">
          <h1>{product.name}</h1>
          <span>Prix : {product.prix} €</span>
        </div>

        <p>{product.description}</p>
      </div>

      {/* <button>ADD TO CHART</button> */}
    </div>
  );
};

export default ProductPage;
