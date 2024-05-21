import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeComponents from "./Routes/HomeComponents";
import ProductsComponent from "./Routes/ProductsComponent";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import LoginComponent from "./Routes/LoginComponent";
import SingleComponent from "./Routes/SingleComponent";
import ErrorComponent from "./Routes/ErrorComponent";
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/home" element={<HomeComponents />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="products/:id" element={<SingleComponent />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<ErrorComponent/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
