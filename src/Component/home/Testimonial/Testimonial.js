import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay])


export default function Testimonial() {
  return (
    <>
      <div className="container">
        <h3 class="d-flex justify-content-start title align-right "><b class="mb-3">Testimonials</b></h3>     
          <Swiper autoplay={{ delay: 3000 }} navigation={true} className="mySwiper">
            <SwiperSlide>
              <div className="card">
                <img className="image-cover" src="https://i.imgur.com/Ur43esv.jpg" alt="" />
                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                <p class="overview"><b>Paula Wilsons</b> <br /> Seo Analyst </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="image-cover" src="https://i.imgur.com/Ur43esv.jpg" alt="" />
                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                <p class="overview"><b>Paula Wilsons</b> <br /> Seo Analyst </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="image-cover" src="https://i.imgur.com/Ur43esv.jpg" alt="" />
                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                <p class="overview"><b>Paula Wilsons</b> <br /> Seo Analyst </p>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </>
      )
}


