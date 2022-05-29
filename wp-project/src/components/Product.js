import React from "react";
import { Tab, Nav, Col, Container, Row ,Card,Button} from "react-bootstrap";
import watch from '../imgs/watch.jpg'
const b = ["Boat", "JBL", "Skull Candy", "Leaf", "Noise"];
const productList = [];


export default function Product() {
  return (
    <Container fluid>
      <Row sm={1} md={2}>
        <Options />
        <ProductListView products={productList} />
      </Row>
    </Container>
  );
}

const Options = () => {
  return (
    <Col md={3} className="bg-light sticky py-3" style={{ height: "100vh" }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="priceRange">
        <Row>
          <Col md={4}>
            <Nav variant="pills" className="flex-column c">
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey="priceRange">Price</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey="brands">Brands</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey="ratings">Ratings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={8}>
            <Tab.Content>
              <Tab.Pane eventKey="priceRange">
                {/* <Sonnet /> */}
                <PriceOpt />
              </Tab.Pane>
              <Tab.Pane eventKey="brands">
                <BrandOptions brands={b} />
                {/* <Sonnet /> */}
              </Tab.Pane>
              <Tab.Pane eventKey="ratings">
                {/* <Sonnet /> */}
                <RatingOptions />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Col>
  );
};

const PriceOpt = () => (
  <div className="d-flex flex-column justify-content-start">
    <label htmlFor="start">Start</label>
    <input id="start" type="number" className="outline-primary m-1 p-1" />
    <br />
    <label htmlFor="start">End</label>
    <input id="start" type="number" className="outline-primary m-1 p-1" />
    <hr />
    <h4>Price range</h4>
    <div className="m-2">
      <input
        type="checkbox"
        id="LT1000"
        name="LT1000"
        value="LT1000"
        className="mx-3"
      />
      <label htmlFor="LT1000">upto 1000</label>
    </div>
    <div className="m-2">
      <input
        type="checkbox"
        id="LT5000"
        name="LT5000"
        value="LT5000"
        className="mx-3"
      />
      <label htmlFor="LT5000">1000-5000</label>
    </div>
    <div className="m-2">
      <input
        type="checkbox"
        id="GT5000"
        name="GT5000"
        value="GT5000"
        className="mx-3"
      />
      <label htmlFor="GT5000">5000+</label>
    </div>
  </div>
);

const BrandOptions = (props) => (
  <div className="d-flex flex-column justify-content-start">
    {props.brands.map((item, key) => (
      <div key={key} className="m-2 d-flex flex-row justify-content-start">
        <input
          type="checkbox"
          id={`${item}${key}`}
          name={item}
          value={item}
          className="mx-3 my-2"
        />
        <label htmlFor={`${item}${key}`}>{item}</label>
      </div>
    ))}
  </div>
);

const RatingOptions = () => {
  const x = ["4-5", "3-4", "2-3", "1-2", "Less than 1"];
  return (
    <div className="d-flex flex-column justify-content-start">
      {x.map((item, key) => (
        <div key={key} className="m-2 d-flex flex-row justify-content-start ">
          <input
            type="checkbox"
            id={`${item}${key}`}
            name={item}
            value={item}
            className="mx-3 my-2"
          />
          <label htmlFor={`${item}${key}`}>{item}</label>
        </div>
      ))}
    </div>
  );
};

const ProductListView = (props) => {
  return (
    <Col sm={1} md={5} className="flex-grow-1">
      <Row xs={1} sm={2} md={2} lg={3}>
        <Col >
          <Card style={{ width: '18rem' ,height:'25rem',cursor :'pointer'}} className='m-2'>
            <Card.Img variant="top" height={250}  width={250} src={watch} />
            <Card.Body>
              <Card.Title>Watch Name</Card.Title>
              <Card.Subtitle>Rs 4000</Card.Subtitle>
              <Card.Text
              className="text-truncate"
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus itaque laudantium ex reiciendis, assumenda enim molestias iure adipisci dolor mollitia architecto doloremque odit vero ipsa accusamus reprehenderit optio tempore, quas neque ipsam? Ducimus hic provident, veritatis nesciunt minima dolore amet ipsa pariatur illo iusto eveniet fuga ullam tenetur repudiandae consequatur quos inventore accusantium quae consequuntur, incidunt error assumenda reprehenderit. Aliquam et sint ab voluptatem, ut consequatur facere illum sunt voluptates nemo placeat magni repellat ipsum velit cupiditate eveniet distinctio, omnis a accusantium nam laborum! Aliquid vel distinctio facere, dignissimos dolorem accusamus minima at ea inventore, quas officia quia nesciunt!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     
      
      </Row>
    </Col>
  );
};
