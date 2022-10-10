import React, { useContext } from "react";

import MealForm from "./MealForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <React.Fragment>
      <li className={classes.mealItem}>
        <div className={classes.meal}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
        <div className={classes.add}>
          <span className={classes.price}>{price}</span>
          <MealForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
