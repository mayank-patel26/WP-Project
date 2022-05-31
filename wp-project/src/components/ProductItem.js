import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Container,Row,Image,Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { getProduct } from '../api/serverApi';

import Cart from '../api/cart'
const getP=async (id,func)=>{
let item=await axios.get(getProduct(id));
console.log(item['data']['products'].filter((i)=>(i._id===id))[0]);
func(item['data']['products'].filter((i)=>(i._id===id))[0]);
}
export default function ProductItem() {
  const {id}=useLocation().state;
  const [Item, setItem] = useState({});
  useEffect(() => {
    
  getP(id,setItem);
  }, [])

  console.log(Cart.getIdList());
  
  return (
    <Container>
      <Row>
        <Image
        src={Item.img}
        width={500}
        height={500}
        className='m-3'/>
      </Row>
      <Row >
        <Col className='d-flex flex-column p-3'>
          
        <h3>{Item.title}</h3>
        <h4>Rs .{Item.price}</h4>
        </Col>
      </Row>
      <Row><Col style={{display :'flex',justifyContent:'center'}}>
        <Button onClick={()=>{Cart.addId(Item._id)}} className='btn-md'>Add to cart</Button>
      </Col>
      </Row>
    </Container>
  )
}
