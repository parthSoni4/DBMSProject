import React,{useState} from 'react'
import "./Form.css";
import axios from "axios";

export default function Contact() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[description,setDescription]=useState("");

    const Submit=()=>{
        console.log(name);
        axios.post("http://localhost:3001/contact",{
            name: name,

            email: email,
            description: description
        }).then((response)=>{
            console.log(response);
        });
    }
  return (
    <>
    <main>
        <h2>Message and feedback form</h2>
        <div className="input-group">
            <input type="text" placeholder='Enter your name ...' className="form-control" onChange={(e)=>{setName(e.target.value);}}/>
        </div>
        <div className="input-group">
            <input type="text" placeholder="Enter your email ..."className="form-control" onChange={(e)=>{setEmail(e.target.value);}} />
        </div>
        <div className="input-group1">
            <textarea name="" placeholder='Enter your message and description ...' id="" cols="30" rows="10" className="form-control" onChange={(e)=>{setDescription(e.target.value);}}></textarea>
        </div>
        <div className="input-group">
            <button className="btn btn-primary" onClick={Submit}>Submit</button>
        </div>
    </main>
    </>
  )
}
