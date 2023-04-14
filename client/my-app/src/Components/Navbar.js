import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Icon } from '@iconify/react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: "en",
            autodisplay: false
        }, "google_translate_element");
    };
    useEffect(() => {
        var addScript = document.createElement("script");

        addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="navbar-item">
                                <Link className="navbar-brand" to="/">
                                    {/*<Icon icon="mdi-light:home" width="30"/>*/}Home
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="navbar-brand" aria-current="page" to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="navbar-brand" aria-current="page" to="https://agmarknet.gov.in/PriceAndArrivals/CommodityDailyStateWise.aspx">
                                    Price List
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="navbar-brand" aria-current="page" to="/Contact">
                                    Feedback
                                </Link>
                            </li>
                            <li className="navbar-item dropdown">
                                <Link className="navbar-brand">
                                    Login
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/FarmerLoginPage">
                                            Farmer Login</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/CustomerLogin">
                                            Customer Login</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/Admin_login">
                                            Admin Login</Link>
                                    </li>
                                </ul>
                                {/*<Outlet></Outlet>*/}
                            </li>
                            <li className="navbar-item">
                            </li>
                            

                            <li className="navbar-item">
                            </li>
                            <div id="google_translate_element"></div>

                        </ul>
                    </div>
                    <span><img src="/logo.png" className="img1"></img></span>
                    <h2 className="company-name">FARM MART</h2>
                </div>                  
            </nav>
        </>
    );
}

{/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

{/* <Link className="nav-link active" aria-current="page" to="/" >Home</Link> */ }

{/* <Link to="/Form">Form</Link> */ }

{/*<li className="nav-item">
  <Link to="/">Home</Link> </li>*/}

{/* <li className="nav-item">
<Link className="navbar-brand" aria-current="page" to="/Payment">
    Payment check
</Link>
</li> */}
{/* <li className="nav-item">
<Link className="navbar-brand" aria-current="page" to="/ProductInsert">CreateProduct</Link>
</li> */}
{/* <li className="nav-item">
<Link className="navbar-brand" aria-current="page" to="/ProductDisplay">Product Display</Link>
</li> */}

{/* <Link className="nav-link active" aria-current="page" to="/customer">Customer</Link> */ }

{/* <li className="nav-item">
          <a className="nav-link active" href="/">Sign Up</a>
        </li> */}
{/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
{/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}

{/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

{/* <Link className="navbar-brand" aria-current="page" to="/trying">
                  Trying
                </Link> */}

