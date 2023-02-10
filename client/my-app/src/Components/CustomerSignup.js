import React, {useEffect, useState} from 'react';
import "./Form.css";
import Axios from "axios";



export default function CustomerSignup() {
    const[fname,changefname]=useState("");
    const[lname,changeLname]=useState("");
    const[address,changeAddress]=useState("");
    const[city,changeCity]=useState("");
    const[state,changeState]=useState("");
    const[contact_no,changeContact_no]=useState("");
    const[email,changeEmail]=useState("");
    const[password,changePassword]=useState("");

    const customer_login=()=>{
        console.log("customerr login")
        Axios.post("http://localhost:3001/customer_login",{
            fname: fname,
            lname: lname,
            address: address,
            city: city,
            state: state,
            contact_no: contact_no,
            email: email,
            password: password
        }).them((response)=>{
            console.log(response);
        });
    };

  return (
    <>
       <main>
        <h2 className="my-3">Customer SignUp!</h2>
        <div className="input-group">

        {/*<label htmlFor="" className="form-label">Enter your name</label>*/}
        <input type="text" placeholder="Enter your first name" className="form-control" onChange={(e)=>{changefname(e.target.value);}} />
        <input type="text" placeholder="Enter your last name" className="form-control" onChange={(e)=>{changeLname(e.target.value);}}/>
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your contact no</label>*/}
            <input type="text" placeholder="Enter your Phone number"  className="form-control" onChange={(e)=>{changeContact_no(e.target.value);}} />
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your email</label>*/}
            <input type="email" placeholder="Enter your email id"  className="form-control" onChange={(e)=>{changeEmail(e.target.value);}} />
        </div>

        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your address</label>*/}
            <input type="text" placeholder="Enter your address" className="form-control" onChange={(e)=>{changeAddress(e.target.value);}} />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your state</label>
            <input type="text" className='form-control' onChange={(e)=>{changeCity(e.target.value);}}/>
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your city</label>
            <input type="text" className="form-control" onChange={(e)=>{changeState(e.target.value);}}/>
        </div>
        
        <div  className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your password</label>*/}
            <input type="text" placeholder="Enter password" className="form-control" onChange={(e)=>{changePassword(e.target.value);}}/>
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Confirm your password</label>*/}
            <input type="text" placeholder="Confirm password"  className="form-control" />
        </div>
        <div className="mb-3">
            <button class="buton" onClick={customer_login}>Sign Up</button>
        </div>
       </main>
    </>
  )
}
