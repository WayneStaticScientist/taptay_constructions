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
                                <p className="mb-3">Here are some Frequently Asked Questions (FAQs) asked
                                    by our clients
                                </p>
                                <p className="mb-4">
                                    We&apos;ve compiled a list of frequently asked questions to help you understand our services and how we can assist you with your construction needs.

                                    What We Do

                                    We offer a comprehensive range of construction services, from renovations and painting to specialized foundation work and civil projects. We handle both residential and commercial projects, big or small.

                                    Where to Find Us

                                    Our office is located in Southerton, Harare. You can find our full address and contact details on our website or marketing materials.
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
                                            <span><i className="far fa-question"></i></span>What services do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We offer a wide range of construction services, including civil works, building renovations, painting, plumbing, electrical installations, special foundations, tiling, and carpentry.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span><i className="far fa-question"></i></span>  Where are you located?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We are located in Southerton, Harare. Our office address is Stand No. 11082, Montague Investments, Cnr Highfields Rd/Craster Rd
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <span><i className="far fa-question"></i></span>Do you handle both residential and commercial projects?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we cater to both residential and commercial clients.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <span><i className="far fa-question"></i></span>  Do you offer specialized foundation work?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we have expertise in special foundation construction. Contact us for details.
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
