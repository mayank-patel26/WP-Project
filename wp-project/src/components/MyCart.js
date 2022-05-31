import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import Cart from "../api/cart";
import axios from "axios";
import { getAllProducts } from "../api/serverApi";

const productAll = async (fun, ids) => {
  let url = getAllProducts();
  try {
    let data = await axios.get(url);
    let finalData = data["data"]["products"];
    finalData = finalData.filter((i) => ids.includes(i._id));

    fun(finalData);

    // productList=data['data']['products'];
    console.log(finalData);
  } catch (e) {
    console.log(e);
  }
  // let jsonData = await data.text();
};
export default function MyCart() {
  let list = Cart.getIdList();
  const [ItemList, setItemList] = useState([]);
  let totalPrice =0;
  for (var i = 0; i < ItemList.length; i++) {
    totalPrice+=ItemList[i].price;
    //Do something
}
  useEffect(() => {
    productAll(setItemList, list);
  }, []);
  console.log(list);
  return (
    <Container>
      <col style={{display: "flex", justifyContent: "center", margin: "20px"}}></col>
      <h1>Cart</h1>
      {ItemList.map((item, key) => (
        <CartItem item={item} key={key} />
      ))}

      <h2 className="mt-5 text-center">Subtotal</h2>
      <h4>Rs. {totalPrice}</h4>
    </Container>
    // <Container fluid>
    //   <div style={{ marginTop: "40px", marginBottom: "40px" }}></div>
    //   <h2 className="display-4 fw-bold py-1 my-5">Cart</h2>
    //   <Row
    //     xs={1}
    //     sm={2}
    //     md={3}
    //     style={{ display: "flex", justifyContent: "center" }}
    //   >
    //     <Col xs={1} sm={3} md={2} lg={3}>
    //       <Card
    //         style={{
    //           width: "18rem",
    //           height: "22rem",
    //           cursor: "pointer",
    //           border: "0",
    //         }}
    //         className="m-2"
    //       >
    //         <Card.Img
    //           variant="top"
    //           height={250}
    //           width={350}
    //           src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/4_bec6aa25-0ec4-487f-859e-5c9da524770a.jpg?v=1653470044"
    //         />
    //         <Card.Body>
    //           <Card.Title>CLOTHING</Card.Title>
    //           <Button variant="dark" className="m-2">
    //             +
    //           </Button>
    //           <Button variant="dark">-</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col xs={1} sm={3} md={2} lg={3}>
    //       <Card
    //         style={{
    //           width: "18rem",
    //           height: "22rem",
    //           cursor: "pointer",
    //           border: "0",
    //         }}
    //         className="m-2"
    //       >
    //         <Card.Img
    //           variant="top"
    //           height={250}
    //           width={250}
    //           src="https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/61dd64df1ee510cd7bc62e37_amy-shamblen-xwM61TPMlYk-unsplash1_674531c2e05e68084453311b2c988150_2000.jpeg"
    //         />
    //         <Card.Body>
    //           <Card.Title>COSMETICS</Card.Title>
    //           <Button variant="dark" className="m-2">
    //             +
    //           </Button>
    //           <Button variant="dark">-</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col xs={1} sm={3} md={2} lg={3}>
    //       <Card
    //         style={{
    //           width: "18rem",
    //           height: "22rem",
    //           cursor: "pointer",
    //           border: "0",
    //         }}
    //         className="m-2"
    //       >
    //         <Card.Img
    //           variant="top"
    //           height={350}
    //           width={350}
    //           src="https://cdn-afllh.nitrocdn.com/PwKttzWmqrxeptmNTeKNfywizeaFnrcW/assets/static/optimized/rev-1aacf3c/app/uploads/2020/08/Shoes-concept.jpg"
    //         />
    //         <Card.Body>
    //           <Card.Title>FOOTWEAR</Card.Title>
    //           <Button variant="dark" className="m-2">
    //             +
    //           </Button>
    //           <Button variant="dark">-</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>

    //   <Row
    //     xs={1}
    //     sm={2}
    //     md={3}
    //     style={{ display: "flex", justifyContent: "center" }}
    //   >
    //     <Col>
    //       <Card
    //         style={{ width: "15rem", height: "20rem", border: "0" }}
    //         className="my-5"
    //       >
    //         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //         <Card.Body>
    //           {/* <Card.Title>Card Title</Card.Title> */}

    //           <Card.Text className="text-start">
    //             <h1 style={{ width: "500px" }}>Order Summary</h1>
    //             <br />
    //             <br />
    //             <br />
    //             <p>Subtotal</p>
    //             <p>Discount</p>
    //             <p>Total</p>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

const CartItem = (props) => {
  let Item = props.item;
  let totalPrice = 0;
  let tempPrice = 0;

  return (
    <div>
      <div style={{ width: "300px" }}>
        <Row>
          <Image src={Item.img} width={300} height={300} className="m-3" />
        </Row>
        <Row>
          <Col className="d-flex flex-column p-3">
            <h3>{Item.title}</h3>
            <h4>Rs. {Item.price}</h4>
           
          </Col>
        </Row>
      </div>
    </div>
  );
};
