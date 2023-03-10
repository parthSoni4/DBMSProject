import React, {useState} from 'react'
import "../Form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import pic4 from "./FarmerSectionImage/farmer1.png";


export default function FarmerLoginPage() {
    const navigate=useNavigate("/root");

    const[name,changeName]=useState("");
    const[password,changePassword]=useState("");
    const[status,changeStatus]=useState("");

    const check_farmer=()=>{
        axios.post("http://localhost:3001/check_farmer",{
            name: name,
            password: password
        }).then((response)=>{
            console.log(response);
            if(response.data==="wrong")
            {
                changeStatus("wrong username or password");
            }
            else{
                changeStatus("welcome");
                console.log(response.data[0].fname);
                const farmer_id=response.data[0].farmer_id;
                navigate(`../FarmerOption/farmer_id/${farmer_id}`, { state: {farmer_id}});
            }
        })
    }
  return (
    <>
    <main>
        <div className="container">
            <div className="row">
                <div className="col-md-6">



        <h2>Login Page for farmer</h2>
        <div className="input-group">
            <input type="text" className="form-control" placeholder='Enter your Username ...' onChange={(e)=>{changeName(e.target.value);}}/>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter your password ..." onChange={(e)=>{changePassword(e.target.value);}}/>
        </div>
        <div>
        <a href class="login_a" >Forgot password?</a>
        </div>
        
        <div className="input-group">
            <button className="btn btn-default btn-primary" onClick={check_farmer}>Submit</button>
        </div>
        <h3>{status}</h3>
                </div>
                <div className="col-md-6">
                    
                    <img src={pic4} className="img-fluid my-3" alt="" />
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
