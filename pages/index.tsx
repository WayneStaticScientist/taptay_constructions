import About from "@/components/about";
import Faqs from "@/components/faqs";
import FeatureArea from "@/components/feature";
import ProcessArea from "@/components/process-area";
import WhyChooseUs from "@/components/why-choose-us";
import dynamic from "next/dynamic";
import { ImSpinner9 } from "react-icons/im";
import { useEffect, useState } from "react";
const NavBar = dynamic(() => import("@/components/nav-bar"), { ssr: false });
const HeroMain = dynamic(() => import("@/components/hero-main"), { ssr: false });
const Patners = dynamic(() => import("@/components/partners"), { ssr: false });
const Counter = dynamic(() => import("@/components/counter"), { ssr: false });
const RequestQoute = dynamic(() => import("@/components/qoute"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     setLoading(false);
  }, []);
  return (
    <>
      {loading ? <div className="w-screen h-screen flex justify-center items-center ">
        <ImSpinner9 size={50} className=" animate-spin" />
      </div> : <><NavBar page={'home'} />
        <main className="main">
          <HeroMain />
          <Patners />
          <FeatureArea />
          <About />
          <Counter />
          <ProcessArea />
          <WhyChooseUs />
          <RequestQoute />
          <Faqs />
          <Testimonials />
        </main>
        <Footer /></>}
    </>
  );
}
