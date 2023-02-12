import React, { useState } from "react";
import Header from "./components/Headers/Header";
import MealsSummury from "./components/Layouts/MealsSummury";
import MealsItem from "./components/Layouts/MealsItem";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [clickButton, setClickButton] = useState(false);

  const OpenCart = () => {
    setClickButton(true)
  }

  const CloseCart = () => {
    setClickButton(false)
  }
  return (
    <CartProvider>
      {clickButton && <Cart OnClose={CloseCart} />}
      <Header OnOpen={OpenCart} />
      <main>
        <MealsSummury />
        <MealsItem />
      </main>

    </CartProvider>
  );
}

export default App;
