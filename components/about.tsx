import React from 'react'

export default function About() {
    return (
        <>
            <div className="about-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                                <div className="about-img">
                                    <img className="img-1" src="assets/img/about/01.jpg" alt="" />
                                    <img className="img-2" src="assets/img/about/02.jpg" alt="" />
                                </div>
                                <div className="about-experience">
                                    <h5>30<span>+</span></h5>
                                    <p>Years Of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInUp" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> About Us</span>
                                    <h2 className="site-title">We Are The <span>Best and Expert</span> For Construction</h2>
                                </div>
                                <p className="about-text">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which dont look even.</p>
                                <div className="about-content">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="about-item border-end pe-2">
                                                <div className="icon">
                                                    <img src="assets/img/icon/team-2.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>Our Experts Team</h6>
                                                    <p>Take a look at our up of the round shows.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-item">
                                                <div className="icon">
                                                    <img src="assets/img/icon/material.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>Strong Materials</h6>
                                                    <p>Take a look at our up of the round shows.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="about.html" className="theme-btn">Discover More<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
