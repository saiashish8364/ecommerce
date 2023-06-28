import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "./Context/CartContext";
import { Link } from "react-router-dom";
let Counter = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const ctx = useContext(CartContext);
  const addToCart = (event) => {
    const aIndex = productsArr.findIndex(
      (item) => item.title === event.target.id
    );
    let add = productsArr[aIndex];
    ctx.addItem({ ...add, quantity: 1 });
  };
  return (
    <>
      <section
        style={{
          display: "grid",

          padding: "25px",
        }}
      >
        <Container className="mt-6">
          <Row>
            <Col xs={5}>
              {productsArr.map((product) => {
                return (
                  <Card
                    style={{ width: "175%" }}
                    className="shadow-lg"
                    key={Math.random()}
                  >
                    <Card.Body>
                      <p>{product.title}</p>
                      <Link to={`/${product.title}`}>
                        <img
                          style={{ width: "75%", height: "75%" }}
                          src={product.imageUrl}
                          alt="ImageHere"
                        />
                      </Link>
                      <p>{product.price}</p>
                      <Button
                        id={product.title}
                        variant="primary"
                        className="m-1"
                        onClick={addToCart}
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Counter;
