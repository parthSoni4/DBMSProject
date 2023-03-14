import React,{useState, useEffect} from 'react'
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

  }, )

  const navigate=useNavigate("/root");
    
    const handleClick=()=>{
      navigate("../AdminOption");
    };
  

  const[username, changeUsername]=useState("");
  const[password,changePassword]=useState("");

  const admin_login=()=>{
    console.log("admin login")
    Axios.post("http://localhost:3001/admin_login",{
      username: username,
      password: password
    }).then((response)=>{
      console.log(response);
      console.log(response.data);
      if(response.data=="right")
      {
      navigate("../AdminOption");

      }
    })
  }

  return (
    <>
        <main>
          {/* <button onClick={handleClick}>Go to login</button> */}
            <h2>Admin login</h2>
            <div className="input-group">
                {/*Enter your username*/}
                <input type="text" placeholder="Enter your username ..." className="form-control" onChange={(e)=>{changeUsername(e.target.value);}}/>
            </div>
            <div className="input-group">
                {/*Enter your password*/}
                <input type="text" placeholder="Enter your password ..." className="form-control" onChange={(e)=>{changePassword(e.target.value);}}/>
            </div>
            <button className="btn btn-primary" onClick={admin_login}>Submit</button>

        </main>
    </>
  )
}
