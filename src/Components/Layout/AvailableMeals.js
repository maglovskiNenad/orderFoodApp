import React from "react";

import classes from "./AvailableMeals.module.css";
import MealItem from "./Meals/MealItem";

let DUMMY_MENU = [
  {
    id: "m1",
    name: "Club Sandwich",
    price: 19.5,
    description: "Chicken,bacon,cheese,avocado,egg & lettuce served with chips",
  },
  {
    id: "m2",
    name: "Baked Potato",
    price: 19.0,
    description: "BBQ puller pork,sour cream,creamy slaw & spring onions",
  },
  {
    id: "m3",
    name: "Parmi & Pot",
    price: 17.0,
    description: "Chicken Parmi with chips.Available Weekdays Only",
  },
  {
    id: "m4",
    name: "Sizzling Butter Curry",
    price: 27.5,
    description:
      "Traditiona butter chicken curry served on a hot sizzle plate with a side of stremed jasmine rice & grilled roti bread",
  },
  {
    id: "m5",
    name: "Garlic Prawns",
    price: 27.0,
    description: "Served on steamed Jasmine rice and salad",
  },
  {
    id: "m6",
    name: "Seafood Linguini",
    price: 27.0,
    description:
      "Mussels,prawn scallops & squid tossed throught a light garlick & oil base with fresh cherry tomaten",
  },
];

const AvailableMeals = () => {
  const mealsOffer = DUMMY_MENU.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      description={meal.description}
      price={meal.price}
      name={meal.name}
    />
  ));

  return <ul className={classes.listOfMeals}>{mealsOffer}</ul>;
};

export default AvailableMeals;
