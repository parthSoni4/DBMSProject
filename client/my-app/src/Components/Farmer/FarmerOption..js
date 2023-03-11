import React from 'react';
import {useNavigate} from "react-router-dom";
import "../Product/ProductInsert";
import { useLocation } from 'react-router-dom';
import "../Option.css";

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
    <div className="container container-option">
    <div className="row row-head">
      <h2 className='text-center'> farmer Option</h2>
    </div>
    <div className="row row-option">

    <button className="option-button">View all your sales</button>
    <button className="option-button" onClick={Inserting_product}>Insert product</button>
    <button className="option-button" >View your product</button>
    </div>
    </div>
    </>
  )
}
