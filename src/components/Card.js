import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddBasket from "./AddBasket";

const Card = ({ product, cartItem, setCartItem }) => {
  const [displayAddBasket, setDisplayAddBasket] = useState(false);
  const [articleQuantity, setArticleQuantity] = useState(0);

  return (
    <div className="card">
      <Link to="/ProductPage" state={{ product: product }}>
        <img src={product.image} alt="produit" />
        <h1>{product.name}</h1>
        <span>Prix : {product.price} €</span>
      </Link>
      <button
        className="show-addcart"
        onClick={() => setDisplayAddBasket(!displayAddBasket)}
      >
        Ajouter au panier
      </button>
      {displayAddBasket && (
        <AddBasket
          articleQuantity={articleQuantity}
          setArticleQuantity={setArticleQuantity}
          product={product}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      )}
    </div>
  );
};

export default Card;
