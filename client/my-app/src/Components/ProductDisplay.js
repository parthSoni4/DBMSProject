// import { response } from 'express';
import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./ProductDisplay.css";

export default function ProductDisplay() {
  const [imageData,setImageData]=useState([]);
  const[error,setError]=useState("");

  useEffect(()=>{
    // const url="http://localhost:3001/productDisplay";

    axios.get("http://localhost:3001/product_display")
    .then(response=>{
        setImageData(response.data);
        setError('');
        // console.log(response.data);
        console.log(response.data.textData);
    })
  .catch(error=>{
    setError("error retrieving image and text data");
  });
},[]);
    return (
    <>
    <div>
        {imageData.map(data=>(
            <div key={data.id} className="product-card">
                {data.imageData && <img src={data.imageData} alt="uploaded image" className="productPic"/>}
                {data.textData && <p>Name: {data.textData}</p>}
                {data.type && <p>Type: {data.type}</p>}
                {data.category && <p>Type: {data.category}</p>}
                {data.quantity && <p>quantity: {data.quantity}</p>}
                {data.cost && <p>Cost: {data.cost}</p>}
                {data.description && <p>description: {data.description}</p>}
                {data.date && <p>Date: {data.date}</p>}
            </div>
        ))}
    </div>
    </>
  )
}
