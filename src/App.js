import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./page/Basket";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import { useState } from "react";
import CartContext from "./components/context/CartContext";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/paniers" element={<Basket />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
