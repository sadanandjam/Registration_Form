import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeadApp from './Header1';
import {useState,useEffect} from 'react';

function ShowuserApp() {
  const[id,setId]=useState()
  const[data,setData]=useState([])
  function Addarray(){
    data.push({id})
    setData([...data])
  }
    return (
  
      <div className="App">
       <h1>This Array</h1>
<input type="text" placeholder="enter the first id" onChange={(user)=>setId(user.target.value)}/><br></br>
<button onClick={()=>Addarray()}>Add</button><br></br>
Array:{JSON.stringify(data)}
{
  data.map((val,input)=>{
return(
  <div>
    {val.id}
  </div>
)
  })
}
       
      </div>
    );
  }
  
  export default ShowuserApp;