import React,{useState} from 'react'
import "./Form.css"
import Axios from "axios";

export default function AdminLogin() {
  const[username, changeUsername]=useState("");
  const[password,changePassword]=useState("");

  const admin_login=()=>{
    console.log("admin login")
    Axios.post("http://localhost:3001/admin_login",{
      username: username,
      password: password
    }).then((response)=>{
      console.log(response);
    })
  }

  return (
    <>
        <main>
            <h2>Admin login</h2>
            <div className="input-group">
                {/*Enter your username*/}
                <input type="text" placeholder="Username" className="form-control" onChange={(e)=>{changeUsername(e.target.value);}}/>
            </div>
            <div className="input-group">
                {/*Enter your password*/}
                <input type="text" placeholder="Password" className="form-control" onChange={(e)=>{changePassword(e.target.value);}}/>
            </div>
            <button class="butonadmin" onClick={admin_login}>Submit</button>

        </main>
    </>
  )
}
