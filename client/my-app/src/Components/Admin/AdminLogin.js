import React,{useState} from 'react'
import "../Form.css"
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminOption';

export default function AdminLogin() {
 

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
            <button className="butonadmin" onClick={admin_login}>Submit</button>

        </main>
    </>
  )
}
