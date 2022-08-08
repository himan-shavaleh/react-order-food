import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
  
    cartCtx.addToCart({
      amount: amount,
      price: props.price,
      id: props.id,
      name: props.name,
    });
  };
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
