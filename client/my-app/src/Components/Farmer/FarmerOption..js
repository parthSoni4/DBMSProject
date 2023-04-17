import React from 'react';
import { useNavigate } from "react-router-dom";
import "../Product/ProductInsert";
import { useLocation } from 'react-router-dom';
import "../Option.css";
import "./FarmerSales";

export default function FarmerOption() {

  const navigate = useNavigate("/root");
  const farmer_sales = () => {
    navigate("../farmer_sales")
  }
  const location = useLocation();
  const farmer_id = location.state.farmer_id;
  console.log("farmer id is", farmer_id);
  const farmer_id2 = sessionStorage.getItem("farmer_id");
  console.log("farmer id 2 is ", farmer_id2);

  const Inserting_product = () => {
    navigate("../ProductInsert", { state: { farmer_id } });
  }

  function Farmer_myacc() {
    navigate("/FarmerAccount");

  }

  return (
    <>
      <div className="container">

        <div className="row row-head">
          <h2 className='text-center'> Farmer Option!</h2>
        </div>
        <div className="row row-option">

          <button className="option-button" onClick={farmer_sales}>View all your sales</button>
          <button className="option-button" onClick={Inserting_product}>Insert product</button>
          <button className="option-button" >View your product</button>
          <button className="option-button" onClick={Farmer_myacc}>My account</button>
        </div>
      </div>
    </>
  )
}
