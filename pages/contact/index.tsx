
import BreadCrumb from "@/components/bread-crumb";
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import { CompanyInfo } from "@/stores/static-info";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";

export default function ContactPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? <div className="w-screen h-screen flex justify-center items-center ">
                <ImSpinner9 size={50} className=" animate-spin" />
            </div> : <> <NavBar page={'contact'} />
                <main className="main">
                    <BreadCrumb title='Contact Us' list={[{ title: "home", path: "/" }, { title: 'contact' }]} />

                    <div className="contact-area py-120">
                        <div className="container">
                            <div className="contact-content">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="contact-info">
                                            <div className="icon">
                                                <i className="fal fa-map-location-dot"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Office Address</h5>
                                                <p>{CompanyInfo.addrees} {CompanyInfo.city} {CompanyInfo.place}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="contact-info">
                                            <div className="icon">
                                                <i className="fal fa-phone-volume"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Call Us</h5>
                                                {CompanyInfo.phoneNumber.map((e, i) => {
                                                    return <p key={i}>{e}</p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="contact-info">
                                            <div className="icon">
                                                <i className="fal fa-envelopes"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Email Us</h5>
                                                <p><a href="" className="__cf_email__" >{CompanyInfo.email}</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="contact-info">
                                            <div className="icon">
                                                <i className="fal fa-alarm-clock"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Open Time</h5>
                                                <p>Mon - Sat (10.00AM - 05.30PM)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-wrap">
                                <div className="row g-4">
                                    <div className="col-lg-5">
                                        <div className="contact-img">
                                            <img src="assets/img/portfolio/05.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="contact-form">
                                            <div className="contact-form-header">
                                                <h2>Get In Touch</h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable
                                                    content of a page randomised words which dont look even slightly when looking at its layout. </p>
                                            </div>
                                            <div className="form-message"></div>
                                            <form method="post" action="https://live.themewild.com/constro/assets/php/contact.php" id="contact-form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-icon">
                                                                <i className="far fa-user-tie"></i>
                                                                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="form-icon">
                                                                <i className="far fa-envelope"></i>
                                                                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-pen"></i>
                                                        <input type="text" className="form-control" name="subject" placeholder="Your Subject" required />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-icon">
                                                        <i className="far fa-comment-lines"></i>
                                                        <textarea name="message" cols={30} rows={5} className="form-control"
                                                            placeholder="Write Your Message" required></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="theme-btn">Send
                                                    Message <i className="far fa-paper-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>}
        </>
    )
}
