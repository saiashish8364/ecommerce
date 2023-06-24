import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={5}>
            {productsArr.map((product) => {
              return (
                <Card className="shadow-lg" key={Math.random()}>
                  <Card.Body>
                    <p>{product.title}</p>
                    <img src={product.imageUrl} alt="ImageHere" />
                    <p>{product.price}</p>
                    <Button variant="primary" className="m-1">
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Counter;
