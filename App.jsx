import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar must appear on Product Listing and Cart pages (and it can also appear everywhere) */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <div className="landing-content">
                <h1>Paradise Nursery</h1>
                <p>Your one-stop shop for beautiful houseplants.</p>

                <button className="btn" onClick={() => navigate("/plants")}>
                  Get Started
                </button>
              </div>

              <div className="landing-about">
                <AboutUs />
              </div>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}
