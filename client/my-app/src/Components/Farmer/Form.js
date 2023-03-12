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
  const [cpass, changeConfirmPassword] = useState("");
  const [pincode, changePincode] = useState("");
  const [errors, setErrors] = useState({});


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
    });

  };
  useEffect(() => {
    validateForm();
    const style = document.createElement('style');
    style.textContent = `body { background-image: url(${image}); }`;
    document.head.appendChild(style);
  },)

  const validateForm = () => {
    const errors = {};
    if (!fname) {
      errors.fname = "*";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(fname)) {
      errors.fname = "First name must characters only";
    }

    if (!lname) {
      errors.lname = "*";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(lname)) {
      errors.lname = "\nLast name must characters only";
    }

    if (!age) {
      errors.age = "*";
    } else if (!/^[0-9]+$/.test(age)) {
      errors.age = "\nAge must be a number";
    } else if (parseInt(age) < 18 || parseInt(age) > 120) {
      errors.age = '\nAge must be above 18';
    }

    if (!aadhar_no.trim()) {
      errors.aadhar_no = "*";
    } else if (aadhar_no.length < 12) {
      errors.aadhar_no = "\nAadhar number 12 digits long";
    }

    if (!phone_no.trim()) {
      errors.phone_no = "*";
    } else if (phone_no.length < 10) {
      errors.phone_no = "\nPhone number must be 10 digits long";
    }

    if (!unique_id.trim()) {
      errors.unique_id = "*";
    } else if (unique_id.length < 12) {
      errors.unique_id = "\nEnter the Unique number given by Govt.";
    }



    if (!city.trim()) {
      errors.city = "*";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(city)) {
      errors.city = "\nCity name should be charcters only";
    }

    if (!state.trim()) {
      errors.state = "*";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(state)) {
      errors.state = "\nState name should be charcters only";
    }

    if (!pincode.trim()) {
      errors.pincode = "*";
    } else if (pincode.length < 6) {
      errors.pincode = "\nPincode must be 6 digits long";
    }

    if (!password) {
      errors.password = "*";
    } else if (password.length < 8) {
      errors.password = "\nPassword must be 8 alphanumeric long";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
    }

    if (!cpass) {
      errors.cpass = "*Please enter a password and confirm it";
    } else if (password !== cpass) {
      errors.cpass = "Password do not match";
    }

    setErrors(errors);
  };

  const errorStyle = { color: "red" };

  return (
    <>
      {/* <div id="body-form"> */}
      <main>
        <form onSubmit={validateForm}>
          <div className="container" id="background">
            
              <h2 className="my-3 text-center">Farmer SignUp!</h2>
              {/* <span className="input-group-text">First and last name</span>
                 */}
              {/*<label htmlFor="" className="form-label">Enter your first and last name</label>*/}
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter your first name ..."
                  aria-label="First name"
                  className="our-form form-control"
                  name="fname"
                  onChange={(e) => {
                    ChangefName(e.target.value);
                  }}
                />
                {errors.fname && <span style={errorStyle}>{errors.fname}</span>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter your last name ..."
                  aria-label="Last name"
                  className="form-control"
                  id="lname"
                  onChange={(e) => {
                    ChangelName(e.target.value);
                  }}
                />
                {errors.lname && <span style={errorStyle}>{errors.lname}</span>}
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
                {errors.age && <span style={errorStyle}>{errors.age}</span>}
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
                {errors.aadhar_no && <span style={errorStyle}>{errors.aadhar_no}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your unique ID</label>*/}
                <input
                  type="text"
                  placeholder="Enter your unique id ..."
                  className="form-control"
                  name="unique_id"
                  onChange={(e) => {
                    changeUnique_id(e.target.value);
                  }}
                />
                {errors.unique_id && <span style={errorStyle}>{errors.unique_id}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your phone no</label>*/}
                <input
                  type="text"
                  placeholder="Enter your phone number ..."
                  className="form-control"
                  name="phone_no"
                  onChange={(e) => {
                    changePhone_no(e.target.value);
                  }}
                />
                {errors.phone_no && <span style={errorStyle}>{errors.phone_no}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Select your city</label>*/}
                <input
                  type="text"
                  placeholder="Enter your city ..."
                  className="form-control"
                  name="city"
                  onChange={(e) => {
                    changeCity(e.target.value);
                  }}
                />
                {errors.city && <span style={errorStyle}>{errors.city}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Select your state</label>*/}
                <input
                  type="text"
                  placeholder="Enter your state ..."
                  className="form-control"
                  name="state"
                  onChange={(e) => {
                    changeState(e.target.value);
                  }}
                />
                {errors.state && <span style={errorStyle}>{errors.state}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Pincode</label>*/}
                <input
                  type="text"
                  placeholder="Enter your pincode ..."
                  className="form-control"
                  name="pincode"
                  onChange={(e) => {
                    changePincode(e.target.value);
                  }}
                />
                {errors.pincode && <span style={errorStyle}>{errors.pincode}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Enter your password</label>*/}
                <input
                  type="password"
                  placeholder="Enter password ..."
                  className="form-control"
                  name="password"
                  onChange={(e) => {
                    changePassword(e.target.value);
                  }}
                />
                {errors.password && <span style={errorStyle}>{errors.password}</span>}
              </div>
              <div className="input-group">
                {/*<label htmlFor="" className="form-label">Confirm password</label>*/}
                <input
                  type="password"
                  placeholder="Confirm password ..."
                  className="form-control"
                  name="cpass"
                  onChange={(e) => {
                    changeConfirmPassword(e.target.value);
                  }}
                />
                {errors.cpass && <span style={errorStyle}>{errors.cpass}</span>}
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

            
          </div>
        </form>
      </main>
      {/* </div> */}
    </>
  )
}
