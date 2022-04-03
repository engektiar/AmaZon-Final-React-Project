import React from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";
import Data from "../../JeasonData/products.json";
import "./Cart.css";

const Cart = (props) => {
  return (
    <Container>
      <Row>
        {Data.map((item) => (
          <Col md={3}>
            <div className="cardmy">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="pro-img" variant="top" src={item.img} />
                <Card.Body className="pro-body">
                  <Card.Title>{item.name}</Card.Title>

                  <Card.Text>Some quick example text to build on the card title and make up the bulk of .</Card.Text>
                  <h5>${item.price}</h5>
                  <Button onClick={props.dataUpdat} variant="primary">
                    Add to Card
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
