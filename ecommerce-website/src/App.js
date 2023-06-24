import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import Counter from "./Components/Counter";
import { useState } from "react";
import Cart from "./Components/Cart";
function App() {
  const [showCart, setShowCart] = useState(false);
  const cartShow = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
          <Navbar.Brand href="/">
            <button onClick={cartShow}>Cart</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {showCart && <Cart />}
      <Counter />
    </>
  );
}

export default App;
