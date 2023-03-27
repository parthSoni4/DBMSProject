import React from 'react'
import  {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import "./ProductDetailedDisplay.css";
import StripeContainer from "./StripeContainer";
import Geolocation from "../Geolocation";

export default function ProductDetailedDisplay() {
    // console.log(product_id);
    const location=useLocation();
    const [data, setData]=useState([]);
    const id=location.state.a;
    console.log("the product is ",id);
    const [map,setMap]=useState(false);
    const [msge,setmsge]=useState("");
    sessionStorage.setItem("product_id",id);
    const show_location=()=>{
      console.log("In show location");
      const product_id=id;
      console.log("in this section", product_id);
      axios.post("http://localhost:3001/show_location",{
        product_id: product_id
        
      }).then((response)=>{
        console.log(response);
        console.log(response.data);
        if(data=="")
        {
          setmsge("The farmer does not want to share his location");
        }
        console.log(response.data[0].farmer_id);
        const latitude=response.data[0].latitude;
        const longitude=response.data[0].longitude;
        sessionStorage.setItem("latitude", latitude);
        sessionStorage.setItem("longitude", longitude);
        setMap(true);
      })
    }


    useEffect(() => {
      axios.post("http://localhost:3001/product_detailed_display", {id})
      .then(response=>{console.log(response.data)
        setData(response.data)
        // console.log(response.data.id);
        console.log("image data",data);
        console.log("hello", data[0].cost);
        const amount=data[0].cost;
        // const farmer_id=data[0].farmer_id;
        // console.log("the farmer_id is", farmer_id);
        console.log("the amount is",amount);
        sessionStorage.setItem("amount",amount);
        })
      .catch(error=>console.log(error));
    }, [])
    

  return (
    <>
    {/* <div>ProductDetailedDisplay</div> */}
    {/* <div>{id}</div>
     */}
    <div className="container" id="container-display">
      {/* <div className="row"> */}

     {data.map(d=>(
       <div key={d.id} className="row">
        
        <div className="col-sm-3">

        {d.textData && <p> Name: {d.textData}</p>}
        {d.type && <p> Type: {d.type}</p>}
        {d.quantity && <p> quantity: {d.quantity}</p>}
        {d.cost && <p> cost: {d.cost}</p>}
        {d.description && <p> Description: {d.description}</p>}
        {d.date && <p> Date: {d.date}</p>}
        <button onClick={()=>show_location()}>show location</button>
        {  map && <Geolocation></Geolocation>}
        {  msge }
        <StripeContainer></StripeContainer>
        
        </div>
        <div className="col-sm-7">

        {d.imageData && <img src={d.imageData} className="detailed-image img-responsive" alt="here"/>}
        </div>
      </div>
     ))
     
    }
    </div>
    {/* </div> */}
    </>
  )
}
