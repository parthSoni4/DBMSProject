import React from 'react'
import "./Footer.css";
import "./Form.css";
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>  {/* fragment tag */}
        <div className="container-fluid" id="footer">
            <div className="row">

            <div className="content-container">
                    <span className='foot--page'><a href="About" >About</a></span>
                    <span className='foot--page'><a href="Contact" >Feedback</a></span>
                    <span className='foot--page'><a href="#" >Product Price</a></span>
                    <span className='foot--page'><a href="#" >Govt. Scheme</a></span>
                    <span className='foot--page'><a href="#" >Organic Certificate </a></span>
                <br/><br/>
                <div className="footer--pin">
                    <h3 class="">Available on</h3>
                </div><br/>
                <div>
                    <label>&copy; Copyright 2023,  All Rights Reserved</label>
                </div>
            </div>
            <div className="row">
                <input type="Email" placeholder='Enter your mail' className='form-control email-control' />
            </div>
            <div className="row">
                <div className="col-sm-4">
                    logo
                    {/* <span>Tagline</span> */}
                </div>
                <div className="col-sm-4">
                    Terms And conditions
                </div>
                <div className="col-sm-4">
                    About us
                </div>
            </div>

            </div>
            <div className="row">
            All right reserved &bnsp; FarmMart.com
            </div>
        </div>
        </>
    )
}