import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Order from "./components/Order/Order";
import Users from "./components/Users/Users";
import Product from "./components/Products/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/order" element={<Order />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
