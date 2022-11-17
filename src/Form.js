import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function FormApp() {
  const[Name,setName]=useState()
  const[Mobile,setMobile]=useState()
  const[Email,setEmail]=useState()
  const[Password,setPassword]=useState()
  const[City,setCity]=useState()
  const[Other,setOther]=useState()
  const[Address,setAddress]=useState()
  const[Pin,setPin]=useState()
  const[State,setState]=useState()
  const[type,setType]=useState([])
  function form(){
    type.push({"Name":Name,"Mobile":Mobile,"Email":Email,"Password":Password,"City":City,"Other":Other,"Address":Address,"Pin":Pin,"State":State});
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
      if(valtype.Name==id){
        valtype.Name=Name
        valtype.Mobile=Mobile
        valtype.Email=Email
        valtype.Password=Password
        valtype.Other=Other
        valtype.Address=Address
        valtype.Pin=Pin
        valtype.State=State
       
        return valtype
      }
    
    });
    setType([...newArray1])
      }
    return (
  
      <div className="App">
        <form>
        <fieldset>
       <h1>Registration Form</h1>
Name:<input type="text" placeholder='enter the name' onChange={(vare)=>setName(vare.target.value)}/><br></br>
Mobile No:<input type="text" placeholder='enter mobile no' onChange={(varp)=>setMobile(varp.target.value)}/><br></br>       
Email:<input type="Email" placeholder='enter the Email' onChange={(vare)=>setEmail(vare.target.value)}/><br></br>
Password:<input type="password" placeholder='enter password' onChange={(varp)=>setPassword(varp.target.value)}/><br></br>
City:<input type="text" placeholder='enter City name' onChange={(varc)=>setCity(varc.target.value)}/><br></br>
Gender:<input type="radio" value="Male"></input>
 <label for="">Male</label>
<input type="radio" value="Female"></input>
 <label for="">Female</label><br></br>
DOB:<input type="date" value="yyyy-mm-dd"></input><br></br>
Hobbies:<input type="checkbox"  value="dance"></input>
  <label for="Dance">Dance</label>
  <input type="checkbox"  value="Singing"></input>
  <label for=" Singing"> Singing</label><br></br>
  Other:<input type="text" placeholder='other' onChange={(vare)=>setOther(vare.target.value)}/><br></br>
Address:<input type="Address" placeholder='enter the address' onChange={(varp)=>setAddress(varp.target.value)}/><br></br>
Pin code:<input type="text" placeholder='enter pincode' onChange={(vare)=>setPin(vare.target.value)}/><br></br>
Choose City:<select name="city">
  <option value="nagpur">nagpur</option>
  <option value="pune">pune</option>
  <option value="amravati">amravati</option>
  <option value="mumbai">mumbai</option>
</select><br></br>
State:<input type="text" placeholder='enter State name' onChange={(varc)=>setState(varc.target.value)}/><br></br>
<label for="myfile">Image:</label>
  <input type="file" id="myfile" name="myfile"/><br></br>
  <label for="myfile">Education Qualification:</label>
  <input type="file" id="myfile" name="myfile"/><br></br>
  <label for="myfile">Graduation:</label>
  <input type="file" id="myfile" name="myfile"/><br></br>
  <Button variant="primary"onClick={()=>form()}>Register </Button><br></br>
  </fieldset>
  </form>
Information:{JSON.stringify(type)}
{
  type.map((val,index)=>{
  return(
    <div>
      <Table striped="columns">
      <thead>
        <tr>
        <th>Name</th>
        <th>Mobile No</th>
          <th>Email</th>
          <th>Password</th>
          <th>City</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{val.Name}</td>
        <td>{val.Mobile}</td>
    <td>{val.Email}</td>
    <td>{val.Password}</td>
    <td>{val.City}</td>
    <td>{val.Address}</td>
    <td>{val.Pin}</td>
    <td>{val.State}</td>

    <td> <button onClick={()=>{deleteArray(val.Name)}}>delete</button></td>
    <td><button onClick={()=>{editArray(val.Name)}}>edit</button></td>
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
  
  export default FormApp;