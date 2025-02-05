import React from 'react'

export default function WhyChooseUs() {
    return (
        <>
            <div className="choose-area bg py-80">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="site-heading mb-0">
                                <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Why Choose Us</span>
                                <h2 className="site-title">We deliver <span>expertise you can trust</span> our service</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when will uncover many web sites still in their infancy looking at its
                                layout.
                            </p>
                            <a href="contact.html" className="theme-btn mt-20">Contact Us<i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="choose-content wow fadeInUp" data-wow-delay=".25s">
                                <div className="choose-content-wrap">
                                    <div className="choose-item">
                                        <div className="choose-item-icon">
                                            <img src="assets/img/icon/money.svg" alt="" />
                                        </div>
                                        <div className="choose-item-info">
                                            <h4>Affordable Cost</h4>
                                            <p>There are many variations of passages available the majority have suffered
                                                alteration in some by injected humour.</p>
                                        </div>
                                    </div>
                                    <div className="choose-item">
                                        <div className="choose-item-icon">
                                            <img src="assets/img/icon/team.svg" alt="" />
                                        </div>
                                        <div className="choose-item-info">
                                            <h4>Our Experience Team</h4>
                                            <p>There are many variations of passages available the majority have suffered
                                                alteration in some by injected humour.</p>
                                        </div>
                                    </div>
                                    <div className="choose-item">
                                        <div className="choose-item-icon">
                                            <img src="assets/img/icon/certified.svg" alt="" />
                                        </div>
                                        <div className="choose-item-info">
                                            <h4>Certified Company</h4>
                                            <p>There are many variations of passages available the majority have suffered
                                                alteration in some by injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src="assets/img/choose/01.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
