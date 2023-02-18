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
            <div key={data.id}>
                {data.imageData && <img src={data.imageData} alt="uploaded image" className="productPic"/>}
                {data.textData && <p>{data.textData}</p>}
            </div>
        ))}
    </div>
    </>
  )
}
