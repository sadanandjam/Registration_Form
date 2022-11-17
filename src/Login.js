import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function LoginApp() {
  const[Email,setEmail]=useState()
  const[Password,setPassword]=useState()
  const[type,setType]=useState([])
  function Log(){
    type.push({"Email":Email,"Password":Password});
    setType([...type])
  }
  function deleteArray(id){
const newArray=type.filter((valtype)=>{
  if(valtype.Email!=id){
    return valtype
  }
});
setType([...newArray])
  }
  function editArray(id){
    const newArray1=type.map((valtype)=>{
      if(valtype.Email==id){
        valtype.Email=Email
        valtype.Password=Password
       
        return valtype
      }
    
    });
    setType([...newArray1])
      }
    return (
  
      <div className="App">
       <h1>Login</h1>
       
Email:<input type="Email" placeholder='enter the Email' onChange={(vare)=>setEmail(vare.target.value)}/><br></br>
Password:<input type="password" placeholder='enter password' onChange={(varp)=>setPassword(varp.target.value)}/><br></br>
<Button variant="primary" onClick={()=>Log()}>Login</Button><br></br>

Information:{JSON.stringify(type)}
{
  type.map((val,index)=>{
  return(
    <div>
      <Table striped="columns">
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
    <td>{val.Email}</td>
    <td>{val.Password}</td>
    <td> <button onClick={()=>{deleteArray(val.Email)}}>delete</button></td>
    <td><button onClick={()=>{editArray(val.Email)}}>edit</button></td>
    </tr>
    </tbody>
    </Table>
    </div>
  )
  }
  )
}
       
      </div>
    );
  }
  
  export default LoginApp;