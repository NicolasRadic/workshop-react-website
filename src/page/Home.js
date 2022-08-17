import React, { useState } from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";

const Home = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div>
      <NavBar cartItem={cartItem} setCartItem={setCartItem} />
      <Content cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
};

export default Home;
