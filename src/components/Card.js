import React from "react";
import { Link } from "react-router-dom";
const Card = ({ product, handleClick }) => {
  return (
    <div className="card">
      <Link to="/ProductPage" state={{ product: product }}>
        <img src={product.image} alt="produit" />
        <h1>{product.name}</h1>
        <span>Prix : {product.prix} €</span>
      </Link>
      <button className="add-cart">Ajouter au panier</button>
    </div>
  );
};

export default Card;
