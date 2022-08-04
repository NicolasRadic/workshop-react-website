import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./page/Basket";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/paniers" element={<Basket />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
