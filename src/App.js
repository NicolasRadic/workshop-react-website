import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./page/Basket";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/paniers" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
