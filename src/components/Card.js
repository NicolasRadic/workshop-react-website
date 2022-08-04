import React from "react";
import { Link } from "react-router-dom";
const Card = ({ product, handleClick }) => {
  return (
    <div className="card">
      <Link to="/ProductPage" state={{ product: product }}>
        <img src={product.image} alt="" />
        <h1>{product.name}</h1>
        <span>Prix : {product.prix} €</span>
      </Link>
      <button onClick={() => handleClick(product)}>ADD TO CART</button>
    </div>
  );
};

export default Card;
