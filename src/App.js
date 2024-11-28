import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartSection from "./components/CartSection"; // Import CartSection
import CheckoutSection from "./components/CheckoutSection"; // Import CheckoutSection

import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <CartSection />
      <CheckoutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;