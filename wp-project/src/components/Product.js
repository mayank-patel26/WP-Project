import axios from "axios";
import React,{useEffect, useState} from "react";
import { Tab, Nav, Col, Container, Row ,Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/serverApi";
import watch from '../imgs/watch.jpg'
const b = ["Boat", "JBL", "Skull Candy", "Leaf", "Noise"];
// const productList = [
//   {name :"Classic watch",icon : watch, price :'120$',description :"Blue dial watch"},
//   {name :"Red TWS Earphones",icon : 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/4_bec6aa25-0ec4-487f-859e-5c9da524770a.jpg?v=1653470044' ,price :'100$',description :"Red TWS Earphones with loud bass"},
//   {name :"Joggers",icon : 'https://www.verywellmind.com/thmb/eig-KS_Og83KnFaE8AQO-1FamN0=/fit-in/992x1352/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-10-19at3.24.03PM-a67c3a1004f94b649d7893c399c7394a.png', price :'20$',description :"Cotton joggers"},
//   {name :"Pink beanie",icon : 'https://eshop11.herokuapp.com/assets/img/hero/hero_man.png' ,price :'50$',description :"Pink beanie for winters"},
//   {name :"Makeup Kit",icon : 'https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/61dd64df1ee510cd7bc62e37_amy-shamblen-xwM61TPMlYk-unsplash1_674531c2e05e68084453311b2c988150_2000.jpeg', price :'15$',description :"Lightweight makeup kit"},
//   {name :"Red sandals",icon : 'https://cdn-afllh.nitrocdn.com/PwKttzWmqrxeptmNTeKNfywizeaFnrcW/assets/static/optimized/rev-1aacf3c/app/uploads/2020/08/Shoes-concept.jpg' ,price :'150$',description :"High heeled sandals for women"},
//   {name :"Diamond bangles",icon : 'https://images.squarespace-cdn.com/content/v1/5725225ac2ea51b309f30d81/1552593550622-R01AT0KUXZ65BT37IM0A/IMG_1165.jpg?format=1000w',price :'125$',description :"Bangles to suit your needs for the festive season"},
//   {name :"Bluetooth earphones",icon : 'https://rukminim1.flixcart.com/image/416/416/k6l2vm80/headphone/v/v/z/yora-bluetooth-headset-with-mic-and-volume-button-earphone-original-imaf7p2fqnaspqnt.jpeg?q=70' ,price :'50$',description :"red bluetooth earphones"},
// ];

const productAll = async (fun,fun2,cate)=>{
  let url = getAllProducts();
  try{

    let data = await axios.get(url);
    let finalData=data['data']['products'];
    if(cate!=='default'){
      console.log(finalData.filter((i)=>(i.categories.includes(cate))));
      finalData=finalData.filter((i)=>(i.categories.includes(cate)));
    }
    fun(finalData);
    fun2(finalData);
    
    // productList=data['data']['products'];
    console.log(finalData);
  }catch(e){
    console.log(e);
  }
  // let jsonData = await data.text();

}

const applyFilters=(fun,selectedlis,finalList)=>{
  console.log(finalList.map((i)=>(i.brand)));
  if(selectedlis.length===0){
    fun(finalList);
    return;
  }
  fun(finalList.filter((i)=>(selectedlis.includes(i.brand))));
}

export default function Product(props) {
  const [selectedbrandList, setSelectedbrandList] = useState([]);
  const [productLis, setproductLis] = useState([]);
  const [fullproductList, setproductList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  useEffect(() => {
   
  productAll(setproductLis,setproductList,props.category);
    
  }, []);
  useEffect(() => {
    let bList=[]
    for(var i=0;i<productLis.length;i++){
      if(bList.includes(productLis[i].brand)){
        continue;
      }
      bList.push(productLis[i].brand);
    }
    setbrandList(bList)
    }, [fullproductList]);
  
    useEffect(() => {
      console.log(selectedbrandList);
      applyFilters(setproductLis,selectedbrandList,fullproductList);
      }, [selectedbrandList]);
  return (
    <Container fluid>
      <Row sm={1} md={2}>
        <Options brands={brandList} setSelectedbrandList={setSelectedbrandList} SBL={selectedbrandList}/>
        <ProductListView products={productLis} />
      </Row>
    </Container>
  );
}

const Options = (props) => {
  return (
    <Col scroll="no" md={3} className="bg-light sticky py-3" style={{height: '100vh'}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="priceRange" >
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
                <BrandOptions brands={props.brands} setbrandListtFun={props.setSelectedbrandList} SBL={props.SBL}/>
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
  <div className="d-flex flex-column justify-content-start ">
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

const checkBox=(eventKey,fun,sbl)=>{
if(eventKey.target.checked){
fun([eventKey.target.value].concat(sbl));
}else{

  fun(sbl.filter((i)=>(i!==eventKey.target.value)));
}
}
const BrandOptions = (props) => (
  <div className="d-flex flex-column justify-content-start">
    {props.brands.map((item, key) => (
      <div key={key} className="m-2 d-flex flex-row justify-content-start">
        <input
          type="checkbox"
          id={`${item}${key}`}
          name={item}
          value={item}
          onClick={(eventKey)=>checkBox(eventKey,props.setbrandListtFun,props.SBL)}
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
    <Col sm={1} md={5} className="flex-grow-1" >
      <Row xs={1} sm={2} md={2} lg={3}>

{
      props.products.map((item,key)=>(
        <Col key={key}>
          <Card as={Link} to='/productItem' state={{id : `${item._id}`}} style={{ width: '19rem' ,height:'25rem',cursor :'pointer', textDecoration : 'none'}} className='m-2'>
            <Card.Img variant="top" height={250}  width={250} src={item.img} />
            <Card.Body>
              <Card.Title>{`${item.title}-${item.color}`}</Card.Title>
              <Card.Subtitle>Rs {item.price}</Card.Subtitle>
              <Card.Text
              className="text-truncate"
              >
              {item.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))
}
      </Row>
    </Col>
  );
};
