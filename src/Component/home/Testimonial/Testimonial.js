import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Ourservice() {
    return (
        <>
            <div className="background-css">
                <div className="container">
                    <div className="row pt-t mb-5">
                    <h3 class="d-flex justify-content-start title align-right "><b class="mb-3">Testimonials</b></h3>     
                    <Swiper 
                        slidesPerView={3} 
                        spaceBetween={30} 
                        pagination={{"clickable": true}} 
                        breakpoints={{
                            "@0.00": {
                              "slidesPerView": 1,
                              "spaceBetween": 10
                            },
                            "@0.75": {
                              "slidesPerView": 1,
                              "spaceBetween": 20
                            },
                            "@1.00": {
                              "slidesPerView": 1,
                              "spaceBetween": 40
                            },
                            "@1.50": {
                              "slidesPerView": 1,
                              "spaceBetween": 50
                            }
                          }}
                        className="mySwiper">
                            <SwiperSlide style={{marginBottom:'1em'}}>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                    <img className="image-cover"  src={window.location.origin + `/Assets/image/Testimonials/kushal_archaya.jpg`} alt="." />
                                        <div className="card-body news-stories-heading">
                                        <p class="testimonial">It was wonderful working with the young and energetic team of Amakomaya. Covid Vaccine Equity Project (CVEP) supported Amakomaya for application development and piloting the system in the Tokha municipality.  We look forward to partnering in future projects.</p>
                                        <p class="overview"><b>Kushal Archaya</b> <br /> JSI R&T</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                       
                        {/* <Swiper 
                        slidesPerView={3} 
                        pagination={{"clickable": true}} 
                        breakpoints={{
                            "@0.00": {
                              "slidesPerView": 1,
                              "spaceBetween": 10
                            }
                          }}
                        className="mySwiper">
                              <SwiperSlide>
                                <div className="card">
                                  <img className="image-cover"  src={window.location.origin + `/Assets/image/Testimonials/kushal_archaya.jpg`} alt="." />
                                  <p class="testimonial">It was wonderful working with the young and energetic team of Amakomaya. Covid Vaccine Equity Project (CVEP) supported Amakomaya for application development and piloting the system in the Tokha municipality.  We look forward to partnering in future projects.</p>
                                  <p class="overview"><b>Kushal Archaya</b> <br /> JSI R&T</p>
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
                        </Swiper> */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}
