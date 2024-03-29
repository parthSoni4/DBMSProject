import React, { useState, useEffect } from 'react'
import "../Form.css"
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './AdminOption';
import "./All.css";
import image2 from "../HomeImages/front3.jpg";
import swal from "sweetalert";


export default function AdminLogin() {

  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.textContent = `body { background-image: url(${image2}); background-size: cover; background-repeat: no-repeat; }`;
  //   document.head.appendChild(style);

  // },)

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
        swal({
          title: "Welcome",
          icon: "success",
          button: "Ok"
        });

      }
      else {
        setmsge("Invalid username or password");
      }
    })
  }

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const message = {
    color: "red"
  };

  return (
    <>
      <main className='main-fl'>
        <div className="container container-fl">
          <div className="row">

            <div className="col-md-6 col-6-text">
              <div>
                <Link className="dropdown-item" aria-current="page" to="/">
                  Back</Link>
              </div><br />
              {/* <button onClick={handleClick}>Go to login</button> */}
              <h2>Admin login!</h2><br />
              <div>
                <span style={message}>{
                  <h5>{msge}</h5>
                }</span>
              </div>
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
              <div class="text-center">
                <button className="btn btn-lg btn-primary" onClick={admin_login}>Submit</button>
              </div>

            </div>
            <div className="col-md-6">

              <img src={image2} alt="" className='img-responsive img-cl' />
            </div>
          </div>

        </div>

      </main>
    </>
  )
}
