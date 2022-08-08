import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const submitAddHandller = (e) => {
    e.preventDefault();
    const amount = inputAmountRef.current.value;
   
    if (amount > 5 || amount < 1 || amount === 0) {
      
      return;
    }
    props.onAddToCart(+amount);
  };

  return (
    <form onSubmit={submitAddHandller} className={classes.form}>
      <Input
        ref={inputAmountRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};
export default MealItemForm;
