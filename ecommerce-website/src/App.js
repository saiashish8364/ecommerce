import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import Counter from "./Components/Counter";
import { useContext, useState } from "react";
import Cart from "./Components/Cart";
import CartProvider from "./Components/Context/CartProvider";
import CartContext from "./Components/Context/CartContext";

function App() {
  const ctx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const cartShow = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  return (
    <>
      <CartProvider>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
            <Navbar.Brand href="/">
              <button onClick={cartShow}>Cart{ctx.count}</button>
            </Navbar.Brand>
          </Container>
        </Navbar>
        {showCart && <Cart />}
        <Counter />
      </CartProvider>
    </>
  );
}

export default App;
