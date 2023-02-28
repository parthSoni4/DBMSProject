import React from 'react'
import "./Footer.css";
import "./Form.css";
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>  {/* fragment tag */}
            <div className="content-container">
                    <span className='foot--page'><a href="About" >About</a></span>
                    <span className='foot--page'><a href="Contact" >Feedback</a></span>
                    <span className='foot--page'><a href="#" >Product Price</a></span>
                    <span className='foot--page'><a href="#" >Govt. Scheme</a></span>
                    <span className='foot--page'><a href="#" >Organic Certificate </a></span>
                <br/><br/>
                <div className="footer--pin">
                    <h3 class="">Available on</h3>
                </div>
                <a href='https://www.facebook.com/'>
                    <span className='icon1'><Icon icon="ri:facebook-box-fill" width="38" /></span>
                </a>
                <a href='https://twitter.com/?lang=en'>
                    <span className='icon2'><Icon icon="mdi:twitter" width="38" /></span>
                </a>
                <a href='https://www.instagram.com/'>
                    <span className='icon3'><Icon icon="ci:instagram" width="38" /></span>
                </a>
                <a href='https://www.youtube.com/'>
                    <span className='icon4'><Icon icon="basil:youtube-solid" width="38" /></span>
                </a><br /><br />
                <div>
                    <label>&copy; Copyright 2023,  All Rights Reserved</label>
                </div>
            </div>
        </>
    )
}