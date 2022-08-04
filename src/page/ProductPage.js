import React from "react";

const ProductPage = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>Prix : {product.prix} €</span>
    </div>
  );
};

export default ProductPage;
