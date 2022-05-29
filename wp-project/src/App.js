import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Profile from './components/Profile'
import Cart from './components/Cart';
import NewsLetter from './components/NewsLetter'

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
