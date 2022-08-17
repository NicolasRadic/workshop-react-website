import React, { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";
import data from "../db.json";

const Content = ({ cartItem, setCartItem }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    setProducts(data.product);
  }, [search]);

  const capitalize = (string) =>
    string && string[0].toUpperCase() + string.slice(1);

  return (
    <div className="content">
      <h2>Produits</h2>

      <form>
        <input
          type="text"
          placeholder="Entrez le nom d'un produit"
          id="search-input"
          onChange={(e) => setSearch(capitalize(e.target.value))}
        />
      </form>

      <Category
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
      />

      <div className="content__product">
        {products
          .filter((product) => product.name.includes(search))
          .filter((product) => product.category.includes(selectedRadio))
          .map((product) => (
            <Card
              key={product.id}
              product={product}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          ))}
      </div>
    </div>
  );
};

export default Content;
