import React from 'react'

export default function Faqs() {
    return (
        <>
            <div className="faq-area py-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-content wow fadeInUp" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Faqs</span>
                                    <h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
                                </div>
                                <p className="mb-3">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which dont look even.</p>
                                <p className="mb-4">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                    fugit.
                                </p>
                                <a href="contact.html" className="theme-btn mt-2">Have Any Question ?</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion wow fadeInRight" data-wow-delay=".25s" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span><i className="far fa-question"></i></span> How Long Does A Service Take ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We denounce with righteous indignation and dislike men who
                                            are so beguiled and demoralized by the charms of pleasure of the moment so
                                            blinded by desire ante odio dignissim quam vitae pulvinar turpis.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span><i className="far fa-question"></i></span> How Can I Become A Member
                                            ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We denounce with righteous indignation and dislike men who
                                            are so beguiled and demoralized by the charms of pleasure of the moment so
                                            blinded by desire ante odio dignissim quam vitae pulvinar turpis.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <span><i className="far fa-question"></i></span> What Payment Gateway You Support ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We denounce with righteous indignation and dislike men who
                                            are so beguiled and demoralized by the charms of pleasure of the moment so
                                            blinded by desire ante odio dignissim quam vitae pulvinar turpis.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <span><i className="far fa-question"></i></span> How Can I Cancel My Request ?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We denounce with righteous indignation and dislike men who
                                            are so beguiled and demoralized by the charms of pleasure of the moment so
                                            blinded by desire ante odio dignissim quam vitae pulvinar turpis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
