import React, { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";
import data from "../db.json";

const Content = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    setProducts(data.product);
    // To use with json server
    // axios
    //   .get(`http://localhost:3001/product?q=${search}`)
    //   .then((res) => setProducts(res.data));
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

      <Category
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
      />

      <div className="product">
        {products
          .filter((product) => product.name.includes(search))
          .filter((product) => product.category.includes(selectedRadio))
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Content;
