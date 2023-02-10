import React from 'react';
import "./Form.css";



export default function CustomerSignup() {
  return (
    <>
       <main>
        <h2 className="my-3">Customer login</h2>
        <div className="input-group">

        <label htmlFor="" className="form-label">Enter your name</label>
        <input type="text" className="form-control" />
        <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your address</label>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your city</label>

            <input type="text" className='form-control' />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your state</label>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your contact no</label>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Enter your email</label>
            <input type="email" className="form-control" />
        </div>
        <div  className="input-group">
            <label htmlFor="" className="form-label">Enter your password</label>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <label htmlFor="" className="form-label">Confirm your password</label>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <button>Customer login</button>
        </div>
       </main>
    </>
  )
}
