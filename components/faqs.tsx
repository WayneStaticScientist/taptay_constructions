import { useFaqs } from '@/stores/static-faqs'
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
                                {useFaqs.map((e, i) => {
                                    return <div className="accordion-item" key={i}>
                                        <h2 className="accordion-header" id={`headingOne${i}`}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#collapseOne${i}`} aria-expanded="true" aria-controls={`collapseOne${i}`}>
                                                <span><i className="far fa-question"></i></span>{e.question}
                                            </button>
                                        </h2>
                                        <div id={`collapseOne${i}`} className="accordion-collapse collapse "
                                            aria-labelledby={`headingOne${i}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {e.answer}
                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
