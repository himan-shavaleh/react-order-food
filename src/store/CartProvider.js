import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartSate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    console.log(1243);
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartSate;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartSate,
  );
  const addToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
