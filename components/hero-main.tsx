import React from 'react'

export default function HeroMain() {
    return (
        <>
            <div className="hero-section">
                <div className="">
                    <div className="hero-single" style={{ backgroundImage: "url(assets/img/hero/slider.jpg)" }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-6">
                                    <div className="hero-content">
                                        <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                            <span className='mr-3 '>TapTay</span>
                                            We are the leaders in <span>construction</span> company
                                        </h1>
                                        <p data-animation="fadeInLeft" data-delay=".75s">
                                            We offer best quality construction services in Zimbabwe
                                        </p>
                                        <div className="hero-btn" data-animation="fadeInUp" data-delay="1s">
                                            <a href="about.html" className="theme-btn">About More<i
                                                className="fas fa-arrow-right"></i></a>
                                            <a href="contact.html" className="theme-btn2">Learn More<i
                                                className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
