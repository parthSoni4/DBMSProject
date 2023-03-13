import React, {useEffect, useState} from 'react';
import "../Form.css";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import image from "../HomeImages/customer1.jpg";

export default function CustomerSignup() {
    useEffect(() => {
        validateForm();
        const style = document.createElement('style');
        style.textContent = `body { background-image: url(${image}); background-repeat: repeat; }`;
        document.head.appendChild(style);
    
      }, )
    const navigate=useNavigate("/root");
    const Customer_login=()=>{
        navigate("../CustomerLogin");

    }



    const[fname,changefName]=useState("");
    const[lname,changeLname]=useState("");
    const[address,changeAddress]=useState("");
    const[city,changeCity]=useState("");
    const[state,changeState]=useState("");
    const[contact_no,changeContact_no]=useState("");
    const[email,changeEmail]=useState("");
    const[password,changePassword]=useState("");
    const [cpass, changeConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});


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

    
        
      

    const validateForm = () => {
        const errors = {};
        if (!fname) {
          errors.fname = "*";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(fname)) {
          errors.fname = "First name must be characters only";
        }
    
        if (!lname) {
          errors.lname = "*";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(lname)) {
          errors.lname = "\nLast name must be characters only";
        }
    
        if (!contact_no.trim()) {
          errors.contact_no = "*";
        } else if (!/^[0-9]+$/.test(contact_no)) {
        errors.contact_no = "\nPhone number must be digits only";
        } else if (contact_no.length < 10)   {
        errors.contact_no = '\nPhone number must be 10 digits long';
        }

        if (!address.trim()) {
            errors.address = "*";
          } 

        if (!email.trim()) {
            errors.email = "*";
          } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "\nEnter the valid email address";
          }
      
        if (!city.trim()) {
          errors.city = "*";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(city)) {
          errors.city = "\nCity name must be charcters only";
        }
    
        if (!state.trim()) {
          errors.state = "*";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(state)) {
          errors.state = "\nState name must be charcters only";
        }

        if (!password) {
          errors.password = "*";
        } else if (password.length < 8) {
          errors.password = "\nPassword must be 8 alphanumeric long";
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
          errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
        }
    
        if (!cpass) {
          errors.cpass = "*Re-enter the password to confirm it";
        } else if (password !== cpass) {
          errors.cpass = "Password do not match";
        }
    
        setErrors(errors);
      };
    
      const errorStyle = { color: "red" };
    

  return (
    <>
    <form onSubmit={validateForm}>
        
        <h2 className="my-3">Customer SignUp!</h2>
        <div className="input-group">
        {/*<label htmlFor="" className="form-label">Enter your name</label>*/}
        <input 
        type="text" 
        placeholder="Enter your first name ..." className="form-control" 
        name="fname" 
        onChange={(e)=>{changefName(e.target.value);}} />
        {errors.fname && <span style={errorStyle}>{errors.fname}</span>}
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter your last name ..." className="form-control" name="lname" onChange={(e)=>{changeLname(e.target.value);}}/>
        {errors.lname && <span style={errorStyle}>{errors.lname}</span>}
              
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your contact no</label>*/}
            <input type="text" placeholder="Enter your phone number ..."  className="form-control" name="contact_no" onChange={(e)=>{changeContact_no(e.target.value);}} />
            {errors.contact_no && <span style={errorStyle}>{errors.contact_no}</span>}
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your email</label>*/}
            <input type="email" placeholder="Enter your email id ..."  className="form-control" name="email" onChange={(e)=>{changeEmail(e.target.value);}} />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>

        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your address</label>*/}
            <input type="text" placeholder="Enter your address ..." className="form-control" name="address" onChange={(e)=>{changeAddress(e.target.value);}} />
            {errors.address && <span style={errorStyle}>{errors.address}</span>}
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your city</label>*/}
            <input type="text" placeholder="Enter your city ..." className='form-control' name="city" onChange={(e)=>{changeCity(e.target.value);}}/>
            {errors.city && <span style={errorStyle}>{errors.city}</span>}
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your state</label>*/}
            <input type="text" placeholder="Enter your state ..." className="form-control" name="state" onChange={(e)=>{changeState(e.target.value);}}/>
            {errors.state && <span style={errorStyle}>{errors.state}</span>}
        </div>
        
        <div  className="input-group">
            {/*<label htmlFor="" className="form-label">Enter your password</label>*/}
            <input type="password" placeholder="Enter password ..." className="form-control" name="password" onChange={(e)=>{changePassword(e.target.value);}}/>
            {errors.password && <span style={errorStyle}>{errors.password}</span>}
        </div>
        <div className="input-group">
            {/*<label htmlFor="" className="form-label">Confirm your password</label>*/}
            <input type="password" placeholder="Confirm password ..."  className="form-control"  name="cpass" onChange={(e) => {
                    changeConfirmPassword(e.target.value);
                  }}/>
            {errors.cpass && <span style={errorStyle}>{errors.cpass}</span>}
              
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" onClick={customer_login}>Sign Up</button>
        </div>
        <div>
        <h5 className="my-3">Already have an account?</h5>
        <button onClick={Customer_login}>Click Here</button>
        </div>
        </form>
    </>
  )
}


// https://global-uploads.webflow.com/5ec58288fb88c8354e4ff63a/5ed6a583e460099ef51782de_Plate%201.jpg