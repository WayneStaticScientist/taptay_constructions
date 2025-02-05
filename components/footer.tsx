import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-shape" style={{ backgroundImage: "url(assets/img/shape/01.png)" }}></div>
                <div className="footer-widget">
                    <div className="container">
                        <div className="footer-widget-wrap pt-100 pb-80">
                            <div className="row g-4">
                                <div className="col-lg-5">
                                    <div className="footer-widget-box about-us">
                                        <a href="#" className="footer-logo">
                                            <img src="assets/img/logo/logo-light.png" alt="" />
                                        </a>
                                        <p className="mb-4">
                                            We are many variations of passages available but the majority have suffered
                                            alteration some form by injected humour looking layout words believable.
                                        </p>
                                        <div className="footer-newsletter">
                                            <h6>Subscribe Our Newsletter</h6>
                                            <div className="newsletter-form">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <div className="form-icon">
                                                            <i className="far fa-envelopes"></i>
                                                            <input type="email" className="form-control" placeholder="Your Email" />
                                                            <button className="theme-btn" type="submit">
                                                                Subscribe <span className="far fa-paper-plane"></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Company</h4>
                                        <ul className="footer-list">
                                            <li><a href="about.html"><i className="far fa-angle-double-right"></i>About Us</a></li>
                                            <li><a href="blog.html"><i className="far fa-angle-double-right"></i>Update News</a>
                                            </li>
                                            <li><a href="testimonial.html"><i
                                                className="far fa-angle-double-right"></i>Testimonials</a>
                                            </li>
                                            <li><a href="contact.html"><i className="far fa-angle-double-right"></i>Contact Us</a>
                                            </li>
                                            <li><a href="terms.html"><i className="far fa-angle-double-right"></i>Terms Of
                                                Service</a></li>
                                            <li><a href="privacy.html"><i className="far fa-angle-double-right"></i>Privacy
                                                policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Services</h4>
                                        <ul className="footer-list">
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>House
                                                Planning</a></li>
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>Apartment
                                                Design</a></li>
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>Building
                                                Construction</a></li>
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>Architecture
                                                Design</a></li>
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>Building
                                                Maintenance</a></li>
                                            <li><a href="service.html"><i className="far fa-angle-double-right"></i>Design &
                                                Estimating</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget-box">
                                        <h4 className="footer-widget-title">Get In Touch</h4>
                                        <ul className="footer-contact">
                                            <li>
                                                <div className="icon">
                                                    <i className="far fa-location-dot"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Our Address</h6>
                                                    <p>25/AB Milford Road, New York, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="far fa-phone"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Call Us</h6>
                                                    <a href="tel:+21236547898">+2 123 654 7898</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Mail Us</h6>
                                                    <a
                                                        href="https://live.themewild.com/cdn-cgi/l/email-protection#177e79717857726f767a677b723974787a"><span
                                                            className="__cf_email__"
                                                            data-cfemail="6f060109002f0a170e021f030a410c0002">[email&#160;protected]</span></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p className="copyright-text">
                                    &copy; Copyright <span id="date"></span> <a href="#"> Constro </a> All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
