import "./App.css";

import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Main from "./Components/Layout/Main";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const removeCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onRemoveCartHandler={removeCartHandler} />}
      <Header onShowCartHandler={showCartHandler} />
      <Main />
    </CartProvider>
  );
}

export default App;
