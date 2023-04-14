import React, { useState } from 'react'
import "../Form.css";
import axios from "axios";
import { Link , useNavigate } from 'react-router-dom';
import pic4 from "./FarmerSectionImage/farmer2.png";


export default function FarmerLoginPage() {
    const navigate = useNavigate("/root");

    const [name, changeName] = useState("");
    const [password, changePassword] = useState("");
    const [status, changeStatus] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const check_farmer = () => {
        axios.post("http://localhost:3001/check_farmer", {
            name: name,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.data === "wrong") {
                changeStatus("wrong username or password");
            }
            else {
                changeStatus("welcome");
                console.log(response.data[0].fname);
                const farmer_id = response.data[0].farmer_id;
                navigate(`../FarmerOption/farmer_id/${farmer_id}`, { state: { farmer_id } });
                sessionStorage.setItem("farmer_id", farmer_id);
            }
        })
    }

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <main className='main-fl'>
                <div className="container container-fl">
                    <div className="row">
                        <div className="col-md-6 col-6-text">



                            <h2 className='text-center'>Farmer login!</h2>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder='Enter your Username ...' onChange={(e) => { changeName(e.target.value); }} />
                            </div>
                            <div className="input-group">
                                <input type={showPassword ? 'text' : 'password'}
                                    className="form-control" placeholder="Enter your password ..." onChange={(e) => { changePassword(e.target.value); }} />
                            </div>
                            <div className="input-group">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={handleToggleShowPassword}
                                />
                                Show password
                            </div>
                            <span className="input-group">
                                <a href class="login_a" >Forgot password?</a>
                            </span>
                            <div className="input-group">
                                <button className="btn btn-default btn-primary option-button" onClick={check_farmer}>Submit</button>
                            </div>
                            <h3>{status}</h3>
                            <span>
                            <h5>Don't have an account?</h5>
                            <Link className="dropdown-item" aria-current="page" to="/Form">Click here!</Link>
                        </span>
                        </div>
                        
                        <div className="col-md-6">
                            <img src={pic4} className="img-fluid pic4" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
