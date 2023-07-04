import CartContext from "./CartContext";
import { useEffect, useReducer, useState } from "react";
const defaultCartState = {
  items: [],
  count: 0,
};

const cartReducer = (state, action) => {
  let c = state.items.length;
  if (action.type === "add") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      window.alert("item already exist in cart!");
      updatedItems = [...state.items];
      c = Number(updatedItems.length);
    } else {
      updatedItems = [...state.items, action.item];
      c = Number(updatedItems.length);
    }
    return {
      items: updatedItems,
      count: c,
    };
  }
  if (action.type === "remove") {
    let updatedItems = state.items.filter(
      (item) => item.title !== action.title
    );
    c = Number(updatedItems.length);

    return {
      items: updatedItems,
      count: c,
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
  useEffect(() => {
    let getEmail = localStorage.getItem("email");
    const url = `https://crudcrud.com/api/bd027654a10a43cc8589c734f271da98/${getEmail}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.forEach((element) => {
            dispactionCartAction({ type: "add", item: element });
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log();
  const inititalToken = localStorage.getItem("token");
  const [token, setToken] = useState(inititalToken);
  const userIsLoggedIn = !!token;
  const [cartState, dispactionCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispactionCartAction({ type: "add", item: item });
    let getEmail = localStorage.getItem("email");
    fetch(
      `https://crudcrud.com/api/bd027654a10a43cc8589c734f271da98/${getEmail}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          let x = data.findIndex((element) => {
            return item.title === element.title;
          });
          if (data[x]) {
            return;
          } else {
            let crud = localStorage.getItem("email");
            let url = `https://crudcrud.com/api/bd027654a10a43cc8589c734f271da98/${crud}`;
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(item),
            });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const removeItemFromCart = (title) => {
    dispactionCartAction({ type: "remove", title: title });
  };
  const orderItems = () => {
    dispactionCartAction({ type: "order" });
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const cartContext = {
    items: cartState.items,
    token: token,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
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
