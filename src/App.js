import { useState } from "react";
import CartProvider from "./store/CartProvider";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShownm, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
    <div className="App">
      {cartIsShownm && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
    </CartProvider>
  );
}

export default App;
