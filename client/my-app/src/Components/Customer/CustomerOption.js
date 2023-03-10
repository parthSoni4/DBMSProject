import React from 'react'
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../Product/ProductDisplay";

export default function CustomerOption() {
  let {customer_id}=useParams();
  const navigate=useNavigate("/root");
  sessionStorage.setItem("customer_id",customer_id);
  const view_products=()=>{
    navigate("../ProductDisplay");
  }
  console.log(customer_id);
  return (
    <>
    <button onClick={view_products}>View the products</button>
    <button>View all your purchase</button>
    {/* <button></button> */}
    </>
  )
}
