import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route path='/products' element={<Product />}/>
      </Routes>
      <MyNavbar/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
