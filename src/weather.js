import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeadApp from './Header1';
import {useState,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
function WeatherLoop(){
    const cityArray=["nagpur","Amravati","mumbai","pune","aurangabad","bhusaval"]
    const [cityData,setCityData]=useState([])
    useEffect(()=>{
        let cityData=[];
        cityArray.map((cityName)=>{
        axios.get("https://api.weatherapi.com/v1/current.json?Key=80d14f786dfb4a3a9ca40648221111&q="+cityName+"&aqi=no").then((response)=>{
cityData.push(response.data)
setCityData([...cityData])
        })
    })
        
},[])
return(
  
    <div className="Abc">
        <Row>
    {
        cityData.map((val,index)=>{
            return <Card
                bg={val.current.temp_c>30?"danger":"primary"}
                key={index}
                text={"dark"}
                style={{ width: '18rem' }}
                className="mb-2"
              >
                <Card.Header><h1>{val.location.name}</h1></Card.Header>
                <Card.Body>
                  <Card.Title><h2>{val.current.temp_c}C<sup>0</sup></h2></Card.Title>
                  <Card.Text><h1>{val.location.country}</h1></Card.Text>
                </Card.Body>
              </Card>
              
        })
            }
            </Row>
          </div>
            
          

    
);
}
export default WeatherLoop;