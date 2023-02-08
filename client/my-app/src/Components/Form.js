import React from "react";
import "./Form.css"

export default function form() {
  return (
    <>
      <form>
        <h2 class="my-3">Farmer's Login</h2>
        <div class="input-group">
          {/* <span class="input-group-text">First and last name</span>
           */}
           <label htmlFor="" className="form-label">Enter your first and last name</label>
          <input type="text" aria-label="First name" class="our-form form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>
        <div className="input-group">
          {/* <span className="input-group-text">Enter age</span> */}
          <label htmlFor="" className="form-label">Enter your age</label>
          <input type="number" className="form-control" />
        </div>

        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your aadhar card no</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your unique ID</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your phone no</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your city</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your state</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Pincode</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Enter your password</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <label htmlFor="" className="form-label">Confirm password</label>
          <input type="text" className="form-control" />
        </div>
        <div class="mb-3">
         <label for="formFile" class="form-label">Upload your image</label>
         <input class="form-control" type="file" id="formFile"/>
        </div>
        <div className="mb-3" >
           <input type="submit" id="button" />
        </div>

        
      </form>
      
      
    </>
  );
}