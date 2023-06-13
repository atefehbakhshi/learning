import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
