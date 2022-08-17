import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const NavBar = ({ cartItem, setCartItem }) => {
  return (
    <div className="navbar">
      <h1>Healthy Life</h1>
      <nav>
        <ul className="navbar__list">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="navbar__li">Accueil</li>
          </NavLink>

          <li className="navbar__li">
            <img
              height="128"
              width="128"
              className="navbar__shoppingCart"
              src="images/shopping-cart.png"
              alt="shopping-cart"
            />
          </li>
        </ul>
      </nav>
      <ShoppingCart cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
};

export default NavBar;
