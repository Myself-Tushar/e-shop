import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartSection from "./components/CartSection";
import CheckoutSection from "./components/CheckoutSection";
import Login from "./components/Login"; // Import Login component
import Register from "./components/Register"; // Import Register component

// Import styles
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is visible on all pages */}
        <Navbar />
        
        {/* Routes for navigation */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedProducts />
                <Categories />
                <CartSection />
                <CheckoutSection />
                <Testimonials />
                <Newsletter />
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer is visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;