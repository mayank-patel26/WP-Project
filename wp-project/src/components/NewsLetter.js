import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function NewsLetter() {
  return (
    <div>
      <Container fluid className="bg-info">
        <Row>
          <Col>
            <h1 className="display-2 fw-bold">NEWSLETTER</h1>
            <p className="lead fw-bold">Get Time update from your favourite Products</p>
            <Form>
              <Form.Group className="mb-5" controlId="formBasicName">
                <Form.Label className="text-start fw-bold">Full Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your full name"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicAge">
                <Form.Label className="text-start fw-bold">Age:</Form.Label>
                <Form.Control
                  type="age"
                  placeholder="Enter your age"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="text-start fw-bold">Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicContact">
                <Form.Label className="text-start fw-bold">Contact Number:</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Enter your phone number"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mb-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
