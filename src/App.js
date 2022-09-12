import React, { useState } from "react";
import data from "./Data";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Section from "./Section";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => item.id !== cartItem.id));
  };

  return (
    <div>
      <Navigation cartCount={cart.length} />
      <Header />
      <Section
        handleAddtoCart={handleAddtoCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cartDetails={cart}
      />
      <Footer />
    </div>
  );
}
