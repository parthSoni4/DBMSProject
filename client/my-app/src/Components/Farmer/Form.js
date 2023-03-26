import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";
import image from "./FarmerSectionImage/background14jpg.jpg";
import swal from 'sweetalert';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    aadhar_no: "",
    age: "",
    phone_no: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
    pincode: "",
    unique_id: "",
    terms: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  
  const navigate = useNavigate("/root");
  const FarmerLoginPage = () => {
    navigate("../FarmerLoginPage");
  };

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.fname.trim()) {
      errors.fname = "First name is required";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.fname)) {
      errors.fname = "First name must be characters only";
    }

    if (!formData.lname.trim()) {
      errors.lname = "Last name is required";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.lname)) {
      errors.lname = "Last name must be characters only";
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (!/^[0-9]+$/.test(formData.age)) {
      errors.age = "Age must be a number";
    } else if (parseInt(formData.age) < 18 || parseInt(formData.age) > 120) {
      errors.age = 'Age must be above 18';
    }

    if (!formData.aadhar_no.trim()) {
      errors.aadhar_no = "Aadhar number is required";
    } else if (!/^[0-9]+$/.test(formData.aadhar_no)) {
      errors.aadhar_no = "Aadhar number must be a digits only";
    } else if (formData.aadhar_no.length < 12 || formData.aadhar_no.length > 12) {
      errors.aadhar_no = "Aadhar number must be 12 digits long";
    }

    if (!formData.phone_no.trim()) {
      errors.phone_no = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.phone_no)) {
      errors.phone_no = "Phone number must be a digits only";
    } else if (formData.phone_no.length < 10 || formData.phone_no.length > 10) {
      errors.phone_no = "Phone number must be 10 digits long";
    }

    if (!formData.unique_id.trim()) {
      errors.unique_id = "Unique number is required";
    } else if (formData.unique_id.length < 12 || formData.unique_id.length > 12) {
      errors.unique_id = "Enter the Unique number given by Govt.";
    } else if (formData.aadhar_no === formData.unique_id) {
      errors.unique_id = "Aadhar Number and Unique ID cannot be same";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.city)) {
      errors.city = "City name must be charcters only";
    }

    if (!formData.state.trim()) {
      errors.state = "State is required";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.state)) {
      errors.state = "State name must be charcters only";
    }

    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^[0-9]+$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be a digits only";
    } else if (formData.pincode.length < 6 || formData.pincode.length > 6) {
      errors.pincode = "Pincode must be 6 digits long";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "\nPassword must be 8 alphanumeric long";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!isChecked) {
      errors.terms = "Please read and accept the terms and conditions.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
    else {
      console.log("Form submitted successfully");
      swal({
        title: "Form submitted !",
        text: "Your Data is stored successfully and it is safe",
        icon: "success",
        button: "OK",
      });
      // post request
      axios.post("http://localhost:3001/farmer_login", {
        fname: formData.fname,
        lname: formData.lname,
        aadhar_no: formData.aadhar_no,
        age: formData.age,
        phone_no: formData.phone_no,
        city: formData.city,
        state: formData.state,
        password: formData.password,
        pincode: formData.pincode,
        unique_id: formData.unique_id,
      }).then((response) => {
        console.log(response);
      });
      setFormData({
        fname: "",
        lname: "",
        aadhar_no: "",
        age: "",
        phone_no: "",
        city: "",
        state: "",
        password: "",
        pincode: "",
        unique_id: "",
        confirmPassword: "",
        terms:"",
      });
      setErrors({});
    }
  };

  const terms = (e) => {
    e.preventDefault();
    swal({
      title: "Terms and Conditions",
      text: "The information what you provide must be genuine and "+ 
      "accurate, in case of violation admin as all the rights to remove you from the site.",
      button: "Close",
    });
  }

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `body { background-image: url(${image}); background-repeat: repeat; }`;
    document.head.appendChild(style);
  },)

 
  const errorStyle = { color: "red" };

  return (
    <form onSubmit={handleSubmit}>

      <h2 className="my-3 text-center">Farmer SignUp!</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your first name ..."
          id="fname"
          name="fname"
          className="form-control"
          value={formData.fname}
          onChange={handleChange}
        />
        {errors.fname && <p style={errorStyle}>{errors.fname}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your last name ..."
          id="lname"
          name="lname"
          className="form-control"
          value={formData.lname}
          onChange={handleChange}
        />
        {errors.lname && <p style={errorStyle}>{errors.lname}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your age ..."
          id="age"
          name="age"
          className="form-control"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={errorStyle}>{errors.age}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your aadhar number ..."
          id="aadhar_no"
          name="aadhar_no"
          className="form-control"
          value={formData.aadhar_no}
          onChange={handleChange}
        />
        {errors.aadhar_no && <p style={errorStyle}>{errors.aadhar_no}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your unique number ..."
          id="unique_id"
          name="unique_id"
          className="form-control"
          value={formData.unique_id}
          onChange={handleChange}
        />
        {errors.unique_id && <p style={errorStyle}>{errors.unique_id}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your phone number ..."
          id="phone_no"
          name="phone_no"
          className="form-control"
          value={formData.phone_no}
          onChange={handleChange}
        />
        {errors.phone_no && <p style={errorStyle}>{errors.phone_no}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your city ..."
          id="city"
          name="city"
          className="form-control"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p style={errorStyle}>{errors.city}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your state ..."
          id="state"
          name="state"
          className="form-control"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p style={errorStyle}>{errors.state}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your pincode ..."
          id="pincode"
          name="pincode"
          className="form-control"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <p style={errorStyle}>{errors.pincode}</p>}
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Enter your password ..."
          id="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={errorStyle}>{errors.password}</p>}
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Confirm password ..."
          id="confirmPassword"
          name="confirmPassword"
          className="form-control"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={errorStyle}>{errors.confirmPassword}</p>}
      </div><br/>

      <div>
        <label>To known terms and conditions</label>
        <button onClick={terms}>
           Click here
        </button>
      </div><br/><br/>
      <div>
      <input
        type="checkbox"
        id="terms"
        name="terms"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
        <label>I agree to the terms and conditions.</label>
        {errors.terms && <p style={errorStyle}>{errors.terms}</p>}
        </div>

      <button type="submit" className="btn btn-primary option-button" >Sign Up</button>
      <div>
        <h5 className="my-3">Already have an account?</h5>
        <button className="login_a option-button" onClick={FarmerLoginPage}>
          Click Here
        </button>
      </div>

    </form>
  );
};

export default SignupForm;


