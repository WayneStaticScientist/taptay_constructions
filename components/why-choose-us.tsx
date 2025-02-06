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
                                Choosing Taptay Building & Civil Contractors means choosing a partner you can trust to bring your vision to life with quality, professionalism, and integrity.  Contact us today to discuss your next project!
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
                                            <h4>Unwavering Commitment to Quality</h4>
                                            <p> We dont just build structures; we build with excellence.  From the foundation to the finishing touches, we adhere to the highest quality standards, ensuring lasting durability and aesthetic appeal.  </p>
                                        </div>
                                    </div>
                                    <div className="choose-item">
                                        <div className="choose-item-icon">
                                            <img src="assets/img/icon/team.svg" alt="" />
                                        </div>
                                        <div className="choose-item-info">
                                            <h4>Comprehensive Range of Services</h4>
                                            <p> We are your one-stop shop for all your construction needs.  Whether you&apos;re planning a small renovation, a large-scale civil project, or require specialized services like foundation work or intricate carpentry, our diverse expertise covers it all.</p>
                                        </div>
                                    </div>
                                    <div className="choose-item">
                                        <div className="choose-item-icon">
                                            <img src="assets/img/icon/certified.svg" alt="" />
                                        </div>
                                        <div className="choose-item-info">
                                            <h4>Experienced and Skilled Team</h4>
                                            <p>Our team comprises seasoned professionals with a wealth of experience in their respective fields.  We invest in continuous training and development to ensure our skills remain at the forefront of industry best practices</p>
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
