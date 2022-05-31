import axios from "axios";
import React from "react";
import { Carousel, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home(){
  // productAll();
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/4_bec6aa25-0ec4-487f-859e-5c9da524770a.jpg?v=1653470044"
            alt="First slide"
            height="650px"
          />
          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">BOAT PRODUCTS</h3>
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.dailyexcelsior.com/wp-content/uploads/2019/04/chatsrat-1.jpg"
            alt="Second slide"
            height="650px"
          />
          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">SUMMER COLLECTION</h3>
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eshop11.herokuapp.com/assets/img/hero/hero_man.png"
            alt="Third slide"
            height="650px"
          />

          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">WINTER COLLECTION</h3>
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.verywellmind.com/thmb/eig-KS_Og83KnFaE8AQO-1FamN0=/fit-in/992x1352/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-10-19at3.24.03PM-a67c3a1004f94b649d7893c399c7394a.png"
            alt="Fourth slide"
            height="650px"
          />

          <Carousel.Caption>
            <h3 className="display-3 text-danger fw-bold">
              LOUNGEWEAR COLLECTION
            </h3>
            <Button variant="success" type="submit" className="mb-3">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Container fluid className="mt-4">
        <h2 className="display-4 fw-bold py-4">
          Up to 60% off on Deals of Fashion!
        </h2>
        <Row xs={1} sm={2} md={4}>
          <Col xs={1} sm={1} md={2} lg={3} className=" flex-grow-1">
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer"}}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="http://brandingbypixels.com/wp-content/uploads/2017/11/1.-Branding-by-Pixels.png"
              />
              <Card.Body>
                <Card.Title>CLOTHING</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/61dd64df1ee510cd7bc62e37_amy-shamblen-xwM61TPMlYk-unsplash1_674531c2e05e68084453311b2c988150_2000.jpeg"
              />
              <Card.Body>
                <Card.Title>BEAUTY</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="https://cdn-afllh.nitrocdn.com/PwKttzWmqrxeptmNTeKNfywizeaFnrcW/assets/static/optimized/rev-1aacf3c/app/uploads/2020/08/Shoes-concept.jpg"
              />
              <Card.Body>
                <Card.Title>FOOTWEAR</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="https://images.squarespace-cdn.com/content/v1/5725225ac2ea51b309f30d81/1552593550622-R01AT0KUXZ65BT37IM0A/IMG_1165.jpg?format=1000w"
              />
              <Card.Body>
                <Card.Title>FASHION JWELLERY</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4">
        <h2 className="display-4 fw-bold py-5">
          Shop Trending Headphones & speakers
        </h2>
        <Row xs={1} sm={2} md={4}>
          <Col xs={1} sm={2} md={2} lg={3} className="flex-grow-1">
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer"}}
              className="m-2"
            >
              <Card.Img
                style = {{marginTop: "20px"}}
                variant="top"
                height={180}
                width={180}
                src="https://rukminim1.flixcart.com/image/416/416/k6l2vm80/headphone/v/v/z/yora-bluetooth-headset-with-mic-and-volume-button-earphone-original-imaf7p2fqnaspqnt.jpeg?q=70"
              />
              <Card.Body>
                <Card.Title>BLUETOOTH EARPHONES</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={200}
                width={200}
                src="https://cdn.moglix.com/p/qj9NJjJZKbuU9.jpg"
              />
              <Card.Body>
                <Card.Title>TWS</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="https://img.global.news.samsung.com/in/wp-content/uploads/2018/02/JBL-BoomBox.jpg"
              />
              <Card.Body>
                <Card.Title>BLUETOOTH SPEAKERS</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={200}
                width={200}
                src="https://static.toiimg.com/thumb/msid-88296554,imgsize-13306,width-400,resizemode-4/88296554.jpg"
              />
              <Card.Body>
                <Card.Title>SOUND BARS</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4">
        <h2 className="display-4 fw-bold py-5">For Your Baby Needs</h2>
        <Row xs={1} sm={2} md={4}>
          <Col xs={1} sm={2} md={2} lg={3} className="flex-grow-1">
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={200}
                width={200}
                src="https://blog.talkcharge.com/wp-content/uploads/2020/04/Best-Baby-Skin-Care-Products-in-India.jpg"
              />
              <Card.Body>
                <Card.Title>BATH & SKIN CARE</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={200}
                width={200}
                src="https://cdn.shopify.com/s/files/1/0273/8870/6895/products/product-image-538116410_1024x1024@2x.jpg?v=1583322671"
              />
              <Card.Body>
                <Card.Title>BABY TRAVEL</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={250}
                width={250}
                src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/thumbnail/lead/news/2654153_Baby%20eCommerce%20Sites%202021.jpg"
              />
              <Card.Body>
                <Card.Title>BABY ESSENTIALS</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", height: "20rem", cursor: "pointer" }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                height={200}
                width={200}
                src="https://cdn.shopify.com/s/files/1/0273/8870/6895/products/product-image-707508893_1024x1024@2x.jpg?v=1583323108"
              />
              <Card.Body>
                <Card.Title>HIGH CHAIRS</Card.Title>
                <Button variant="primary">SHOP NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className=" bg-dark mt-5 text-start text-white"
        variant="dark"
      >
        <Row>
          {/* <p className="text-center">GET CONNECTED WITH US ON SOCIAL MEDIA</p> */}
          <div className="text-center" style={{margin: "20px"}}>
            <a href="" style={{margin: "10px"}}>
              <FaFacebook />
            </a>
            <a href="" style={{margin: "10px"}}>
              <FaTwitter />
            </a>
            <a href="" style={{margin: "10px"}}>
              <FaLinkedin />
            </a>
            <a href="" style={{margin: "10px"}}>
              <FaYoutube />
            </a>
          </div>
          <Col sm={4}>
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem alias deleniti magnam quibusdam temporibus.
            </p>
          </Col>
          <Col sm={4} variant="dark">
            <h2>NAVIGATION</h2>

            <a href="">HOME</a>
            <br />
            <a href="">PRODUCTS</a>
            <br />
            <a href="">CART</a>
            <br />
            <a href="">NEWSLETTER</a>
            <br />
          </Col>
          <Col sm={4}>
            <h2>ADDRESS</h2>
            <p>INDIA</p>
            <p>MUMBAI</p>
            <p>9892431516/9892147336</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


