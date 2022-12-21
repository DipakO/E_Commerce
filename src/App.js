import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ProductDetails from "./components/ProdectDetails/ProductDetails";
import Payment from "./components/Payment/Payment";
import Cart from "./components/Cart/Cart";
import Card from "./pages/Card";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Payment/:Price" element={<Payment />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
