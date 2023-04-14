import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';


export default function CreateAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    phone_no: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "User name is required";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.username)) {
      errors.username = "User name must be characters only";
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

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
    else {
      console.log("Admin created success");
      swal({
        title: "New Admin created!",
        text: "Admin data is stored successfully",
        icon: "success",
        button: "OK",
      });
      axios.post("http://localhost:3001/create_admin", {
        username: formData.username,
        phone_no: formData.phone_no,
        email: formData.email,
        password: formData.password,

      }).then((response) => {
        console.log(response);
      });
      setFormData({
        username: "",
        phone_no: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  const errorStyle = { color: "red" };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (

    <>
      <form onSubmit={handleSubmit}>
        <h2>Create Admin</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your user name ..."
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={errorStyle}>{errors.username}</p>}
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Set password ..."
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


        <button className='option-button'>Submit</button>
      </form>
    </>
  )
};
