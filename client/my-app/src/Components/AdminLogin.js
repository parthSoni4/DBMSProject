import React from 'react'
import "./Form.css"

export default function AdminLogin() {
  return (
    <>
        <main>
            <h2>Admin login</h2>
            <div className="input-group">
                Enter your username
                <input type="text" className="form-control" />
            </div>
            <div className="input-group">
                Enter your password
                <input type="text" className="form-control" />
            </div>
            <button>Submit</button>

        </main>
    </>
  )
}
