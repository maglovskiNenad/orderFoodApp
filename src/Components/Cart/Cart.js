import React, { useContext } from "react";

import CartItems from "./CartItems";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes.list}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItems
            className={classes.items}
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onRemoveCartHandler}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveCartHandler}>Close</button>
        {hasItem && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
