import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Cart() {
  return (
    <Container fluid >
      <h2 className="display-4 fw-bold py-1">Cart</h2>
      <Row xs={2} sm={2} md={4}>
        <Col xs={1} sm={1} md={2} lg={1} className=" flex-grow-1">
          <Card
            style={{
              width: "50%",
              height: "50rem",
              cursor: "pointer",
              border: "0",
            }}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={250}
              width={250}
              src="http://brandingbypixels.com/wp-content/uploads/2017/11/1.-Branding-by-Pixels.png"
              style={{ display: "inline" }}
            />
            <Card.Text className="text-start">
              <h2>CART</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nostrum nihil necessitatibus enim ab aut, magnam ratione illo adipisci totam.</p>
            </Card.Text>
            <Card.Body>
              <div className="d-flex">
                <Button variant="dark" className="fw-bold mx-2">
                  +
                </Button>
                <Button variant="dark" className="fw-bold mx-2">-</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "50%",
              height: "50rem",
              cursor: "pointer",
              border: "0",
            }}
            className="m-1"
          >
            <Card.Img
              variant="top"
              height={250}
              width={250}
              src="https://www.dailyexcelsior.com/wp-content/uploads/2019/04/chatsrat-1.jpg"
              style={{ display: "inline" }}
            />
            <Card.Text className="text-start">
              <h2>CART</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nostrum nihil necessitatibus enim ab aut, magnam ratione illo adipisci totam.</p>
            </Card.Text>
            <Card.Body>
              <div className="d-flex">
                <Button variant="dark" className="fw-bold m-2">
                  +
                </Button>
                <Button variant="dark" className="fw-bold m-2">-</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "50%",
              height: "50rem",
              cursor: "pointer",
              border: "0",
            }}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={250}
              width={250}
              src="https://eshop11.herokuapp.com/assets/img/hero/hero_man.png"
              style={{ display: "inline" }}
            />
            <Card.Text className="text-start">
              <h2>CART</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nostrum nihil necessitatibus enim ab aut, magnam ratione illo adipisci totam.</p>
            </Card.Text>
            <Card.Body>
              <div className="d-flex">
                <Button variant="dark" className="fw-bold mx-2">
                  +
                </Button>
                <Button variant="dark" className="fw-bold mx-2">-</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
