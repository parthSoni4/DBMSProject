import React, { useState } from 'react'
import "../Form.css";
import "./loginCustomer.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import image from "../HomeImages/front2.avif";
import swal from "sweetalert";


export default function CustomerLogin() {
    const navigate = useNavigate("/root");

    const [name, changeName] = useState("");
    const [password, changePassword] = useState("");
    const [status, changeStatus] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const check_customer = () => {
        axios.post("http://localhost:3001/check_customer", {
            name: name,
            password: password
        }).then((response) => {
            // console.log(response);
            if (response.data === "wrong") {
                changeStatus("Invalid username or password");
            }
            else {
                changeStatus("Welcome");
                console.log(response.data[0].fname);

                const customer_id = response.data[0].customer_id;
                swal({
                    title: "Welcome",
                    icon: "success",
                    button: "Ok"
                });
                navigate(`../CustomerOption/customer_id/${customer_id}`);
                sessionStorage.setItem("customer_id", customer_id);
            }
        })
    };

    // useEffect(() => {
    //     document.body.style.backgroundColor = "pink";
    //     //   document.body.style.backgroundColor="red";
    // }, [])

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const message = {
        color: "red"
    };

    return (
        <main className="main-fl">
            <div className="container container-fl">
                <div className="row">
                    <div className="col-md-6 col-6-text">
                        <div>
                            <Link className="dropdown-item" aria-current="page" to="/">
                                Back</Link>
                        </div><br />
                        <h2>Customer login!</h2><br />
                        <div>
                            <span style={message}>{
                                <h5>{status}</h5>
                            }</span>
                        </div>

                        <div className="input-group">
                            <input type="text" placeholder="Enter your Username ... (your first name)" className="form-control" onChange={(e) => { changeName(e.target.value); }} />
                        </div>
                        <div className="input-group">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password ..." className="form-control" onChange={(e) => { changePassword(e.target.value); }} />
                        </div>
                        <div className="input-group">
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={handleToggleShowPassword}
                            />
                            Show password
                        </div>
                        <div class="text-center">
                            <button className="btn btn-lg btn-primary" onClick={check_customer}>Submit</button>
                        </div><br />


                        <span>
                            <h5>Don't have an account?</h5>
                            <Link className="dropdown-item" aria-current="page" to="/Customer_login">
                                Click here!</Link>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <img src={image} alt="" className="img-responsive img-cl" />
                    </div>
                </div>

            </div>

        </main>
    )
}
