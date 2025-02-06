import { CompanyInfo } from '@/stores/static-info'
import Link from 'next/link'
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
                                            Taptay Building & Civil Contractors (TBCC) is a Harare, Zimbabwe-based construction company specializing in civil works, renovations, painting, plumbing, electrical, foundations, tiling, and carpentry.                                     </p>
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
                                            <li><a href="#"><i className="far fa-angle-double-right"></i>About Us</a></li>
                                            <li><a href="#"><i className="far fa-angle-double-right"></i>Gallery</a>
                                            </li>
                                            <li><a href="#"><i className="far fa-angle-double-right"></i>Portifolio</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Services</h4>
                                        <ul className="footer-list">
                                            <li><Link className="dropdown-item" href="/">Civil Works</Link></li>
                                            <li><Link className="dropdown-item" href="/">Building</Link></li>
                                            <li><Link className="dropdown-item" href="/">Plumbing</Link></li>
                                            <li><Link className="dropdown-item" href="/">Painting</Link></li>
                                            <li><Link className="dropdown-item" href="/">Electrical Installations</Link></li>
                                            <li><Link className="dropdown-item" href="/">Tiling And Capentry</Link></li>
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
                                                    <p>{CompanyInfo.city} {CompanyInfo.addrees} {CompanyInfo.place}, Zimbabwe</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="far fa-phone"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Call Us</h6>
                                                    {
                                                        CompanyInfo.phoneNumber.map((e, i) => {
                                                            return (<a key={i} href={`tel:${e}`}>{e}</a>)
                                                        })
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Mail Us</h6>
                                                    <a
                                                        href={`$mailto:${CompanyInfo.email}`}><span

                                                        >{CompanyInfo.email}</span></a>
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
                                    &copy; Copyright <span id="date"></span> <a href="#"> TapTay {new Date().getFullYear()} </a> All Rights Reserved.
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
