import React, {useState} from 'react'
import "../Form.css";
import axios from "axios";

export default function CustomerLogin() {
    const[name,changeName]=useState("");
    const[password,changePassword]=useState("");
    const[status,changeStatus]=useState("");

    const check_customer=()=>{
        axios.post("http://localhost:3001/check_customer",{
            name: name,
            password: password
        }).then((response)=>{
            console.log(response);
            if(response.data==="wrong")
            {
                changeStatus("Wrong username or password");
            }
            if(response.data==="right")
            {
                changeStatus("Welcome");
            }
        })
    }

  return (
    <main>
        <h2>Customer Login </h2>
        <div className="input-group">
            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e)=>{changeName(e.target.value);}}/>
        </div>
        <div className="input-group">
            <input type="text" placeholder="Enter your password" className="form-control" onChange={(e)=>{changePassword(e.target.value);}} />
        </div>
        <div className="input-group">
            <button className="btn btn-default btn-primary" onClick={check_customer}>Submit</button>
        </div>
        <h3>{status}</h3>
    </main>
  )
}
