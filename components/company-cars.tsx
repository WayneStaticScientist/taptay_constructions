import React from 'react'

export default function CompanyCars() {
    return (
        <div className="team-area py-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span className="site-title-tagline"><i className="far fa-helmet-safety"></i>Company Cars</span>
                            <h2 className="site-title">Company <span>Vehicles</span></h2>
                            <div className="heading-divider"></div>
                        </div>
                    </div>
                </div>
                <div className="row g-4">

                    {
                        Array.from({ length: 3 }, (e, i) => {
                            return <div className="col-md-6 col-lg-4" key={i}>
                                <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="team-img">
                                        <img src={`assets/img/cars/car (${i + 1}).jpeg`} alt="thumb" />
                                        <div className="team-social-wrap">
                                            <div className="team-social-btn">
                                                <button type="button"><i className="far fa-share-alt"></i></button>
                                            </div>
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-x-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4><a href={`assets/img/cars/car (${i + 1}).jpeg`}>Car {i + 1}</a></h4>
                                        <span>TapTay</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
