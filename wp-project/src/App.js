import './App.css';
import MyNavbar from './components/MyNavbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Profile from './components/Profile'
import Cart from './components/Cart';
import NewsLetter from './components/NewsLetter'
import About from './components/About';

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
        <Route path='/products' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
