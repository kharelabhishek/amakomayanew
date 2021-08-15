import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Titlesection from '../../resuable component/titlesection/Titlesection'

import './Ourservice.css'
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
                    <div className="row pt-t">
                        <Titlesection title="Our Products & Initiatives" top="1em"/>
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
                              "slidesPerView": 2,
                              "spaceBetween": 20
                            },
                            "@1.00": {
                              "slidesPerView": 3,
                              "spaceBetween": 40
                            },
                            "@1.50": {
                              "slidesPerView": 3,
                              "spaceBetween": 50
                            }
                          }}
                        className="mySwiper">
                            <SwiperSlide style={{marginBottom:'1em'}}>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/contentapp.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">Amakomaya</h5>
                                            <p className="card-text">Amakomaya is a digital tracking tool that promotes maternal health and safe child birth.</p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/vialtochild.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">Vial to Child</h5>
                                            <p className="card-text">Vial to child is an electronic system developed by Amakomaya for vaccine recording and manangement. It is an android based application that uses mobile devices like tablet and cellular phones to record the immunization data at the point of service. </p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="mt-3 mb-4">
                                <div className="card product">
                                    <img src={window.location.origin + `/Assets/image/ourproduct/amakomayacare.jpg`} alt="" />
                                    <div className="card-body news-stories-heading">
                                        <h5 className="card-title">Amakomaya Care</h5>
                                        <p className="card-text">Amakomaya Care is an application used by FCHVs and health worker of health post to keep
                                            detail record of pregnant mother. FCHVs registers pregnant mothers in their android mobile
                                            by recording basic information (Name & caste, Last menstruation period date (LMP), age
                                            and ward number) and syncing recorded data in server through the use of internet. Every
                                            FCHVs have their own login account of Amakomaya women
                                        </p>
                                        <a className="more" href="/#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/imu.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">IMU Nepal</h5>
                                            <p className="card-text">IMU Nepal is the app for the tracking the COVID-19 patient.</p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        {/* <Swiper autoHeight={true} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{ "clickable": true}} navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/contentapp.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">Amakomaya</h5>
                                            <p className="card-text">Amakomaya is a digital tracking tool that promotes maternal health and safe child birth.</p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/vialtochild.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">Vial to Child</h5>
                                            <p className="card-text">Vial to child is an electronic system developed by Amakomaya for vaccine recording and manangement. It is an android based application that uses mobile devices like tablet and cellular phones to record the immunization data at the point of service. </p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/amakomayacare.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">Amakomaya Care</h5>
                                            <p className="card-text">Amakomaya Care is an application used by FCHVs and health worker of health post to keep
                                                detail record of pregnant mother. FCHVs registers pregnant mothers in their android mobile
                                                by recording basic information (Name & caste, Last menstruation period date (LMP), age
                                                and ward number) and syncing recorded data in server through the use of internet. Every
                                                FCHVs have their own login account of Amakomaya women
                                            </p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mt-3 mb-4">
                                    <div className="card product">
                                        <img src={window.location.origin + `/Assets/image/ourproduct/imu.jpg`} alt="" />
                                        <div className="card-body news-stories-heading">
                                            <h5 className="card-title">IMU Nepal</h5>
                                            <p className="card-text">IMU Nepal is the app for the tracking the COVID-19 patient.</p>
                                            <a className="more" href="/#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> */}

                        {/* <p className="append-buttons">        
                      <button onClick={() => prepend2()} className="prepend-2-slides">Prepend 2 Slides</button>
                      <button onClick={() => prepend()} className="prepend-slide">Prepend Slide</button>
                      <button onClick={() => append()} className="append-slide">Append Slide</button>
                      <button onClick={() => append2()} className="append-2-slides">Append 2 Slides</button>
                  </p> */}
                    </div>
                </div>
            </div>
        </>
    )
}