import "./App.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { useContext, useState } from "react";
import Cart from "./Components/Cart";
//import CartProvider from "./Components/Context/CartProvider";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUS";
import { Route, Switch, NavLink } from "react-router-dom";
import ProductDetails from "./Components/Pages/ProductDetails";
import LogIn from "./Components/LogIn";
import CartContext from "./Components/Context/CartContext";

let itemsCount = 0;
function App() {
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(CartContext);
  itemsCount = ctx.count;
  const tok = localStorage.getItem("token");
  const isLogin = !!tok;
  const cartShow = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink to="/Store">Store</NavLink>
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
                Cart &nbsp;&nbsp;&nbsp;&nbsp;{itemsCount}
              </Button>
            </NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {showCart && <Cart />}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/Store" exact>
            {isLogin && <Store />}
            {!isLogin && <LogIn />}
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
    </>
  );
}

export default App;
