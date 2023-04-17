import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import "../Myacc.css";

export default function FarmerOption() {
    const navigate = useNavigate("/root");
    const customer_id = sessionStorage.getItem('customer_id');
    console.log("customer_id : " + customer_id);
    const [customer, setCustomer] = useState({ fname: '', lname: '', phone_no: 0, email: '', address: '', state: '', city: '', password: '' })


    useEffect(() => {
        Axios.get(`http://localhost:3001/read_customer_account/${customer_id}`)
            .then(res => {
                console.log("response :", res.data); // Update logging statement
                setCustomer(res.data);
                console.log("frontend customer :", customer); // Update logging statement
            })
            .catch((err) => console.log(err));
    }, []);


    function customeroption() {
        navigate(`../CustomerOption/customer_id/${customer_id}`);
    }
    return (
        <>
            <div className='container'>
                <h2 className='sub-head'>My Account</h2><br />
                <div className='row'>
                    <div className='col'>
                        <label>First Name</label>
                        <input type="text" className="form-control" aria-label="First name" value={customer.fname} />
                    </div>
                    <div className='col'>
                        <label>Last Name</label>
                        <input type="text" className="form-control" aria-label="Last name" value={customer.lname} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col'>
                        <label>Phone number</label>
                        <input type="text" className="form-control" aria-label="phone number" value={customer.phone_no} />
                    </div>
                    <div className='col'>
                        <label>Email</label>
                        <input type="text" className="form-control" aria-label="email" value={customer.email} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col'>
                        <label>Address</label>
                        <input type="text" className="form-control" aria-label="address" value={customer.address} />
                    </div>
                    <div className="col">
                        <label>City</label>
                        <input type="text" className="form-control" aria-label="city" value={customer.city} />
                    </div>
                </div><br />
                <div className='row'>
                    <div className="col-6">
                        <label>State</label>
                        <input type="text" className="form-control" aria-label="State" value={customer.state} />
                    </div>
                </div><br /><br />
                <div class="d-grid gap-2 col-4 mx-auto">
                    <button class="btn btn-primary" type="button" onClick={customeroption}>Back</button>
                </div><br />
            </div>
        </>
    )


}
