
import About from "@/components/about";
import BreadCrumb from "@/components/bread-crumb";
import CompanyCars from "@/components/company-cars";
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const Counter = dynamic(() => import("@/components/counter"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ProcessArea from '@/components/process-area';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false });
export default function AboutPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? <div className="w-screen h-screen flex justify-center items-center ">
                <ImSpinner9 size={50} className=" animate-spin" />
            </div> : <>
                <NavBar page={'about'} />
                <main className="main">
                    <BreadCrumb title='About' list={[{ title: "home", path: "/" }, { title: 'about' }]} />
                    <About />
                    <Counter />
                    <Testimonials />
                    <CompanyCars />
                    <ProcessArea />
                </main>
                <Footer />
            </>
            }
        </>
    )
}
