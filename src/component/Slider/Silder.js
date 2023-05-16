import React, { useState } from 'react'
import Slider from "react-slick";
// import { AiOutlineArrowLeft } from "react-icons/ai";

import img1 from "../images/offer-1.png";
import img2 from "../images/offer-2.png";
import img3 from "../images/offer-3.png";


export default function Silder() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        
      };
  return (
    <div>
         <div>
        <Slider {...settings} className='ms-5'>
          <div className=''>
            <img src={img1} alt="img1 Loading" className='img-fluid' style={{width:"95%",margin:'5px'}}/>
          </div>
          <div >
          <img src={img2} alt="img1 Loading" style={{width:"95%",margin:'5px'}}/>

          </div>
          <div>
          <img src={img3} alt="img1 Loading" style={{width:"95%",margin:'5px'}}/>

          </div>
          <div>
          <img src={img1} alt="img1 Loading" style={{width:"95%",margin:'5px'}}/>

          </div>
          <div>
          <img src={img2} alt="img1 Loading" style={{width:"95%",margin:'5px'}}/>
          </div>
          <div>
          <img src={img3} alt="img1 Loading" style={{width:"95%",margin:'5px'}}/>
          </div>
        </Slider>
      </div>
    </div>
  )
}
