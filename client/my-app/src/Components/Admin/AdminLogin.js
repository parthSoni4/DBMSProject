import React, { useState, useEffect } from 'react'
import "../Form.css"
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminOption';
import image2 from "../HomeImages/flower.jpg";

export default function AdminLogin() {

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `body { background-image: url(${image2}); background-size: cover; background-repeat: no-repeat; }`;
    document.head.appendChild(style);

  },)

  const navigate = useNavigate("/root");
  const [msge, setmsge] = useState("");
  const handleClick = () => {
    navigate("../AdminOption");
  };


  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const admin_login = () => {
    console.log("admin login")
    Axios.post("http://localhost:3001/admin_login", {
      username: username,
      password: password
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.data == "right") {
        navigate("../AdminOption");

      }
      else {
        setmsge("Invalid username or password");
      }
    })
  }

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main>
        {/* <button onClick={handleClick}>Go to login</button> */}
        <h2>Admin login</h2>
        <div className="input-group">
          <input type="text" placeholder="Enter your username ..." className="form-control" onChange={(e) => { changeUsername(e.target.value); }} />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password ..." className="form-control" onChange={(e) => { changePassword(e.target.value); }} />
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleToggleShowPassword}
          />
          Show password
        </div>
        <span>
          <a href class="login_a" >Forgot password?</a>
        </span>
        <div>
          <h3>
            {msge}
          </h3>
        </div>
        <button className="btn btn-primary option-button" onClick={admin_login}>Submit</button>

      </main>
    </>
  )
}
