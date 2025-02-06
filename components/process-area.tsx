import React from 'react'

export default function ProcessArea() {
    return (
        <>  <div className="process-area py-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Working
                                Process</span>
                            <h2 className="site-title">Easy steps for <span>constro</span></h2>
                            <div className="heading-divider"></div>
                        </div>
                    </div>
                </div>
                <div className="process-wrap mt-3 wow fadeInUp" data-wow-delay=".25s">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="process-item">
                                <span className="count">01</span>
                                <div className="icon">
                                    <img src="assets/img/icon/service.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Choose Service</h4>
                                    <p>pick your service you want at moment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="process-item">
                                <span className="count">02</span>
                                <div className="icon">
                                    <img src="assets/img/icon/consultation.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Free Consultant</h4>
                                    <p>Get feedback from construction guys about availabiliy and timeframe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="process-item">
                                <span className="count">03</span>
                                <div className="icon">
                                    <img src="assets/img/icon/money.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Estimate Budget</h4>
                                    <p>In response you will receive qoutations about the service applied for</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="process-item">
                                <span className="count">04</span>
                                <div className="icon">
                                    <img src="assets/img/icon/construction-2.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h4> Production</h4>
                                    <p>Once you agree : Our teams will prepare for the service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}
