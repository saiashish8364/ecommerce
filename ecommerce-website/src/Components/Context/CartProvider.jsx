import CartContext from "./CartContext";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  count: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "add") {
    let updatedItems;
    const existingCartItemIndex = state.items.filter(
      (item) => item.title === action.item.title
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      return;
    } else {
      updatedItems = [...state.items, action.item];
      state.count = Number(updatedItems.length);
    }
    return {
      items: updatedItems,
      count: state.count,
    };
  }
  if (action.type === "remove") {
    let updatedItems = state.items.filter(
      (item) => item.title !== action.title
    );
    state.count = Number(updatedItems.length);
    return {
      items: updatedItems,
      count: state.count,
    };
  }
  if (action.type === "order") {
    return {
      items: [],
      count: 0,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispactionCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispactionCartAction({ type: "add", item: item });
  };
  const removeItemFromCart = (title) => {
    dispactionCartAction({ type: "remove", title: title });
  };
  const orderItems = () => {
    dispactionCartAction({ type: "order" });
  };
  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    order: orderItems,
    count: cartState.count,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
