import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
const HeaderCartButton = (props) => {
  const [buttonIsHilighted, setButtonIsHilighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((totalNum, item) => {
    return (totalNum += item.amount);
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsHilighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonIsHilighted(true);
    const timer = setTimeout(() => {
      setButtonIsHilighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>View Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
