
import React,{useState} from 'react'
import { Container,Button, Row ,Image,Col,ToggleButton} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Login() {
  const [signup, setsignup] = useState(0);
  
  return (

    <Container fluid >
      <Row xs={1}  md={1} lg={2} fluid >
        <Col sm={6} md={6} lg={6}>
        {/* <SignUpComponent/> */}
        <Image width={500} height={500} src ='https://eshop11.herokuapp.com/assets/img/hero/hero_man.png'/>
        </Col>
        <Col sm={6} md={6} lg={6}>
          {signup==0?<LoginComponent fun={setsignup}/>:<SignUpComponent fun={setsignup}/>}
        </Col>
      </Row>
    </Container>
  )
}

const LoginComponent=(props)=>(
<div className='d-flex flex-column outline-primary p-3 m-3 rounded justify-content-center' style={{
        border: '3px solid rgb(0, 0, 0)',}}>
<h4>Login</h4>
<div className='mt-4 m-2'>
<label htmlFor="userId" className='mx-4 my-3'>User Name</label>
    <input id="userId" type="text" className="rounded m-1 p-1" />
</div>

<div className='m-2'>
<label htmlFor="password" className='mx-4 my-3'>Password</label>
    <input id="password" type="password" className="rounded m-1 p-1" />
</div>

<Button variant='primary' className='mx-3 my-3' >Login</Button>
<p onClick={()=>props.fun(1)} style={{cursor : 'pointer'}}>Sign Up</p>
</div>
);




const SignUpComponent=(props)=>(
  <div className='d-flex flex-column outline-primary p-3 m-3 rounded justify-content-center' style={{
          border: '3px solid rgb(0, 0, 0)',}}>
  <h4>Sign Up</h4>
  <div className='mt-4 m-2'>
  <label htmlFor="userId" className='mx-4 my-3'>User Name</label>
      <input id="userId" type="text" className="rounded m-1 p-1" />
  </div>
  
  <div className='m-2'>
  <label htmlFor="password" className='mx-4 my-3'>Password</label>
      <input id="password" type="password" className="rounded m-1 p-1" />
  </div>

  <div className='m-2'>
  <label htmlFor="cpassword" className='mx-4 my-3'>Confirm Password</label>
      <input id="cpassword" type="password" className="rounded m-1 p-1" />
  </div>
  
  <Button variant='primary' className='mx-3 my-3' >Sign Up</Button>
  <p onClick={()=>props.fun(0)} style={{cursor : 'pointer'}}>Login</p>
  </div>
  );
  