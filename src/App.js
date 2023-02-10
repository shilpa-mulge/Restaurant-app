import React from "react";
import Header from "./components/Headers/Header";
import MealsSummury from "./components/Layouts/MealsSummury";
import MealsItem from "./components/Layouts/MealsItem";
function App() {

  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsSummury />
        <MealsItem />
      </main>

    </React.Fragment>
  );
}

export default App;
