import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrap">
                            <div className="header-top-left">
                                <div className="header-top-list">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"><i
                                                    className="far fa-envelopes"></i>
                                                <span className=""
                                                >#email</span></a>
                                        </li>
                                        <li><a href="tel:+21236547898"><i className="far fa-phone-volume"></i> +2 123 654 7898</a>
                                        </li>
                                        <li><a href="#"><i className="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-top-right">
                                <div className="header-top-list">
                                    <Link href="/"><i className="far fa-sign-in"></i>Home</Link>
                                </div>
                                <div className="header-top-lang">
                                    <div className="">
                                        <a href="#" className="top-lang " ><i
                                            className="fal fa-globe"></i> Eng</a>
                                    </div>
                                </div>
                                <div className="header-top-social">
                                    <span>Follow Us: </span>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-navigation">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container position-relative">
                            <Link className="navbar-brand h-20 w-20 flex justify-center items-center" href="/">
                                <Image src="/assets/img/logo/logo.png" alt="logo"
                                    width={129}
                                    height={107}
                                    className='h-10' />
                            </Link>
                            <div className="mobile-menu-right">
                                <div className="mobile-menu-btn">
                                    <button type="button" className="nav-right-link search-box-outer"><i
                                        className="far fa-search"></i></button>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                    aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <Link href="/" className="offcanvas-brand" id="offcanvasNavbarLabel">
                                        <Image src="/assets/img/logo/logo.png" alt="logo"
                                            width={129}
                                            height={107}
                                            className='h-10' />
                                    </Link>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                                        className="far fa-xmark"></i></button>
                                </div>
                                <div className="offcanvas-body gap-xl-4">
                                    <ul className="navbar-nav justify-content-end flex-grow-1">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active" href="#"
                                            >Home</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                                            <ul className="dropdown-menu fade-down">
                                                <li><Link className="dropdown-item" href="/">Civil Works</Link></li>
                                                <li><Link className="dropdown-item" href="/">Building</Link></li>
                                                <li><Link className="dropdown-item" href="/">Plumbing</Link></li>
                                                <li><Link className="dropdown-item" href="/">Painting</Link></li>
                                                <li><Link className="dropdown-item" href="/">Electrical Installations</Link></li>
                                                <li><Link className="dropdown-item" href="/">Tiling And Capentry</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link " href="#" data-bs-toggle="dropdown">Portfolio</a>

                                        </li>

                                        <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
                                    </ul>
                                    <div className="nav-right">
                                        <div className="search-btn">
                                            <button type="button" className="nav-right-link search-box-outer"><i
                                                className="far fa-search"></i></button>
                                        </div>
                                        <div className="nav-btn">
                                            <a href="contact.html" className="theme-btn">Let&apos;s Talk<i
                                                className="fas fa-arrow-right"></i></a>
                                        </div>
                                        <button type="button" className="sidebar-btn nav-right-link" data-bs-toggle="offcanvas"
                                            data-bs-target="#sidebarPopup">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="sidebar-popup offcanvas offcanvas-end" tabIndex={-1} id="sidebarPopup">
                <div className="offcanvas-header">
                    <a href="index-2.html" className="sidebar-popup-logo">
                        <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="far fa-xmark"></i>
                    </button>
                </div>
                <div className="sidebar-popup-wrap offcanvas-body">
                    <div className="sidebar-popup-content">
                        <div className="sidebar-popup-about">
                            <h4>About Us</h4>
                            <p>We are a construction company specialized in building , wiring , plumbing , civils works and many more.</p>
                        </div>
                        <div className="sidebar-popup-contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <h6>Email</h6>
                                        <a
                                            href="https://live.themewild.com/cdn-cgi/l/email-protection#3f565159507f5a475e524f535a115c5052"><span
                                                className="__cf_email__"
                                                data-cfemail="deb7b0b8b19ebba6bfb3aeb2bbf0bdb1b3">[email&#160;protected]</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <h6>Phone</h6>
                                        <a href="tel:+21236547898">+2 123 654 7898</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="far fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <h6>Address</h6>
                                        <a href="#">25/B Milford Road, New York</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-popup-social">
                            <h4>Follow Us</h4>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
