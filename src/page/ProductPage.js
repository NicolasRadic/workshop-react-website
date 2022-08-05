import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div className="product-page">
      <NavBar />
      <div className="product-content">
        <img src={product.image} alt="" />
        <div className="title">
          <div className="category">
            <h1>
              {product.name} <span id="category">({product.category})</span>
            </h1>
          </div>

          <span>Prix : {product.prix} €</span>
        </div>

        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
