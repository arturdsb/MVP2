import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export default function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/produtos"
        element={<Products />}
      />

      <Route 
        path="/product_details/:id"
        element={<ProductDetails />}
      />
      

    </Routes>
  );
}

