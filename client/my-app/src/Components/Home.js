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
import Footer from "./Footer";
import "./Home.css"
import display from "./HomeImages/picture.jpg";
import display2 from "./HomeImages/picture2.jpg";


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
          <h2 className='head-size'>Our mottos</h2>
          <p className='para-size'>
            To build platform for farmer to sell their goods directly
          </p>
          <p className='para-size'>
            To remove the intermediate people
          </p>
          <p className='para-size'>
            To save the farmer of this country
          </p>
          <p className='para-size'>
            Provide fresh and organic vegetable to the Customer
          </p>
          <p>
            
          </p>
        </div>
        </div>
      </div>


      <section className="second-part">
        <br />
        <br />
        <br />
        <br />
        <h2> Get Involved with Mother Nature</h2>
        <p> One of the main goal of our organiation is to reduce the distance our generation and mother nature</p>
        <p>The new Generation will understand the beauty of mother earth, how plants grow and how difficult our farmer face </p>
      </section>


      <section className="two-image">
        <div className="container-fluid">
          <div className="row row-2">
            <div className="col-md-5">
                  <h2 className='text-center'> Our Farms </h2>
                  <p className='text-center row-2-para' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore laboriosam nemo dignissimos beatae ab at. Aut officiis, repudiandae suscipit sunt ex tempore delectus esse ipsa totam commodi aliquam minus.
                  </p>
            </div>
            <div className="col-md-7">
                <img src={display} alt="" className='img-cl'/>
            </div>
          </div>
          <div className="row row-2">
            <div className="col-md-7">
                  <img src={display2} alt="" className="img-cl" />
            </div>
            <div className="col-md-5">
              <h2 className="text-center">Family visit</h2>
            <p className='text-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, distinctio? Autem exercitationem esse consequatur veniam, deleniti nesciunt voluptate, fugiat molestias voluptatibus temporibus facere officiis ipsam et doloremque beatae est debitis. Quae dicta deserunt, excepturi iure temporibus amet beatae culpa dolorem quo natus ex est iste ratione facere perspiciatis, in autem!
            </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>      
    </>
  )
}
