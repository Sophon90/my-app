import React from "react";
import "./FoodList.css";

function FoodList() {
  const foodItems = [
    { id: 1, name: "Food Item 1", image: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png" },
    { id: 2, name: "Food Item 2", image: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-2.png" },
    { id: 3, name: "Food Item 3", image: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-3.png" },
    { id: 4, name: "Food Item 4", image: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-4.png" },
  ];

  return (
    <div className="food-list">
      {foodItems.map((item) => (
        <div key={item.id} className="food-card">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
