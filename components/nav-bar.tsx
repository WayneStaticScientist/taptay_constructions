import { CompanyInfo } from '@/stores/static-info'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function NavBar({ page }: { page?: string | null }) {
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
                                            <Link href="#"><i
                                                className="far fa-envelopes"></i>
                                                <span className=""
                                                >{CompanyInfo.email}</span>
                                            </Link>
                                        </li>
                                        <li><Link href={`tel:${CompanyInfo.phoneNumber[0]}`}><i className="far fa-phone-volume"></i> {CompanyInfo.phoneNumber[0]}</Link >
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="header-top-right">
                                <div className="header-top-list">
                                    <Link href="/"><i className="far fa-sign-in"></i>Home</Link>
                                </div>
                                <div className="header-top-lang">
                                    <div className="">
                                        <Link href="#" className="top-lang " ><i
                                            className="fal fa-globe"></i> Eng</Link>
                                    </div>
                                </div>
                                <div className="header-top-social">
                                    <span>Follow Us: </span>
                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                    <Link href="#"><i className="fab fa-x-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-linkedin"></i></Link>
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
                                        <li className="nav-item ">
                                            <Link className={`nav-link ${page == 'home' ? 'active' : ''} `} href="/"
                                            >Home</Link>
                                        </li>
                                        <li className="nav-item"><Link className={`nav-link ${page == 'about' ? 'active' : ''} `} href="/about">About</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className={`nav-link dropdown-toggle ${!page ? 'active' : ''}`} href="#" data-bs-toggle="dropdown">Services</Link>
                                            <ul className="dropdown-menu fade-down">
                                                <li><Link className="dropdown-item" href="/civil">Civil Works</Link></li>
                                                <li><Link className="dropdown-item" href="/building">Building</Link></li>
                                                <li><Link className="dropdown-item" href="/plumbing">Plumbing</Link></li>
                                                <li><Link className="dropdown-item" href="/painting">Painting</Link></li>
                                                <li><Link className="dropdown-item" href="/electrical">Electrical Installations</Link></li>
                                                <li><Link className="dropdown-item" href="/tiling">Tiling And Capentry</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item ">
                                            <Link className={`nav-link ${page == 'portfolio' ? 'active' : ''} `} href="/portfolio">Portfolio</Link>
                                        </li>
                                        <li className="nav-item"><Link className={`nav-link ${page == 'currentproject' ? 'active' : ''} `} href="/currentproject">Current Project</Link></li>
                                        <li className="nav-item"><Link className={`nav-link ${page == 'contact' ? 'active' : ''} `} href="/contact">Contact</Link></li>
                                    </ul>
                                    <div className="nav-right">
                                        <div className="search-btn">
                                            <button type="button" className="nav-right-link search-box-outer"><i
                                                className="far fa-search"></i></button>
                                        </div>
                                        <div className="nav-btn">
                                            <Link href="contact.html" className="theme-btn">Let&apos;s Talk<i
                                                className="fas fa-arrow-right"></i></Link>
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
                    <Link href="index-2.html" className="sidebar-popup-logo">
                        <img src="assets/img/logo/logo.png" alt="" />
                    </Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="far fa-xmark"></i>
                    </button>
                </div>
                <div className="sidebar-popup-wrap offcanvas-body">
                    <div className="sidebar-popup-content">
                        <div className="sidebar-popup-about">
                            <h4>TapTay</h4>
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
                                        <Link
                                            href={`mailto:${CompanyInfo.email}`}><span
                                            >
                                                {CompanyInfo.email}</span></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <h6>Phone</h6>
                                        <Link href={`tel:${CompanyInfo.phoneNumber}`}>{CompanyInfo.phoneNumber[0]}</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="far fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <h6>Address</h6>
                                        <Link href="#">{CompanyInfo.addrees} {CompanyInfo.city} {CompanyInfo.place}</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-popup-social">
                            <h4>Follow Us</h4>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-x-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
