import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCarts = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.btn} onClick={props.onClick}>
      <span className={classes.title}>
        <CartIcon />
      </span>
      <span>{numberOfCarts}</span>
    </button>
  );
};

export default HeaderBtn;
