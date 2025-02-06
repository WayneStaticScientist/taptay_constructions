import { ClientTestimonials } from '@/stores/static-info'
import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

export default function Testimonials() {
    return (
        <>
            <div className="testimonial-area ts-bg pt-90 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="site-heading wow fadeInDown" data-wow-delay=".25s">
                                <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Testimonials</span>
                                <h2 className="site-title text-white">What Our Client <span>Says</span> about us</h2>
                                <p className="text-white">
                                    Our clients consistently praise our commitment to quality, reliability, and customer satisfaction.  They appreciate our professionalism, attention to detail, and ability to deliver projects on time and within budget.      </p>
                                <a href="contact.html" className="theme-btn mt-30">Know More <i
                                    className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ReactOwlCarousel
                                margin={20}
                                items={2}
                                height={250}
                                autoplay
                                loop
                                className="testimonial-slider owl-theme wow fadeInUp " data-wow-delay=".25s">

                                {
                                    ClientTestimonials.map((e, i) => {
                                        return (
                                            <div className="testimonial-item" key={i}>
                                                <div className="testimonial-content">
                                                    <div className="testimonial-author-img">
                                                        <img src={e.image} alt="" />
                                                    </div>
                                                    <div className="testimonial-author-info">
                                                        <h4>{e.name}</h4>
                                                        <p>Customer</p>
                                                        <div className="testimonial-rate">
                                                            {
                                                                Array.from({ length: e.rate }, () => {
                                                                    return 1
                                                                }).map((e, i) => {
                                                                    return (
                                                                        <i className="fas fa-star" key={i}></i>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial-quote">
                                                    <div className="testimonial-quote-icon">
                                                        <img src="assets/img/icon/quote.svg" alt="" />
                                                    </div>
                                                    <p>
                                                        {e.message}
                                                    </p>
                                                </div>
                                            </div>)
                                    })
                                }

                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
