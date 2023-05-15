import React, { useContext } from "react";
import CartContext from "./context/CartContext";

const ShoppingCart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const deleteItem = (itemToRemove) => {
    setCartItem(
      cartItem.filter((item) => item.product !== itemToRemove.product)
    );
    console.log(itemToRemove);
  };
  return (
    <div className="shoppingCart">
      <ul className="shoppingCart__list">
        {cartItem.map((item, index) => (
          <li key={index} className="shoppingCart__li">
            <div className="shoppingCart__product">
              <p>
                {item.value}x{" "}
                {item.value > 1 ? item.product + "s" : item.product}
              </p>
              <p className="shoppingCart__total">{item.value * item.price} €</p>
            </div>
            <img
              width="32"
              height="32"
              className="shoppingCart__delete"
              src="./images/close.png"
              alt="supprimer produit"
              onClick={() => deleteItem(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
