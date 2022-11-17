import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter,Route,Outlet, Routes, Link} from 'react-router-dom';
function HeadApp() {
    return (
  
      <div className="App">
       <h1>header</h1>
       <Link to="linka">Accessories</Link><br></br>
       <Link to="linkc">cloth</Link><br></br>
       <Link to="linkj">jewellery</Link><br></br>
       <Link to="link21">show</Link><br></br>
        <Link to="link34">Get</Link><br></br>
        <Link to="link35">Get1</Link><br></br>
        <Link to="nested-comp">product1</Link><br></br>
        <Link to="context-comp">Amazon</Link><br></br>
        <Link to="form">forms</Link><br></br>
        <Link to="login">Login</Link>
       <Outlet/>
      </div>
    );
  }
  
  export default HeadApp;