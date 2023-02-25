import React from 'react'
import "./Footer.css";
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>  {/* fragment tag */}
            <div className="content-container">
                <div className="footer--pin">
                    <h3 class="">Available on</h3>
                </div><br/>
                <div>
                    <span class="icons"><Icon icon="ri:facebook-box-fill" color="#3b5998" width="45" /></span>
                    <span class="icons"><Icon icon="mdi:twitter" color="#00acee" width="45" /></span>
                    <span class="icons"><Icon icon="ci:instagram" color="#b70068" width="45" /></span>
                    <span class="icons"><Icon icon="basil:youtube-solid" color="red" width="45" /></span>
                </div>
            </div>
        </>
    )
}