import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Cart() {
  return (
    <Container fluid>
      <h2 className="display-4 fw-bold py-1">Cart</h2>
      <Row xs={1} sm={2} md={4}>
        <Col xs={1} sm={3} md={2} lg={3} className=" flex-grow-1">
          <Card
            style={{ width: "50rem", height: "22rem", cursor: "pointer", border:"0"}}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={250}
              width={350}
              src="http://brandingbypixels.com/wp-content/uploads/2017/11/1.-Branding-by-Pixels.png"
            />
            <Card.Body>
              <Card.Title>CLOTHING</Card.Title>
              <Button variant="dark" className="m-2">
                +
              </Button>
              <Button variant="dark">-</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "50rem", height: "22rem", cursor: "pointer" , border:"0"}}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={250}
              width={250}
              src="https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/61dd64df1ee510cd7bc62e37_amy-shamblen-xwM61TPMlYk-unsplash1_674531c2e05e68084453311b2c988150_2000.jpeg"
            />
            <Card.Body>
              <Card.Title>COSMETICS</Card.Title>
              <Button variant="dark" className="m-2">
                +
              </Button>
              <Button variant="dark">-</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "50rem", height: "22rem", cursor: "pointer", border:"0" }}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={350}
              width={350}
              src="https://cdn-afllh.nitrocdn.com/PwKttzWmqrxeptmNTeKNfywizeaFnrcW/assets/static/optimized/rev-1aacf3c/app/uploads/2020/08/Shoes-concept.jpg"
            />
            <Card.Body>
              <Card.Title>FOOTWEAR</Card.Title>
              <Button variant="dark" className="m-2">
                +
              </Button>
              <Button variant="dark">-</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1} sm={3} md={2} lg={3}>
          <Card style={{ width: "20rem",height:"70rem"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
