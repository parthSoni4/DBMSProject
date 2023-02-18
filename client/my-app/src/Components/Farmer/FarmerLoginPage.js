import React from 'react'
import "../Form.css";
export default function FarmerLoginPage() {
  return (
    <>
    <main>
        <h2>Login Page for farmer</h2>
        <div className="input-group">
            <input type="text" className="form-control" placeholder='Enter yourn name'/>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="enter your password"/>
        </div>
        <div className="input-group">
            <button className="btn btn-default btn-primary">Submit</button>
        </div>
    </main>
    </>
  )
}
