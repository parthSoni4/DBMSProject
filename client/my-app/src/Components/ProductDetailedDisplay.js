import React from 'react'
import  {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import "./ProductDetailedDisplay.css";

export default function ProductDetailedDisplay() {
    // console.log(product_id);
    const location=useLocation();
    const [data, setData]=useState([]);
    const id=location.state.a;
    const pay=()=>{
      console.log("Pay");
    }


    useEffect(() => {
      axios.post("http://localhost:3001/product_detailed_display", {id})
      .then(response=>{console.log(response.data)
        setData(response.data)
        // console.log(response.data.id);
        console.log("image data",data);
        })
      .catch(error=>console.log(error));
    }, [])
    

  return (
    <>
    {/* <div>ProductDetailedDisplay</div> */}
    {/* <div>{id}</div>
     */}
    <div className="container">
      {/* <div className="row"> */}

     {data.map(d=>(
       <div key={d.id} className="row">
        
        <div className="col-sm-3">

        {d.textData && <p> Name: {data.textData}</p>}
        {d.type && <p> Type: {d.type}</p>}
        {d.quantity && <p> quantity: {d.quantity}</p>}
        {d.cost && <p> cost: {d.cost}</p>}
        {d.description && <p> Description: {d.description}</p>}
        {d.date && <p> Date: {d.date}</p>}
        <button onClick={()=>pay()}>Pay</button>
        </div>
        <div className="col-sm-7">

        {d.imageData && <img src={d.imageData} className="detailed-image" alt="here"/>}
        </div>
      </div>
     ))
     
    }
    </div>
    {/* </div> */}
    </>
  )
}
