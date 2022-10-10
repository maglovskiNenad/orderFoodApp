import MealsImg from "../../Assets/meals.jpg";

import classes from "./HeaderImage.module.css";

const HeaderImg = (props) => {
  return (
    <img className={classes.image} src={MealsImg} alt="Full tabel of meals" />
  );
};

export default HeaderImg;
