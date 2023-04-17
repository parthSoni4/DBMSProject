import React,{useEffect,useState} from 'react'
import "./Form.css";
import axios from "axios";
import image from "./Farmer/FarmerSectionImage/wow.jpg";
import image2 from "./HomeImages/lets.jpg";
import swal from "sweetalert";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.name)) {
            errors.name = "Name must be characters only";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email format";
          }

          if (!formData.description.trim()) {
            errors.description = "Description is required";
          } else if (formData.description.length > 60) {
            errors.description = "Description must be less than 100 characters";
          }
      

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            console.log("Feedback submitted successfully");
            swal({title: "FeedBack submitted !", text: "You will get the reply through mail", icon: "success", button: "OK"});
            
        axios.post("http://localhost:3001/contact",{
            
            name: formData.name,
            email: formData.email,
            description: formData.description
        }).then((response)=>{
            console.log(response);
        });
        setFormData({
            name: "",
            email: "",
            description: ""
        });
        setErrors({});
    }
};
const terms = (e) => {
    e.preventDefault();
    
};
   
    
      
      const errorStyle = { color: "red" };
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>Message and feedback form</h2>
        <div className="input-group">
            <input type="text" placeholder='Enter your name ...' className="form-control" id="name" name="name"  
            onChange={handleChange}/> {
                errors.name && <span style={errorStyle}>
                    {
                    errors.name
                }</span>}
                   
        </div>
        <div className="input-group">
            <input type="text" placeholder="Enter your email ..." className="form-control" name="email" 
            onChange={handleChange}/> {
                errors.email && <span style={errorStyle}>
                    {
                    errors.email
                }</span>}
           </div>
        <div className="input-group1">
            <textarea placeholder='Enter your message and description ...  (must be less than 100 characters)' name="description" cols="150" rows="10" className="form-control" 
           onChange={handleChange}/> {
            errors.description && <span style={errorStyle}>
                {
                errors.description
            }</span>}
        </div>
        <div className="input-group">
            <button className="btn btn-primary option-button">Submit</button>
        </div>
    </form>
    </>
  )
}

