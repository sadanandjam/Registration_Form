import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function MobileApp() {
const[sel,setsel]=useState()
const[sel2,setsel2]=useState()    
function formsub(){
    console.log(sel);
    console.log(sel2);
  }
  return(
      <div className="App">
       <h1>welcome to electronics</h1>
       <select onChange={(ret)=>setsel(ret.target.value)}>
        <option>Television</option>
        <option>Mobile</option>
        <option>Refrigerator</option>
        <option>Laptop</option>
        <option>Washing machine</option>
       </select>
       <select onChange={(varsel2)=>setsel2(varsel2.target.value)}>
        <option>500-1000</option>
        <option>1000-3000</option>
        <option>4000-8000</option>
        <option>9000-12000</option>
        <option>13000-15000</option>
       </select><br></br>
       <input type="button" value="buynow" onClick={()=>formsub()}/>
       </div>
    );
  }
  
  export default MobileApp;