import BreadCrumb from "@/components/bread-crumb";
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
export default function CurrentProject() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? <div className="w-screen h-screen flex justify-center items-center ">
                <ImSpinner9 size={50} className=" animate-spin" />
            </div> : <> <NavBar page={'currentproject'} />
                <main className="main">
                    <BreadCrumb title='Current Project' list={[{ title: "home", path: "/" }, { title: 'currentproject' }]} />
                    <div className="portfolio-area py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Our Current Project</span>
                                        <h2 className="site-title">Project in Greendale spanned 2024 - 2025</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 popup-gallery">
                                {
                                    Array.from({ length: 24 }, (e, i) => {
                                        return (
                                            <div className="col-lg-4" key={i}>
                                                <div className="portfolio-item">
                                                    <div className="portfolio-img">
                                                        <img className="img-fluid" src={`assets/img/project/c (${i + 1}).jpeg`} alt="" />
                                                        <Link className="popup-img portfolio-link" href={`assets/img/project/c (${i + 1}).jpeg`}> <i
                                                            className="far fa-plus"></i></Link>
                                                    </div>
                                                    <div className="portfolio-content">
                                                        <div className="portfolio-info">
                                                            <small>Current Project(2025)</small>
                                                            <h4><Link href="#">Greendale 2024 - 2025</Link></h4>
                                                        </div>
                                                        <Link href="#" className="portfolio-arrow"><i
                                                            className="fas fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div >
                        </div>

                    </div >
                </main>

                <Footer />
            </>
            }
        </>
    )
}