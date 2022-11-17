import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import HeadApp from './Header1';
import MobileApp from './Accessories';
import ClothApp from './Clothes';
import JewelApp from './Jewellery';
import ShowuserApp from './project';
import GetApp from './get';
import Weather from './weather';
import Product1 from './Users/user1';
import Product2 from './Users/user2';
import Product3 from './Users/user3';
import Product4 from './Users/user4';
import Ama from './amazon/Amazon1';
import { AmazonContext } from './amazon/Amazon';
import Ama2 from './amazon/Amazon2';
import FormApp from './Form';
import LoginApp from './Login';

function App() {
  return (

    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HeadApp/>}>
        <Route path="/linka" element={<MobileApp/>}></Route>
        <Route path="/linkc" element={<ClothApp/>}></Route>
        <Route path="/linkj" element={<JewelApp/>}></Route>
        <Route path="/link21" element={<ShowuserApp/>}></Route>
        <Route path="/link34" element={<GetApp/>}></Route>
        <Route path="/link35" element={<Weather/>}></Route>
        <Route path="/nested-comp" element={<Product1 amount="rahul"/>}></Route>
      <Route path="/context-comp" element={<AmazonContext.Provider value={{"name":"suraj"}}>
        <Ama/>
        <Ama2/>
        </AmazonContext.Provider>}></Route>
        <Route path="/form" element={<FormApp/>}></Route>
        <Route path="/login" element={<LoginApp/>}></Route>
    
        </Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
