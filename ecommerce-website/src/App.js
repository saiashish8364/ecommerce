import "./App.css";
import { Container, Navbar } from "react-bootstrap";
//import Counter from "./Components/Counter";
import { useContext, useState } from "react";
import Cart from "./Components/Cart";
import CartProvider from "./Components/Context/CartProvider";
import CartContext from "./Components/Context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/About", element: <About /> },
]);
function App() {
  const ctx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  let count = ctx.count;
  console.log(count);
  const cartShow = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  return (
    <>
      <CartProvider>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand href="/">Store</Navbar.Brand>
            <Navbar.Brand href="/About">About</Navbar.Brand>
            <Navbar.Brand href="/">
              <button onClick={cartShow}>Cart</button>
            </Navbar.Brand>
          </Container>
        </Navbar>
        {showCart && <Cart />}
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
