import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'


export default function Civil() {

    const c1 = `At Taptay Building & Civil Contractors, we transform your vision into reality. 
    Whether you're building a cozy family home, a modern office space, or a functional industrial facility,
    we bring expertise and dedication to every project. 
    From concept to completion, we're with you every step of the way`

    const c2 = `
  Taptay Building & Civil Contractors is synonymous with quality construction.  We use premium materials, employ skilled craftsmen, and adhere to the highest industry standards to ensure your building stands the test of time.  Our commitment to excellence is evident in every detail.
`
    return (
        <>
            <NavBar />
            <main className="main">
                <BreadCrumb title='Civil Construction' list={[{ title: "home", path: "/" }, { title: 'civil' }]} />
                <ServiceData content={[c1, c2]} title={'Civil Construction'}
                    summaryWork={' Taptay Building & Civil Contractors is your trusted partner for quality construction in the Harare area.  We specialize in residential, commercial, and industrial projects, bringing years of local experience and a commitment to client satisfaction to every build.  From concept to completion, we handle every detail with care, ensuring your project is completed on time and within budget.  Contact us today to discuss your vision!'}
                    workProgress={['Concept & Design', 'Feasibility Studies & Site Analysis',
                        'Site Preparation',
                        'Foundation Construction',
                        'Structural Work',
                        'MEP Systems Installation',
                        'Fixtures & Equipment Installation']} />
            </main>
            <Footer />
        </>
    )
}