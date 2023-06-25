import React from "react";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  order: () => {},
  count: 0,
});
export default CartContext;
