import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card">
      <h1>{product.name}</h1>
    </div>
  );
};

export default Card;
