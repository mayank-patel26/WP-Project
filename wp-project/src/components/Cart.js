import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Cart() {
  return (
    <Container fluid className="mt-4">
      <h2 className="display-4 fw-bold py-4">Cart</h2>
      <Row xs={1} sm={2} md={4}>
        <Col xs={1} sm={1} md={2} lg={2} className=" flex-grow-1">
          <Card
            style={{ width: "30%", height: "20rem", cursor: "pointer", border: "0" }}
            className="m-2"
          >
            <Card.Img
              variant="top"
              height={250}
              width={50}
              src="http://brandingbypixels.com/wp-content/uploads/2017/11/1.-Branding-by-Pixels.png"
              style={{display: "inline"}}
            />   
            <Card.Body>
              <div className = "d-flex">
                <Button variant="light" className="fw-5">+</Button>
                <Button variant="light">-</Button>
              </div>
            </Card.Body>
       
        
        
          
          
          
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
