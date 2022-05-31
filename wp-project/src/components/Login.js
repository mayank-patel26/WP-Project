
import React,{useState} from 'react'
import { Container,Button, Row ,Image,Col,ToggleButton} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [signup, setsignup] = useState(0);
  
  return (

    <Container fluid style={{marginTop: "175px"}}>
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
const login=async (id,pass)=>{
  try{
  let res=await axios({
    method: 'post',
    url: 'http://localhost:5000/api/auth/login',
    data: {
      username : id,
      password : pass
    }
  });
  console.log(res);
}catch(e){

}

  // console.log(res);
}
const LoginComponent=(props)=>{
  const [id,setId]=useState('');
  const [pass,setpass]=useState('');
  let handleChangePass=(event)=>{
    setpass(event.target.value);
  }
  let handleChangeID=(event)=>{
    setId(event.target.value);
  }
  return(
<div className='d-flex flex-column outline-primary p-3 m-3 rounded justify-content-center' style={{
        border: '3px solid rgb(0, 0, 0)',}}>
<h4>Login</h4>
<div className='mt-4 m-2'>
<label htmlFor="userId" className='mx-4 my-3'>Username</label>
    <input id="userId" type="text" value={id} onChange={handleChangeID} className="rounded m-1 p-1" />
</div>

<div className='m-2'>
<label htmlFor="password"   className='mx-4 my-3'>Password</label>
    <input id="password" value={pass} onChange={handleChangePass} type="password" className="rounded m-1 p-1" />
</div>

<Button as={Link} to={'/home'} onClick={()=>login(id,pass)} variant='primary' className='mx-3 my-3' >Login</Button>
<p onClick={()=>props.fun(1)} style={{cursor : 'pointer'}}>Sign Up</p>
</div>
  )
};




const SignUpComponent=(props)=>(
  <div className='d-flex flex-column outline-primary p-3 m-3 rounded justify-content-center' style={{
          border: '3px solid rgb(0, 0, 0)',}}>
  <h4>Sign Up</h4>
  <div className='mt-4 m-2'>
  <label htmlFor="userId" className='mx-4 my-3'>Username</label>
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
  