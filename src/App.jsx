import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import MyNavbar from "./components/MyNavbar";
import { CartProvider } from "./context/CartContext"; // CartProvider əlavə edildi

function App() {
  return (
    <CartProvider> 
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
