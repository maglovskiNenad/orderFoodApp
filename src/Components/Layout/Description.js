import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.text}>
      <h1>Order your Food</h1>
      <p>In our restaurant you can order the best quality food for you.</p>
      <p>
        Below this text you can see the food that is currently available in our
        restaurant. Choose carefully so that we can deliver it to you more
        carefully.
      </p>
    </div>
  );
};

export default Description;
