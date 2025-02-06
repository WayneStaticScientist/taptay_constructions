import BreadCrumb from "@/components/bread-crumb";
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import dynamic from "next/dynamic";
import Link from "next/link";
export default function Portfolio() {
    return (
        <>
            <NavBar page={'portfolio'} />
            <main className="main">
                <BreadCrumb title='Portifolio' list={[{ title: "home", path: "/" }, { title: 'portifolio' }]} />    <div className="portfolio-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline"><i className="far fa-helmet-safety"></i> Our Portfolio</span>
                                    <h2 className="site-title">Lets check our latest portfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 popup-gallery">
                            {
                                Array.from({ length: 24 }, (e, i) => {
                                    const number = (i < 10) ? `0${i + 1}` : `${i + 1}`
                                    return (
                                        <div className="col-lg-4" key={i}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-img">
                                                    <img className="img-fluid" src={`assets/img/portfolio/${number}.jpg`} alt="" />
                                                    <Link className="popup-img portfolio-link" href={`assets/img/portfolio/${number}.jpg`}> <i
                                                        className="far fa-plus"></i></Link>
                                                </div>
                                                <div className="portfolio-content">
                                                    <div className="portfolio-info">
                                                        <small>Gallery</small>
                                                        <h4><Link href="#">TapTay</Link></h4>
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
    )
}