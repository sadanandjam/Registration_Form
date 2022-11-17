import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function JewelApp() {
  const[Name,setName]=useState()
  const[Price,setPrice]=useState()
  const[type,setType]=useState([])
  function form(){
    type.push({"Name":Name,"Price":Price});
    setType([...type])
  }
  function deleteArray(id){
const newArray=type.filter((valtype)=>{
  if(valtype.Name!=id){
    return valtype
  }
});
setType([...newArray])
  }
  function editArray(id){
    const newArray1=type.map((valtype)=>{
      if(valtype.Name!=id){
        valtype.Name=Name
        valtype.Price=Price
        return valtype
      }
    
    });
    setType([...newArray1])
      }
    return (
  
      <div className="App">
       <h1>welcome to jewellery shop</h1>
Name:<input type="text" placeholder='enter name' onChange={(varn)=>setName(varn.target.value)}/><br></br>
price:<input type="text" placeholder='enter price' onChange={(varp)=>setPrice(varp.target.value)}/><br></br>
<button onClick={()=>form()}>add</button><br></br>
Array data:{JSON.stringify(type)}
{
  type.map((val,index)=>{
  return(
    <div>
    {val.Name}
    {val.Price}
    <button onClick={()=>{deleteArray(val.Name)}}>delete</button>
    <button onClick={()=>{editArray(val.name)}}>edit</button>
    </div>
  )
  }
  )
}
       
      </div>
    );
  }
  
  export default JewelApp;