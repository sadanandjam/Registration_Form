import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeadApp from './Header1';
import {useState,useEffect} from 'react';
import axios from 'axios'
function GetApp() {
    const[list,setList]=useState([])
    useEffect(()=>{
        console.log("call api")
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
            setList(result.data)
        })
    },[])
    return (
  
      <div className="App">
       <h1>Get data from user fake api</h1>
       <table border="1">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>mobile no</th>
            <th>email</th>
        </tr>
       {
        list.map((val)=>{
            return <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                <td>{val.email}</td>
            </tr>
        })
       }
</table>
       
      </div>
    );
  }
  
  export default GetApp;