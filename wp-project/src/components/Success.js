import axios from "axios";
import React from "react";
import { Carousel, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Success() {
  return (
    <div>
      <Col style={{display: "flex", justifyContent: "center", marginTop: "250px"}}>
        <h2>Order placed Successfully!</h2>
      </Col>
    </div>
  );
}
