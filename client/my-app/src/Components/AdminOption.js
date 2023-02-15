import React from 'react'
import Axios from "axios";
import { useNavigate} from "react-router-dom";
import "./AllFarmer";

export default function AdminOption() {
 const navigate=useNavigate("/root");

 const AllFarmer=()=>{

  navigate("../AllFarmer");  
 }
   return (
    <>
    <button >Create new Admin</button>
    <button onClick={AllFarmer}>View all farmer</button>
    <button>View all the customer</button>
    <button>View all purchase</button>
    </>
  )
}
