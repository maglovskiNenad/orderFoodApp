import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);

  const sumbmitHandler = (event) => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 0 ||
      eneteredAmountNumber > 5
    ) {
      setInputIsValid(false);
      return;
    }
    props.onAddToCart(eneteredAmountNumber);
  };
  return (
    <form onSubmit={sumbmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount:"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!inputIsValid && <p>Please enter valid amount!</p>}
    </form>
  );
};

export default MealForm;
