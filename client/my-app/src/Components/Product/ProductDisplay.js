// import { response } from 'express';
import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./ProductDisplay.css";
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function ProductDisplay() {
  const [imageData,setImageData]=useState([]);
  const[error,setError]=useState("");
  var product_id;
  const navigate=useNavigate("/root");
  const ProductDetailedDisplay=(a)=>{
    console.log("now go");
    console.log(a);
    navigate(`../ProductDetailedDisplay/product_id/:${a}`, { state: { a }});
  }
  useEffect(()=>{
    // const url="http://localhost:3001/productDisplay";

    axios.get("http://localhost:3001/product_display")
    .then(response=>{
        setImageData(response.data);
        setError('');
        // console.log(response.data);
        console.log("hello");
        console.log(response.data.textData);
    })
  .catch(error=>{
    setError("error retrieving image and text data");
  });
},[]);
    return (
    <>
    <div className='container-fluid'>
      <div className="row">

        {imageData.map(data=>(
        
          <div key={data.id} className="product-card col-md-3" onClick={()=>ProductDetailedDisplay(data.id)}>
                {data.imageData && <img src={data.imageData} alt="uploaded image" className="productPic"/>}
                {data.textData && <p>Name: {data.textData}</p>}
                {data.type && <p>Type: {data.type}</p>}
                {data.category && <p>Type: {data.category}</p>}
                {data.quantity && <p>quantity: {data.quantity}</p>}
                {data.cost && <p>Cost: {data.cost}</p>}
                {data.description && <p>description: {data.description}</p>}
                {/* {data.product.farmer_id && <p>description: {data.product.farmer_id}</p>} */}

                {data.date && <p>Date: {data.date}</p>}
                {/* <button OnClick={ProductDetailedDisplay(data.product_id)}>View details</button> */}
            </div>
                ))}
        </div>
    </div>
    </>
  )
}
