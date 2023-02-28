import React from 'react'
import one from "../Images/one.jpg";
import two from "../Images/two.jpg";
import three from "../Images/three.jpg";


import "./Home.css"

export default function Home() {
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={one} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={two} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={three} className="d-block w-100" alt="..."/>
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
    </>
  )
}
