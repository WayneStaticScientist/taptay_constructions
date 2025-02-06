import Link from 'next/link'
import React from 'react'

export default function ServiceData({ title, content, workProgress, summaryWork, image }: {
    content: string[],
    title: string
    image?: string | null
    summaryWork?: string | null, workProgress?: string[] | null
}) {
    return (
        <>
            <div className="service-single py-120">
                <div className="container">
                    <div className="service-single-wrap">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="service-sidebar">
                                    <div className="widget">
                                        <h4 className="title">All Services</h4>
                                        <div className="category">
                                            <Link href="/civil"><i className="far fa-angle-double-right"></i>Civil Construction</Link>
                                            <Link href="/building"><i className="far fa-angle-double-right"></i>Building </Link>
                                            <Link href="/plumbing"><i className="far fa-angle-double-right"></i>Plumbing </Link>
                                            <Link href="/painting"><i className="far fa-angle-double-right"></i>Painting</Link>
                                            <Link href="/electrical"><i className="far fa-angle-double-right"></i>Electrical Installations</Link>
                                            <Link href="/tiling"><i className="far fa-angle-double-right"></i>Tiling and Capentry</Link>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h4 className="title">In Touch</h4>
                                        <div className="service-download">
                                            <a href="#"><i className="far fa-file-pdf"></i>Call Us</a>
                                            <a href="#"><i className="far fa-file-alt"></i>Whatsapp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="service-details">
                                    {image ? <div className="mb-30">
                                        <img src={image} alt="thumb" />
                                    </div> : <></>}
                                    <div className="content">
                                        <h3 className="mb-20">{title}</h3>
                                        {content.map((e, i) => {
                                            return <p key={i} className='mb-20'>
                                                {e}
                                            </p>
                                        })}

                                        {workProgress ? <div className="my-4">
                                            <div className="mb-3">
                                                <h3 className="mb-3">Our Work Process</h3>
                                                {summaryWork ? <p>{summaryWork}</p> : <></>}
                                            </div>
                                            <ul className="list">
                                                {workProgress.map((e, i) => {
                                                    return <li key={i}><i className="far fa-check-double"></i>{e}</li>
                                                })}
                                            </ul>
                                        </div>
                                            : <></>}
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
