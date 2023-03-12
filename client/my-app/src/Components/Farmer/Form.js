import React, { useEffect, useState } from "react";
import "../Form.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import farmer2 from "./FarmerSectionImage/farmer3.png";
import image from "./FarmerSectionImage/background14jpg.jpg";



export default function Form() {
  const navigate = useNavigate("/root");

  const FarmerLoginPage = () => {
    navigate("../FarmerLoginPage");
  };

  const [fname, ChangefName] = useState("");
  const [lname, ChangelName] = useState("");
  const [age, ChangeAge] = useState("");
  const [aadhar_no, changeAadhar_no] = useState("");
  const [unique_id, changeUnique_id] = useState("");
  const [phone_no, changePhone_no] = useState("");
  const [city, changeCity] = useState("");
  const [state, changeState] = useState("");
  const [password, changePassword] = useState("");
  const [pincode, changePincode] = useState("");

  const farmer_login = () => {
    console.log("function called");
    Axios.post("http://localhost:3001/farmer_login", {
      fname: fname,
      lname: lname,
      aadhar_no: aadhar_no,
      age: age,
      phone_no: phone_no,
      city: city,
      state: state,
      password: password,
      pincode: pincode,
      unique_id: unique_id,
    }).then((response) => {
      console.log(response);
      if(response.data=="got this")
      {
        navigate("../FarmerLoginPage");        
      }
    });

  };
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `body { background-image: url(${image}); background-repeat: repeat; }`;
    document.head.appendChild(style);

  }, )
  
  return (
    <>
      {/* <div id="body-form"> */}
        <main>
          <div className="container" id="background">
            <div className="row">
              <h2 className="my-3 text-center">Farmer SignUp!</h2>
              <div className="input-group">
                {/* <span className="input-group-text">First and last name</span>
                 */}
                {/*<label htmlFor="" className="form-label">Enter your first and last name</label>*/}
                <input
                  type="text"
                  placeholder="Enter your first name ..."
                  aria-label="First name"
                  className="our-form form-control"
                  onChange={(e) => {
                    ChangefName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter your last name ..."
                  aria-label="Last name"
                  className="form-control"
                  onChange={(e) => {
                    ChangelName(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/* <span className="input-group-text">Enter age</span> */}
                {/*<label htmlFor="" className="form-label">Enter your age</label>*/}
                <input
                  type="number"
                  placeholder="Enter your age ..."
                  className="form-control"
                  onChange={(e) => {
                    ChangeAge(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/* <label htmlFor="" className="form-label">Enter your aadhar card no</label>*/}
                <input
                  type="text"
                  placeholder="Enter your aadhar number ..."
                  className="form-control"
                  onChange={(e) => {
                    changeAadhar_no(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your unique ID</label>*/}
                <input
                  type="text"
                  placeholder="Enter your unique id ..."
                  className="form-control"
                  onChange={(e) => {
                    changeUnique_id(e.target.value);
                  }}
                />{" "}
                {/* <form action="farmer_login" method="POST"> */}{" "}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your phone no</label>*/}
                <input
                  type="text"
                  placeholder="Enter your phone number ..."
                  className="form-control"
                  onChange={(e) => {
                    changePhone_no(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Select your city</label>*/}
                <input
                  type="text"
                  placeholder="Enter your city ..."
                  className="form-control"
                  onChange={(e) => {
                    changeCity(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Select your state</label>*/}
                <input
                  type="text"
                  placeholder="Enter your state ..."
                  className="form-control"
                  onChange={(e) => {
                    changeState(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Pincode</label>*/}
                <input
                  type="text"
                  placeholder="Enter your pincode ..."
                  className="form-control"
                  onChange={(e) => {
                    changePincode(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your password</label>*/}
                <input
                  type="text"
                  placeholder="Enter password ..."
                  className="form-control"
                  onChange={(e) => {
                    changePassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Confirm password</label>*/}
                <input
                  type="text"
                  placeholder="Confirm password ..."
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                {/* <input type="text" className="form-control" /> */}{" "}
              </div>
              <div className="mb-3">
                <button className="buton" onClick={farmer_login}>
                  Sign Up
                </button>
              </div>
              <div>
                <h5 className="my-3">Already have an account?</h5>
                <button className="login_a" onClick={FarmerLoginPage}>
                  Click Here
                </button>
              </div>
              {/* </form> */}
              {/* <div className="col-md-5">
            <img src={farmer2} alt="" className=" img-fluid" />
          </div> */}{" "}
            </div>
          </div>
        </main>
      {/* </div> */}
    </>
  );
}
