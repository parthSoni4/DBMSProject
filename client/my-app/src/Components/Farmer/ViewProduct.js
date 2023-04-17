// import { response } from 'express';
import React, {useState, useEffect} from 'react'
import axios from "axios";
import "../Product/ProductDisplay.css";
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function ViewProduct() {
  const [imageData,setImageData]=useState([]);
  const[error,setError]=useState("");
  
  var product_id;
  const navigate=useNavigate("/root");
//   const ProductDetailedDisplay=(a)=>{
//     console.log("now go");
//     console.log(a);
//     navigate(`../ProductDetailedDisplay/product_id/:${a}`, { state: { a }});
//   }
  useEffect(()=>{
    // const url="http://localhost:3001/productDisplay";
    const farmer_id=sessionStorage.getItem("farmer_id");
    axios.post("http://localhost:3001/product_display_farmer",{
        farmer_id: farmer_id
    }).then(response=>{
        setImageData(response.data);
        setError('');
        // console.log(response.data);
        console.log("hello in product display for the first product");
        console.log(response.data[0].cost);
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
        
          <div key={data.id} className="product-card col-md-3" >
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
