import React from 'react'

export default function FeatureArea() {
    return (
        <>
            <div className="feature-area pt-100">
                <div className="container">
                    <div className="feature-wrap">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-item">
                                    <span className="count">01</span>
                                    <div className="feature-icon">
                                        <img src="assets/img/icon/money.svg" alt="" />
                                    </div>
                                    <div className="feature-content">
                                        <h4>The Best Price</h4>
                                        <p>We offer the best prices in the market without compromising on quality. Our competitive pricing ensures you get the best value for your money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-item">
                                    <span className="count">02</span>
                                    <div className="feature-icon">
                                        <img src="assets/img/icon/consultation.svg" alt="" />
                                    </div>
                                    <div className="feature-content">
                                        <h4>Quality Construction</h4>
                                        <p>
                                            Our team of experienced professionals ensures that every project is completed to the highest standards. We use top-quality materials
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-item">
                                    <span className="count">03</span>
                                    <div className="feature-icon">
                                        <img src="assets/img/icon/design.svg" alt="" />
                                    </div>
                                    <div className="feature-content">
                                        <h4>Best Designs</h4>
                                        <p>     We create innovative and functional designs that meet your needs and preferences. We focus on aesthetics and practicality to deliver the best results.
                                        </p>
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
