import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import swal from "sweetalert";


function Footer() {
    const terms = (e) => {
        e.preventDefault();
        swal({
            title: "Terms and Conditions",
            text: "The information what you provide must be genuine and accurate, in case of violation admin as all the rights to remove you from the site.",
            icon: "info",
            button: "Close"
        });
    };

  return (
    <div className="content-container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Contact Us</h4>
            <h5 className="list-unstyled">
              <li>Tel : 9876543210</li>
              <li>Email ID: farmmart@gmail.com</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Explore</h4>
            <ui className="list-unstyled">
              <li><a href="About" >About</a></li>
              <li><a href={"https://agmarknet.gov.in/PriceAndArrivals/CommodityDailyStateWise.aspx"}>Price list</a></li>
              <li><a href="Contact">Feedback</a></li>
              <li><a href={"https://agricoop.nic.in/en/Major#gsc.tab=0"}>Govt. Scheme</a></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Available On</h4>
            <ui className="list-unstyled">
                <li><Link to="https://www.facebook.com/">
                    <span className='icon1'><Icon icon="ri:facebook-box-fill" width="38" />Facebook</span>
                </Link></li>

                <li><Link to="https://twitter.com/?lang=en">
                    <span className='icon2'><Icon icon="mdi:twitter" width="38" />Twitter</span>
                </Link></li>
                
                <li><Link to="https://www.instagram.com/">
                    <span className='icon3'><Icon icon="ci:instagram" width="38" />Instagram</span>
                </Link></li>

                <li><Link to="https://www.youtube.com/">
                    <span className='icon4'><Icon icon="basil:youtube-solid" width="38" />Youtube</span>
                </Link></li>
                </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
          &copy;{new Date().getFullYear()} <a href="/" className="terms" >FARM MART</a> | All rights reserved | <a href="#" onClick={terms} className="terms">
            Terms and Conditions</a> | Privacy
          </p>
        </div>
    </div>
  );
}

export default Footer;