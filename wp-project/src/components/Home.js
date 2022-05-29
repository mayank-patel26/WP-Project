import React from "react";
import { Carousel,Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.dailyexcelsior.com/wp-content/uploads/2019/04/chatsrat-1.jpg"
            alt="First slide"
            height="650px"
          />
          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">SUMMER COLLECTION</h3>
            {/* <p className="lead text-dark fw-bold">
              Don't Compromise on style! Get Flat 30% off for new Arrivals
            </p> */}
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eshop11.herokuapp.com/assets/img/hero/hero_man.png"
            alt="Second slide"
            height="650px"
          />

          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">WINTER COLLECTION</h3>
            {/* <p className="lead text-dark fw-bold">
              Don't Compromise on style! Get Flat 30% off for new Arrivals
            </p> */}
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.verywellmind.com/thmb/eig-KS_Og83KnFaE8AQO-1FamN0=/fit-in/992x1352/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-10-19at3.24.03PM-a67c3a1004f94b649d7893c399c7394a.png"
            alt="Third slide"
            height="650px"
          />

          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">
              LOUNGEWEAR COLLECTION
            </h3>
            {/* <p className="lead text-dark fw-bold">
              Don't Compromise on style! Get Flat 30% off for new Arrivals
            </p> */}
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
