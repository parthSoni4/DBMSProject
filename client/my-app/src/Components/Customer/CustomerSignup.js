import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";
import image from "../HomeImages/customer1.jpg";
import swal from 'sweetalert';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    phone_no: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });


  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate("/root");
  const Customer_login = () => {
    navigate("../CustomerLogin");

  }

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

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    } else if (formData.address.length > 60) {
      errors.address = "Address must be less than 60 characters";
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


    if (!formData.phone_no.trim()) {
      errors.phone_no = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.phone_no)) {
      errors.phone_no = "Phone number must be a digits only";
    } else if (formData.phone_no.length < 10 || formData.phone_no.length > 10) {
      errors.phone_no = "Phone number must be 10 digits long";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
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
      console.log("customer login")
      swal({
        title: "Form submitted !",
        text: "Your Data is stored successfully and it is safe",
        icon: "success",
        button: "OK",
      });
      // post request
      axios.post("http://localhost:3001/customer_login", {
        fname: formData.fname,
        lname: formData.lname,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        phone_no: formData.phone_no,
        email: formData.email,
        password: formData.password,
      }).them((response) => {
        console.log(response);
      });
      setFormData({
        fname: " ",
        lname: " ",
        phone_no: " ",
        email: " ",
        address: " ",
        city: " ",
        state: " ",
        password: " ",
        confirmPassword: " ",
        terms: " ",
      });
      setErrors({});
    }
  };

  const terms = (e) => {
    e.preventDefault();
    swal({
      title: "Terms and Conditions",
      text: "The information what you provide must be genuine and " +
        "accurate, in case of violation admin as all the rights to remove you from the site.",
      button: "Close",
    });
  }

  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.textContent = `body { background-image: url(${image}); background-repeat: repeat; }`;
  //   document.head.appendChild(style);

  // },)

  const errorStyle = { color: "red" };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2 className="my-3">Customer SignUp!</h2>
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
          placeholder="Enter your email ..."
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your address..."
          id="address"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p style={errorStyle}>{errors.address}</p>}
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
          type={showPassword ? 'text' : 'password'}
          placeholder="Set your password ..."
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
          type="checkbox"
          checked={showPassword}
          onChange={handleToggleShowPassword}
        />
        Show password
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
      </div><br />

      <div>
        <label>To known terms and conditions</label>
        <button onClick={terms}>
          Click here
        </button>
      </div><br /><br />
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

      <button type="submit" className="btn btn-primary option-button">Sign Up</button>
      <div>
        <h5 className="my-3">Already have an account?</h5>
        <button className="login_a option-button" onClick={Customer_login}>
          Click Here
        </button>
      </div>
    </form>
  )
}

export default CustomerSignup;


// https://global-uploads.webflow.com/5ec58288fb88c8354e4ff63a/5ed6a583e460099ef51782de_Plate%201.jpg