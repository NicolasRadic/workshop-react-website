import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="productPage">
      <NavBar />
      <div className="productPage__content">
        <img className="productPage__coverImage" src={product.image} alt="" />
        <div className="productPage__title">
          <div className="productPage__category">
            <h1>
              {product.name} <span id="category">({product.category})</span>
            </h1>
          </div>

          <span>Prix : {product.price} €</span>
        </div>

        <p className="productPage__description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
