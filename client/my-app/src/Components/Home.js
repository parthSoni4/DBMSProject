import React from 'react'
import one from "../Images/one.jpg";
import two from "../Images/two.jpg";
import three from "../Images/three.jpg";
import pic4 from "../Images/pic6.jpg"
import wow from "./Farmer/FarmerSectionImage/wow.jpg"
import wow2 from "./Farmer/FarmerSectionImage/wow2.jpg"
import tomato from "./HomeImages/tomato.avif";
import mango from "./HomeImages/mango2.avif";
import color from "./HomeImages/color.jpeg";
import color2 from "./HomeImages/color2.jpeg";
import sunrise from "./HomeImages/sunrise4.jpeg";

import "./Home.css"

export default function Home() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={wow} className="d-block w-100 display"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-100   display" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={wow2} className="d-block w-100 display" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid services">
        <h2 className="text-center">Our Services</h2>
        <div className="row">
          <div className="col-sm service-col">
            <img src={tomato} alt="" className="img-responsive card-img" />
            <p className="text-center">
              Fresh organic and non organic vegetables
            </p>
          </div>
          <div className="col-sm service-col">
          <img src={mango} alt="" className="img-responsive card-img" />
              <p className="text-center">
                Availability of seasonal fruits
              </p>
          </div>
          <div className="col-sm service-col">
          <img src={color} alt="" className="img-responsive card-img" />
              <p className="text-center">
                Eat the rainbow of vegetables
              </p>
          </div>
          <div className="col-sm service-col">
          <img src={color2} alt="" className="img-responsive card-img" />
            <p className="text-center">
              Knowledge about the fertilizer and pesticides
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid our-moto">
        <div className="row moto-row">
        <h2 className='text-center'>Our moto</h2>

        <div className="col-sm col-moto moto-img">
          <p>o</p>
          
          {/* <img src={sunrise} alt="" className="img-responsive moto-img" /> */}
        </div>
        <div className="col-sm col-moto moto-text">
          <p>text</p>
        </div>
        </div>
      </div>
    </>
  )
}
