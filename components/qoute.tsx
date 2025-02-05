import React from 'react'

export default function RequestQoute() {
    return (
        <>
            <div className="quote-area" style={{ backgroundImage: "url(assets/img/quote/01.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 ms-auto">
                            <div className="quote-content">
                                <div className="quote-head">
                                    <h3>Request A Quote</h3>
                                    <p>It is a long established fact that a reader will be distracted by the
                                        readable content of majority have suffered alteration page when looking at its
                                        layout.</p>
                                </div>
                                <div className="quote-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-user-tie"></i>
                                                        <input type="text" className="form-control" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-envelope"></i>
                                                        <input type="email" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-phone"></i>
                                                        <input type="text" className="form-control" placeholder="Your Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-box"></i>
                                                        <select className="select">
                                                            <option value="">Choose Service</option>
                                                            <option value="1">Service One</option>
                                                            <option value="2">Service Two</option>
                                                            <option value="3">Service Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-comment-lines"></i>
                                                        <textarea className="form-control" cols={30} rows={4}
                                                            placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="theme-btn">Register Now<i
                                                    className="fas fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
