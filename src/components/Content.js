import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const categoryRadio = ["fruit", "legume"];

  const [cart, setCart] = useState([]);
  const handleClick = (product) => {
    cart.push(product);
    console.log(cart);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product?q=${search}`)
      .then((res) => setProducts(res.data));
  }, [search]);

  return (
    <div className="content">
      <h2>Produits</h2>

      <form>
        <input
          type="text"
          placeholder="Entrez le nom d'un produit"
          id="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {categoryRadio.map((category) => (
          <li key={category}>
            <input
              type="radio"
              id={category}
              name="categoryRadio"
              checked={category === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={category}>{category}</label>
          </li>
        ))}
        {selectedRadio && (
          <button
            className="stop-selection"
            onClick={() => setSelectedRadio("")}
          >
            Annuler la sélection
          </button>
        )}
      </ul>

      <div>
        {products
          .filter((product) => product.category.includes(selectedRadio))
          .map((product) => (
            <Card
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Content;
