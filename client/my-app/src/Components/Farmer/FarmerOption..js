import React from 'react';
import {useNavigate} from "react-router-dom";
import "../ProductInsert";

export default function FarmerOption() {
  const navigate=useNavigate("/root");
  const Inserting_product=()=>{
    navigate("../ProductInsert");
  }
  return (
    <>
    <button>View all your sales</button>
    <button onClick={Inserting_product}>Insert product</button>
    <button>View your product</button>
    </>
  )
}
