import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modal1(porps) {
  let price = 0;
  const [items, setItems] = useState(porps.products);
  const cartItemRemove = (e) => {
    setItems(items.filter((item) => item.title !== e.target.id));
  };
  useEffect(() => {}, [items]);
  items.forEach((element) => {
    price = price + Number(element.price) * Number(element.quantity);
  });
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <Table striped hover>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => {
                return (
                  <tr key={Math.random()}>
                    <td>
                      <img
                        src={product.imageUrl}
                        alt="ImageHere"
                        style={{ width: "50%", height: "50%", display: "flex" }}
                      />
                      <p>{product.title}</p>
                    </td>
                    <td>
                      <p style={{ mt: "25px" }}>{product.price}</p>
                    </td>
                    <td>
                      <input type="number" style={{ width: "40px" }} />
                      <Button
                        variant="danger"
                        id={product.title}
                        onClick={cartItemRemove}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <h5>
          <Modal.Footer>
            Total:{" "}
            <p>
              {"   "}Rs.{price}
            </p>
          </Modal.Footer>
        </h5>
      </Modal.Dialog>
    </div>
  );
}

export default Modal1;
