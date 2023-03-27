import React from 'react'
import Axios from "axios";
import { useNavigate} from "react-router-dom";
import "./AllFarmer";
import "./AllCustomer";
import "./CreateAdmin";
import "../Option.css";
import Report from './Report';
import Allpayment from './Allpayment';


export default function AdminOption() {
 const navigate=useNavigate("/root");

 const AllFarmer=()=>{

  navigate("../AllFarmer");  
 }
 const AllCustomer=()=>{
  navigate("../AllCustomer");
 }
 const Create_admin=()=>{
  navigate("../CreateAdmin");
 }
 const AllContact=()=>{
  navigate("../AllContact");
 }

 const Allpayment=()=>{
  navigate("../Allpayment");
 }
 const generate_report=()=>{
  navigate("../Report");
 }


   return (
    <>
    <div className="container container-option">
      <div className="row row-head">

    <h2  className='text-center'>Admin Option</h2>
      </div>
      <div className="row row-option">

    <button className="option-button" onClick={Create_admin}>Create new Admin</button>
    <button className="option-button" onClick={AllFarmer}>View all farmer</button>
    <button className="option-button" onClick={AllCustomer}>View all customer</button>
    <button className="option-button" onClick={AllContact}>View all the messages</button>
    <button className="option-button" onClick={Allpayment}>View all purchase</button>
    <button className='option-button' onClick={generate_report}>View Report </button>
      </div>
    </div>
    </>
  )
}
