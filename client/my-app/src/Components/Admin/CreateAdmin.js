import React,{useState} from 'react';
import Axios from "axios";


export default function CreateAdmin() {
  const[username,changeUsername]=useState("");
  const[password,changePassword]=useState("");
  const check=()=>{
    Axios.post("http://localhost:3001/create_admin",{
      username: username,
      password: password
    }).then((response)=>{
      console.log(response);
    })
  }
  return (

    <>
    <main>
      <h2>Create Admin</h2>
      <div className="input-group">
        <input type="text" className="form-control" placeholder='Enter the username' onChange={(e)=>{changeUsername(e.target.value);}}/>

      </div>
      <div className="input-group">
        <input type="text" className="form-control" onChange={(e)=>{changePassword(e.target.value);}}/>

      </div>
      <button onClick={check} >Submit</button>
    </main>
    </>
  )
}
