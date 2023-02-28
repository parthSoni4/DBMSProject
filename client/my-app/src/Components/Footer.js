import React from 'react'
import "./Footer.css";
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>  {/* fragment tag */}
        <div className="container-fluid" id="footer">
            <div className="row">

            <div className="content-container">
                <div className="footer--pin">
                    <h3 class="">Available on</h3>
                </div>
                <div>
                    <span class="icons"><Icon icon="ri:facebook-box-fill" color="#3b5998" width="45" /></span>
                    <span class="icons"><Icon icon="mdi:twitter" color="#00acee" width="45" /></span>
                    <span class="icons"><Icon icon="ci:instagram" color="#b70068" width="45" /></span>
                    <span class="icons"><Icon icon="basil:youtube-solid" color="red" width="45" /></span>
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