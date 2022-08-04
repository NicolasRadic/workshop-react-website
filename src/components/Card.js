import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <span>Prix : {product.prix} €</span>
    </div>
  );
};

export default Card;
