import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
 
  const totalAmount = `$${cartCtx.amount.toFixed(2)}`;
  const HasItemCart = cartCtx.items.length > 0;
  const removeItemHandler = (id) => {
    cartCtx.removeFromCart(id);
  };
  const addItemHandler = (item) => {
    cartCtx.addToCart(item);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          amount={meal.amount}
          price={meal.price}
          onRemove={removeItemHandler.bind(null, meal.id)}
          onAdd={addItemHandler.bind(null, meal)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          close
        </button>
        {HasItemCart && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
