import "./App.css";
import { Button, Container, Navbar } from "react-bootstrap";
//import Counter from "./Components/Counter";
import { useState } from "react";
import Cart from "./Components/Cart";
import CartProvider from "./Components/Context/CartProvider";
//import CartContext from "./Components/Context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/About", element: <About /> },
  { path: "/Home", element: <Home /> },
]);
function App() {
  //const ctx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  //  let count = ctx.count;
  const cartShow = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  return (
    <>
      <CartProvider>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
            <Navbar.Brand href="/">Store</Navbar.Brand>
            <Navbar.Brand href="/About">About</Navbar.Brand>
            <Navbar.Brand href="/">
              <Button variant="light" onClick={cartShow}>
                Cart
              </Button>
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
