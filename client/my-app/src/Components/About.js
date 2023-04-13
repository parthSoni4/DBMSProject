import React from 'react';
import "./About.css";
import farmer1 from "./HomeImages/farmer1.jpg";
import { useEffect } from 'react';
import image from "./HomeImages/farmer1.jpg";

export default function About() {
    // useEffect(() => {
    //     const style = document.createElement('style');
    //     style.textContent = `body { background-image: url(https://soygrowers.com/wp-content/uploads/2019/02/hompage-hero-img.jpg); }`;
    //     document.head.appendChild(style);
    
    //   }, )
    return (
        <>  {/* fragment tag */}
            <main className='main-about'>
                <section className="heading-about">
                    <h2> About us</h2>
                </section>
                <div className="container about-container">
                    {/* <h2>About us</h2> */}
                    <div className="row row-about">
                        {/* <div className="col-sm">
                             <img src={farmer1} alt="" className='img-responsive about-img'/>
                        </div> */}
                        <div className="col-sm">
                            <h2 className='text-center'>
                                Friends for our farmer
                            </h2>
                            <p className='text-center about-text'>
                                This website is made for our beloved farmer. This is a small try to help them financially and increase their profit percentage. This website aim to bridge the gap between the customer and farmer. We want customer to connect with the farmer and know the importance of agriculture in today's wortld. 
                            </p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}