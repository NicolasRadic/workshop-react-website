import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Healthy Life</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/paniers"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Panier</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
