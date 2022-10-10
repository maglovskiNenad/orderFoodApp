import React from "react";

import classes from "./Header.module.css";
import HeaderBtn from "./HeaderBtn";
import HeaderImg from "./HeaderImg";

const Header = (props) => {
  return (
    <header>
      <nav className={classes.navBar}>
        <ul>
          <li>
            <span className={classes.title}>My Food</span>
          </li>
          <li>
            <HeaderBtn onClick={props.onShowCartHandler} />
          </li>
        </ul>
      </nav>
      <HeaderImg className={classes.image} />
    </header>
  );
};

export default Header;
