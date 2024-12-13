import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FoodList from "./components/FoodList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FoodList />
    </div>
  );
}

export default App;
