import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Titlesection from '../../resuable component/titlesection/Titlesection'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Ourservice.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function Ourservice() {
  
  
  
  // const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
  //     '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
  //   ]);
  // }

  // const prepend = () => {
  //   swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  // }

  // const append = () => {
  //   swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  // }

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
  //     '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
  //   ]);
  // }
  
  return (
    <>
        <div className="background-css">
            <div className="container">
             <div className="row pt-t">

              <Titlesection title="Our Products & Initiatives" />
                  <Swiper autoHeight={true} slidesPerView={3} centeredSlides={true} spaceBetween={20}  navigation={true} className="mySwiper">
                     
                      <SwiperSlide>                      
                        <div className="mt-3 mb-4">
                            <div className="card product">
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/amakomayacare.jpg`}  alt=""/> */}
                            {/* <img src={} className="card-img-top img-fluid" alt="..." />  */}
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/AMC.png`} className="card-img-top img-fluid" alt="..." />  */}
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
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/vialtochild.jpg`}  alt=""/> */}
                            {/* <img src={} className="card-img-top img-fluid" alt="..." />  */}
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/VTC.png`} className="card-img-top img-fluid" alt="..." />  */}
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
                            {/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
                            {/* <img src={} className="card-img-top img-fluid" alt="..." />  */}
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/AMC.png`} className="card-img-top img-fluid" alt="..." />  */}
                                <div className="card-body news-stories-heading">
                                    <h5 className="card-title">Amakomaya Care</h5>
                                    <p className="card-text">Amakomaya Care is an application used by FCHVs and health worker of health post to keep
detail record of pregnant mother. FCHVs registers pregnant mothers in their android mobile
by recording basic information (Name & caste, Last menstruation period date (LMP), age
and ward number) and syncing recorded data in server through the use of internet. Every
FCHVs have their own login account of Amakomaya women</p>            
                                    <a className="more" href="/#">Read More</a>          
                                </div>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>                      
                        <div className="mt-3 mb-4">
                            <div className="card product">
                            {/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
                            {/* <img src={} className="card-img-top img-fluid" alt="..." />  */}
                            {/* <img src={window.location.origin + `/Assets/image/ourproduct/AMC.png`} className="card-img-top img-fluid" alt="..." />  */}
                                <div className="card-body news-stories-heading">
                                    <h5 className="card-title">IMU Nepal</h5>
                                    <p className="card-text">IMU Nepal is the app for the tracking the COVID-19 patient.</p>            
                                    <a className="more" href="/#">Read More</a>          
                                </div>
                            </div>
                        </div>
                      </SwiperSlide>
                  </Swiper>

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