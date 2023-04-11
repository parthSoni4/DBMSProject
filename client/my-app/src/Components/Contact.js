import React,{useEffect,useState} from 'react'
import "./Form.css";
import axios from "axios";
import image from "./Farmer/FarmerSectionImage/wow.jpg";
import image2 from "./HomeImages/lets.jpg";

export default function Contact() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[description,setDescription]=useState("");
    const [errors, setErrors] = useState({});

    const Submit=()=>{
        console.log(name);
        console.log(email);
        console.log(description);
        axios.post("http://localhost:3001/contact",{
            name: name,
            email: email,
            description: description
        }).then((response)=>{
            console.log(response);
        });
    }
    useEffect(() => {
            const style = document.createElement('style');
            style.textContent = `body { background-image: url(${image2}); background-size: cover; background-repeat: no-repeat; }`;
            document.head.appendChild(style);
        
          }, )

    useEffect(() => {
        validateForm();
       },)

       const validateForm = () => {
        const errors = {};
        if (!name) {
          errors.name = "*";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name)) {
          errors.name = "Name must be characters only";
        }
         
        if (!email.trim()) {
            errors.email = "*";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "\nEnter the valid email address";
         }

        if (!description.trim()) {
            errors.description = "*";
        } 
      
        setErrors(errors);
      };
    
      const errorStyle = { color: "red" };
    
  return (
    <>
    <form onSubmit={validateForm}>
        <h2>Message and feedback form</h2>
        <div className="input-group">
            <input type="text" placeholder='Enter your name ...' className="form-control" name="name" onChange={(e)=>{setName(e.target.value);}}/>
            {errors.name && <span style={errorStyle}>{errors.name}</span>}        
        </div>
        <div className="input-group">
            <input type="text" placeholder="Enter your email ..." className="form-control" name="email" onChange={(e)=>{setEmail(e.target.value);}} />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>
        <div className="input-group1">
            {errors.description && <span style={errorStyle}>{errors.description}</span>}
            <textarea placeholder='Enter your message and description ...' name="description" cols="30" rows="10" className="form-control" onChange={(e)=>{setDescription(e.target.value);}} />
        </div>
        <div className="input-group">
            <button className="btn btn-primary" onClick={Submit}>Submit</button>
        </div>
    </form>
    </>
  )
}
