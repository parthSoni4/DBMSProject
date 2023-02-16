import React from 'react'
import Axios from "axios";
import { useNavigate} from "react-router-dom";
import "./AllFarmer";
import "./AllCustomer";


export default function AdminOption() {
 const navigate=useNavigate("/root");

 const AllFarmer=()=>{

  navigate("../AllFarmer");  
 }
 const AllCustomer=()=>{
  navigate("../AllCustomer");
 }


   return (
    <>
    <button >Create new Admin</button>
    <button onClick={AllFarmer}>View all farmer</button>
    <button onClick={AllCustomer}>View all the customer</button>
    <button>View all purchase</button>
    </>
  )
}
