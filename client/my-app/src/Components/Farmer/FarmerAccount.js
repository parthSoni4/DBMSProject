import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import "../Myacc.css";

export default function FarmerOption() {
    const navigate = useNavigate("/root");
    const farmer_id = sessionStorage.getItem('farmer_id');
    console.log("farmer_id : " + farmer_id);
    const [farmer, setFarmer] = useState({ fname: '', lname: '', age: 0, aadhar_no: 0, unique_id: '', phone_no: 0, state: '', city: '', password: '', pincode: 0 })


    useEffect(() => {
        Axios.get(`http://localhost:3001/read_farmer_account/${farmer_id}`)
            .then(res => {
                console.log("response :", res.data); // Update logging statement
                setFarmer(res.data);
                console.log("frontend farmer :", farmer); // Update logging statement
            })
            .catch((err) => console.log(err));
    }, []);

    function farmeroption() {
        navigate(`../FarmerOption/farmer_id/${farmer_id}`, { state: { farmer_id } });
    }

    return (
        <>
            <div className='container'>
            <h2 className='sub-head'>My Account</h2><br />
                <div className='row'>
                    <div className='col'>
                        <label>First Name</label>
                        <input type="text" className="form-control" aria-label="First name" value={farmer.fname} />
                    </div>
                    <div className='col'>
                        <label>Last Name</label>
                        <input type="text" className="form-control" aria-label="Last name" value={farmer.lname} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col'>
                        <label>Age</label>
                        <input type="text" className="form-control" aria-label="age" value={farmer.age} />
                    </div>
                    <div className='col'>
                        <label>Aadhar number</label>
                        <input type="text" className="form-control" aria-label="aadhar no" value={farmer.aadhar_no} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col'>
                        <label>Unique ID</label>
                        <input type="text" className="form-control" aria-label="unique id" value={farmer.unique_id} />
                    </div>
                    <div className='col'>
                        <label>Phone number</label>
                        <input type="text" className="form-control" aria-label="phone number" value={farmer.phone_no} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className="col">
                        <label>City</label>
                        <input type="text" className="form-control" aria-label="city" value={farmer.city} />
                    </div>
                    <div className="col">
                        <label>State</label>
                        <input type="text" className="form-control" aria-label="state" value={farmer.state} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className="col-6">
                        <label>Pincode</label>
                        <input type="text" className="form-control" aria-label="pincode" value={farmer.pincode} />
                    </div>
                </div><br /><br />
                <div class="d-grid gap-2 col-4 mx-auto">
                    <button class="btn btn-primary" type="button" onClick={farmeroption}>Back</button>
                </div><br />
               
            </div>

        </>
    )


}
