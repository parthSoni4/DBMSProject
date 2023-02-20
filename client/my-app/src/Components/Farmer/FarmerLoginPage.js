import React, {useState} from 'react'
import "../Form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
                navigate("../FarmerOption");
            }
        })
    }
  return (
    <>
    <main>
        <h2>Login Page for farmer</h2>
        <div className="input-group">
            <input type="text" className="form-control" placeholder='Enter yourn name' onChange={(e)=>{changeName(e.target.value);}}/>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="enter your password" onChange={(e)=>{changePassword(e.target.value);}}/>
        </div>
        <div className="input-group">
            <button className="btn btn-default btn-primary" onClick={check_farmer}>Submit</button>
        </div>
        <h3>{status}</h3>
    </main>
    </>
  )
}
