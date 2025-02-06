
import About from "@/components/about";
import BreadCrumb from "@/components/bread-crumb";
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const Counter = dynamic(() => import("@/components/counter"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ProcessArea from '@/components/process-area';
import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false });
export default function AboutPage() {
    return (
        <>
            <NavBar page={'about'} />
            <main className="main">
                <BreadCrumb title='About' list={[{ title: "home", path: "/" }, { title: 'about' }]} />
                <About />
                <Counter />
                <Testimonials />
                <ProcessArea />
            </main>
            <Footer />
        </>
    )
}
