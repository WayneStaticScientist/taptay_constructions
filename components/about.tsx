import { CompanyInfo } from '@/stores/static-info'
import Link from 'next/link'
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
                                    <h5>{new Date().getFullYear() - CompanyInfo.startYear}<span>+</span></h5>
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
                                <p className="about-text">Taptay Building & Civil Contractors is a leading construction company in Harare, Zimbabwe, specializing in a wide range of services including civil works, building renovations, painting, plumbing, electrical installations, special foundations, tiling, and carpentry.

                                    With years of experience and a commitment to quality and customer satisfaction, we have established a strong reputation for delivering exceptional results on every project, big or small.</p>
                                <div className="about-content">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="about-item border-end pe-2">
                                                <div className="icon">
                                                    <img src="assets/img/icon/team-2.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>Our Values</h6>
                                                    <p>Integrity<br />
                                                        Qualit</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-item">
                                                <div className="icon">
                                                    <img src="assets/img/icon/material.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6>Our Mission</h6>
                                                    <p>To provide our clients with reliable, efficient, and high-quality construction services that exceed their expectation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="about.html" className="theme-btn">Discover More<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
