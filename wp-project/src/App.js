import './App.css';
import MyNavbar from './components/MyNavbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Profile from './components/Profile'
import Cart from './components/MyCart';
import NewsLetter from './components/NewsLetter';
import About from './components/About';
import ProductItem from './components/ProductItem';

function App() {
  const user = true;
  return (
    <BrowserRouter>
    <MyNavbar/>
    <div style={{marginTop: "60px", marginBottom: "10px"}}></div>
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route exact path='/products' element={<Product category="default"/>}/>
        <Route exact path='/products/tshirt' element={<Product category="tshirt"/>}/>
        <Route exact path='/products/beauty' element={<Product category="beauty"/>}/>
        <Route exact path='/products/footwear' element={<Product category="footwear"/>}/>
        <Route exact path='/products/jewellery' element={<Product category="jewellery"/>}/>
        <Route exact path='/products/bluetooth' element={<Product category="bluetooth"/>}/>
        <Route exact path='/products/tshirt' element={<Product category="tshirt"/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/productItem' element={<ProductItem/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
