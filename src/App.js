import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Order from "./components/Order/Order";
import Users from "./components/Users/Users";
import Product from "./components/Products/Product";
import MainDash from "./DashBordComponents/MainDash/MainDash"
import SideBar from "./DashBordComponents/SideBar/SideBar";



function App() {
  return (
    <>
    <div className="App">
    <div className="AppGlass">
      <SideBar/>
      <MainDash/>
     
    </div>
    </div>
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
