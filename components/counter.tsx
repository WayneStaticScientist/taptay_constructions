import { CompanyInfo } from '@/stores/static-info'
import React from 'react'

export default function Counter() {
    return (
        <>  <div className="counter-area pt-40 pb-40">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="counter-item wow fadeInUp" data-wow-delay=".25s">
                            <div className="icon">
                                <img src="assets/img/icon/construction.svg" alt="" />
                            </div>
                            <div className="content">
                                <div className="info">
                                    <span className="counter" data-count="+" data-to={`${CompanyInfo.projects}`} data-speed="3000">{
                                        CompanyInfo.projects}</span>
                                    <span className="unit">+</span>
                                </div>
                                <h6 className="title">Projects Done</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="counter-item wow fadeInUp" data-wow-delay=".25s">
                            <div className="icon">
                                <img src="assets/img/icon/team-2.svg" alt="" />
                            </div>
                            <div className="content">
                                <div className="info">
                                    <span className="counter" data-count="+" data-to={`${CompanyInfo.experts}`} data-speed="3000">{CompanyInfo.experts}</span>
                                    <span className="unit">+</span>
                                </div>
                                <h6 className="title">Experts Staff</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="counter-item wow fadeInDown" data-wow-delay=".25s">
                            <div className="icon">
                                <img src="assets/img/icon/award.svg" alt="" />
                            </div>
                            <div className="content">
                                <div className="info">
                                    <span className="counter" data-count="+" data-to={`${CompanyInfo.awards}`} data-speed="3000">{CompanyInfo.assistants}</span>
                                    <span className="unit">+</span>
                                </div>
                                <h6 className="title">Assistants</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="counter-item wow fadeInDown" data-wow-delay=".25s">
                            <div className="icon">
                                <img src="assets/img/icon/award.svg" alt="" />
                            </div>
                            <div className="content">
                                <div className="info">
                                    <span className="counter" data-count="+" data-to={`${CompanyInfo.awards}`} data-speed="3000">{CompanyInfo.awards}</span>
                                    <span className="unit">+</span>
                                </div>
                                <h6 className="title">Win Awards</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="counter-item wow fadeInDown" data-wow-delay=".25s">
                            <div className="icon">
                                <img src="assets/img/icon/award.svg" alt="" />
                            </div>
                            <div className="content">
                                <div className="info">
                                    <span className="counter" data-count="+" data-to={`${CompanyInfo.officeWorkers}`} data-speed="3000">{CompanyInfo.awards}</span>
                                    <span className="unit">+</span>
                                </div>
                                <h6 className="title">Office Workers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
