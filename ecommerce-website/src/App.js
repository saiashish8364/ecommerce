import "./App.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { useState } from "react";
import Cart from "./Components/Cart";
import CartProvider from "./Components/Context/CartProvider";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUS";
import { Route, Switch, NavLink } from "react-router-dom";
import ProductDetails from "./Components/Pages/ProductDetails";
import LogIn from "./Components/LogIn";

function App() {
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
            <Navbar.Brand>
              <NavLink to="/Home">Home</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/">Store</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/About">About</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/ContactUs">Contact Us</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/LogIn">LogIn</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/">
                <Button variant="light" onClick={cartShow}>
                  Cart
                </Button>
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>
        {showCart && <Cart />}
        <main>
          <Switch>
            <Route path="/Home" exact>
              <Home></Home>
            </Route>
            <Route path="/" exact>
              <Store />
            </Route>
            <Route path="/About" exact>
              <About />
            </Route>
            <Route path="/ContactUs" exact>
              <ContactUs />
            </Route>
            <Route path="/LogIn" exact>
              <LogIn />
            </Route>
            <Route path="/:productTitle" exact>
              <ProductDetails />
            </Route>
          </Switch>
        </main>
      </CartProvider>
    </>
  );
}

export default App;
