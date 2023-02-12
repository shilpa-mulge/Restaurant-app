import React from "react";
import Header from "./components/Headers/Header";
import MealsSummury from "./components/Layouts/MealsSummury";
import MealsItem from "./components/Layouts/MealsItem";
import Cart from "./components/Cart/Cart";
function App() {

  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <MealsSummury />
        <MealsItem />
      </main>

    </React.Fragment>
  );
}

export default App;
