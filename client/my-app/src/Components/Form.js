import React, { useEffect,useState } from "react";
import "./Form.css";
import Axios from 'axios';

export default function Form() {
  const [fname,ChangefName]=useState("");
  const[lname,ChangelName]=useState("");
  const[age,ChangeAge]=useState("");
  const[aadhar_no,changeAadhar_no]=useState("");
  const[profile,changeProfile]=useState("");

  const farmer_login=()=>{
    console.log("function called")
    Axios.post("http://localhost:3001/farmer_login",{
      
      fname: fname,
      lname: lname,
      aadhar_no: aadhar_no,
      age: age,
      profile: profile,
      
    }).then((response)=>{
      console.log(response);
    });
  };
  return (
    <>
      {/* <form action="farmer_login" method="POST"> */}
        <h2 className="my-3">Farmer's Login</h2>
        <div className="input-group">
          {/* <span className="input-group-text">First and last name</span>
           */}
           <label htmlFor="" className="form-label">Enter your first and last name</label>
          <input type="text" aria-label="First name" className="our-form form-control" onChange={(e)=>{ChangefName(e.target.value);}} />
          <input type="text" aria-label="Last name" className="form-control" onChange={(e)=>{ChangelName(e.target.value);}}/>
        </div>
        <div className="input-group">
          {/* <span className="input-group-text">Enter age</span> */}
          <label htmlFor="" className="form-label">Enter your age</label>
          <input type="number" className="form-control" onChange={(e)=>{ChangeAge(e.target.value);}} />
        </div>

        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your aadhar card no</label>
          <input type="text" className="form-control" onChange={(e)=>{changeAadhar_no(e.target.value);}}/>
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your unique ID</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your phone no</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your city</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your state</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Pincode</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your password</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Confirm password</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
         <label htmlFor="formFile" className="form-label">Upload your image</label>
         <input className="form-control" type="file" id="formFile" onChange={(e)=>{changeProfile(e.target.value);}}/>
        </div>
        <div className="mb-3" >
           <button onClick={farmer_login}>Farmer login</button>
        </div>

        
      {/* </form> */}
      
      
    </>
  );
}
