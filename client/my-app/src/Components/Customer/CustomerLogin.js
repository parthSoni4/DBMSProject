import React from 'react'
import "../Form.css";

export default function CustomerLogin() {
  return (
    <main>
        <h2>Customer Login </h2>
        <div className="input-group">
            <input type="text" placeholder="Enter your name" className="form-control" />
        </div>
        <div className="input-group">
            <input type="text" placeholder="Enter your password" className="form-control" />
        </div>
        <div className="input-group">
            <button className="btn btn-default btn-primary">Submit</button>
        </div>
    </main>
  )
}
