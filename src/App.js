import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import GlobalState from "./Context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </GlobalState>
  );
}

export default App;
