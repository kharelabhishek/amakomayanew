import React from 'react'

export default function Slider() {
    return (
        <div>
           <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/1499151372321.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/1497949841vial.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412760252.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412762067.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412763713.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412764364.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412765535.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.amakomaya.com/backend/web/uploads/slider/14412766586.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}
