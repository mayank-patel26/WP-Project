import React from "react";
import {Container,Row,Col } from "react-bootstrap";
export default function NewsLetter() {
  return (
    <div>
      <Container fluid className="bg-primary">
        <Row>
          <Col>
             <h1 className="display-2">NEWSLETTER</h1>
             <p className="lead">Get Time update from your favourite Products</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
