import React from 'react';
import {useNavigate} from "react-router-dom";
import "../Product/ProductInsert";
import { useLocation } from 'react-router-dom';

export default function FarmerOption() {
  const navigate=useNavigate("/root");
  const location=useLocation();
  const farmer_id=location.state.farmer_id;
  console.log("farmer id is",farmer_id);

  const Inserting_product=()=>{
    navigate("../ProductInsert", {state: {farmer_id}});
  }
  return (
    <>
    <button>View all your sales</button>
    <button onClick={Inserting_product}>Insert product</button>
    <button>View your product</button>
    </>
  )
}
