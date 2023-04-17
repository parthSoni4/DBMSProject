import React from 'react'
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../Product/ProductDisplay";
import "../Option.css";

export default function CustomerOption() {
  let {customer_id}=useParams();
  const navigate=useNavigate("/root");
  const view_purchase=()=>{
    navigate("../view_purchase");
  }
  sessionStorage.setItem("customer_id",customer_id);
  const view_products=()=>{
    navigate("../ProductDisplay");
  }
  console.log("customer id is",customer_id);
  return (
    <>
    <div className="container container-option">
      <div className="row row-head">

      <h2 className='text-center'>Customer Option</h2>
      </div>
    
      <div className="row row-option">

    <button className="option-button2 option-button3"  onClick={view_products}>View the products</button>
    <button className="option-button2 option-button3" onClick={view_purchase}>View purchase</button>
      </div>
    </div>
    {/* <button></button> */}
    </>
  )
}
