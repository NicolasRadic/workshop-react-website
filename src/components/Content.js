import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/product`)
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="content">
      <h2>Produits</h2>
      <div>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Content;
